import React, { Component } from 'react';

import BasicWindow from './../../../shared/window/BasicWindows';
import Github from './../../../services/Github';

class Users extends Component {
    render() {
        return (
            <div className="container-fluid">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Github</h1>
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <BasicWindow title='Usuarios' body={
                            <div className='row'>
                                <div className='col-12 mb-4'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <Github api='users' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        } />
                    </div>
                </div>
            </div>
        );
    }
}
export default Users;