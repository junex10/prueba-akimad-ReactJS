import React, { Component } from 'react';
import { AxiosProvider } from 'react-axios';
import {
    Get
} from 'react-axios';
import { gitHubInstance } from '../../helpers/utility';

import { withRouter } from "react-router";
import DataTable from 'react-data-table-component';

import Spinner from '../shared/spinner/Spinner';

class GetOrganizationsUser extends Component {
    constructor(props) {
        super(props);

        this.login = props.userName;
        this.columns = [
            {
                name: 'Organización',
                selector: row => row.organization
            },
            {
                name: 'Descripción',
                selector: row => row.description
            },
            {
                name: 'Avatar',
                selector: row => row.avatar
            },
            {
                name: 'Link',
                selector: row => row.url
            }
        ];
    }
    render() {
        return (
            <>
                <AxiosProvider instance={gitHubInstance()}>
                    <Get
                        url={`users/${this.login}/orgs`}
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
                                                organization: val.login,
                                                avatar: <img width='50' className='mt-4 mb-4' src={val.avatar_url} alt={`usuario_${val.avatar_url}`} />,
                                                url: <a target='_blank' rel='noreferrer' href={val.url}>{val.url}</a>,
                                                description: (val.description === '') ? 'Sin descripción' : val.description
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

export default withRouter(GetOrganizationsUser);