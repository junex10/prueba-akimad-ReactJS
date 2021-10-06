import React, { Component } from 'react';
import { withRouter } from "react-router";

import BasicWindow from '../../../shared/window/BasicWindows';
import Github from '../../../services/Github';

class FoundedUser extends Component {
    constructor(props){
        super(props);
        this.user = props.match.params.user;
    }
    render(){
        return(
            <div className="container-fluid">

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Usuarios encontrados</h1>
                </div>

                <div className="row">
                    <div className="col-12">
                        <BasicWindow title='Usuarios' body={
                            <Github api='fetchUser' userName={this.user} />
                        } />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(FoundedUser);