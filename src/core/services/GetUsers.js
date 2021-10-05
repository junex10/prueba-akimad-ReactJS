import React, { Component } from 'react';
import { AxiosProvider } from 'react-axios';
import DataTable from 'react-data-table-component';
import {
    Get
} from 'react-axios';
import { gitHubInstance } from '../../helpers/utility';

import { withRouter } from "react-router";

import Spinner from '../shared/spinner/Spinner';

class GetUsers extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                name: 'Avatar',
                selector: row => row.avatar_url
            },
            {
                name: 'Usuario',
                selector: row => row.login
            },
            {
                name: 'Tipo',
                selector: row => row.type
            },
            {
                name: 'Ver',
                selector: row => row.ver
            }
        ];
    }
    openDataUser = e =>
        this.props.history.push(`/dashboard/user/${e.target.id}`)
    render() {
        return (
            <>
                <AxiosProvider instance={gitHubInstance()}>
                    <Get
                        url="users"
                    >
                        {
                            (error, resp, isLoading) => {
                                if (error) {
                                    return <h1> Error </h1>
                                }
                                else if (isLoading) {
                                    return (
                                        <Spinner type='all' />
                                    )
                                }
                                else if (resp !== null) {
                                    const data = resp.data;
                                    let setDatos = [];
                                    data.map(val => {
                                        return setDatos.push(
                                            {
                                                avatar_url: <img width='50' className='mt-4 mb-4' src={val.avatar_url} alt={`usuario_${val.avatar_url}`} />,
                                                login: val.login,
                                                type: val.type,
                                                ver: <i id={val.login} onClick={this.openDataUser} className="fas fa-eye" style={{ cursor: 'pointer' }}></i>
                                            }
                                        );
                                    });
                                    return (
                                        <DataTable
                                            pagination
                                            columns={this.columns}
                                            data={
                                                setDatos
                                            }
                                        />
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
export default withRouter(GetUsers);