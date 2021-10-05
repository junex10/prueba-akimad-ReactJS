import React, { Component } from 'react';
import { AxiosProvider } from 'react-axios';
import {
    Get
} from 'react-axios';
import { gitHubInstance } from '../../helpers/utility';

import { withRouter } from "react-router";

class GetUser extends Component {
    constructor(props) {
        super(props);

        this.login = props.userName;
    }
    render() {
        return (
            <>
                <AxiosProvider instance={gitHubInstance()}>
                    <Get
                        url={`search/users?q=${this.login}`}
                    >
                        {
                            (error, resp, isLoading) => {
                                if (error) {
                                    return <h1> Error </h1>
                                }
                                else if(isLoading) {
                                    return (
                                        <h1>Cargando...</h1>
                                    )
                                }
                                else if (resp !== null) {
                                    const data = resp.data.items[0];
                                    return (
                                        <div className='row'>
                                            <div className='col-12 mb-4'>
                                                <img width='100' className='mt-4 mb-4 d-block m-auto' style={{borderRadius: '50%'}} src={data.avatar_url} alt={`usuario_${data.avatar_url}`} />
                                                <p className='text-center mb-4 mt-4'>
                                                    Score: <b>{data.score}</b>
                                                </p>
                                            </div>
                                            <div className='col-12 mb-4'>
                                                <div className='row'>
                                                    <div className='col-12 col-sm-12 col-lg-3 col-md-3'>
                                                        Usuario:
                                                    </div>
                                                    <div className='col-12 col-sm-12 col-lg-6 col-md-6'>
                                                        <b>{data.login}</b>
                                                    </div>
                                                    <div className='col-12 col-sm-12 col-lg-3 col-md-3'>
                                                        <b>{data.type === 'User' ? 'Usuario' : data.type}</b>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
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

export default withRouter(GetUser);