import React, { Component } from 'react';
import { AxiosProvider } from 'react-axios';
import {
    Get
} from 'react-axios';
import { gitHubInstance } from '../../helpers/utility';

import { withRouter } from "react-router";
import DataTable from 'react-data-table-component';

import Spinner from '../shared/spinner/Spinner';

import moment from 'moment';

class GetRepositoryUser extends Component {
    constructor(props) {
        super(props);

        this.login = props.userName;
        this.columns = [
            {
                name: 'Repositorio',
                selector: row => row.repository
            },
            {
                name: 'Link',
                selector: row => row.url
            },
            {
                name: 'Descripción',
                selector: row => row.description
            },
            {
                name: 'Fecha de creación',
                selector: row => row.created
            },
            {
                name: 'Fecha de actualización',
                selector: row => row.updated
            }
            ,
            {
                name: 'Fecha de última subida',
                selector: row => row.pushed
            }
        ];
    }
    render() {
        return (
            <>
                <AxiosProvider instance={gitHubInstance()}>
                    <Get
                        url={`users/${this.login}/repos`}
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
                                                repository: val.name,
                                                url: <a target='_blank' rel='noreferrer' href={val.html_url}>{val.html_url}</a>,
                                                description: (val.description === null) ? 'Sin descripción' : val.description,
                                                created: moment(val.created_at).format('DD/MM/YYYY hh:mm A'),
                                                updated: moment(val.updated_at).format('DD/MM/YYYY hh:mm A'),
                                                pushed: moment(val.pushed_at).format('DD/MM/YYYY hh:mm A')
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

export default withRouter(GetRepositoryUser);