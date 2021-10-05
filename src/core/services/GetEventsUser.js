import React, { Component } from 'react';
import { AxiosProvider } from 'react-axios';
import {
    Get
} from 'react-axios';
import { gitHubInstance } from '../../helpers/utility';

import { withRouter } from "react-router";
import DataTable from 'react-data-table-component';

import moment from 'moment';

import Spinner from '../shared/spinner/Spinner';

class GetEventsUser extends Component {
    constructor(props){
        super(props)
        this.login = props.userName;
        this.columns = [
            {
                name: 'Evento',
                selector: row => row.evento
            },
            {
                name: 'Tipo',
                selector: row => row.type
            },
            {
                name: 'Avatar',
                selector: row => row.avatar
            },
            {
                name: 'Repositorio',
                selector: row => row.repository
            },
            {
                name: 'Fecha de creación',
                selector: row => row.created
            }
        ];
    }
    render() {
        return (
            <>
                <AxiosProvider instance={gitHubInstance()}>
                    <Get
                        url={`users/${this.login}/received_events`}
                    >
                        {
                            (error, resp, isLoading) => {
                                if (error) {
                                    return <h1> Error </h1>
                                }
                                else if(isLoading) {
                                    return (
                                        <Spinner />
                                    )
                                }
                                else if (resp !== null) {
                                    const data = resp.data;
                                    let setDatos = [];
                                    data.map(val => {
                                        return setDatos.push(
                                            {
                                                evento: val.actor.login,
                                                type: val.type,
                                                avatar: <img width='50' className='mt-4 mb-4' src={val.actor.avatar_url} alt={`evento_${val.actor.avatar_url}`} />,
                                                repository: <a target='_blank' rel='noreferrer' href={val.repo.url}>{val.repo.url}</a>,
                                                created: moment(val.created_at).format('DD/MM/YYYY hh:mm A')
                                            }
                                        );
                                    });
                                    return (
                                        <>
                                            <DataTable
                                                pagination
                                                columns={this.columns}
                                                data={
                                                    setDatos
                                                }
                                            />
                                        </>
                                    );
                                }
                                else {
                                    return <h1>No error</h1>
                                }
                            }
                        }
                    </Get>
                </AxiosProvider>
            </>
        );
    }
}

export default withRouter(GetEventsUser);