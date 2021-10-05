import React, { Component } from 'react';
import { withRouter } from "react-router";

import BasicWindow from './../../../shared/window/BasicWindows';

import Github from './../../../services/Github';

class UserInfoGit extends Component {
    constructor(props) {
        super(props);

        this.login = props.match.params.login;
    }
    render() {
        return (
            <div className="container-fluid">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Información de <b>{this.login}</b></h1>
                </div>

                <div className="row">
                    <div className="col-12">
                        <BasicWindow title='Información' body={
                            <Github api="user" userName={this.login} />
                        } />
                    </div>
                    <div className="col-12">
                        <BasicWindow title='Repositorios' body={
                            <Github api="repositoryUser" userName={this.login} />
                        } />
                    </div>
                    <div className="col-12">
                        <BasicWindow title='Organizaciones' body={
                            <Github api="organizationsUser" userName={this.login} />
                        } />
                    </div>
                    <div className="col-12">
                        <BasicWindow title='Eventos' body={
                            <Github api="eventsUser" userName={this.login} />
                        } />
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(UserInfoGit);