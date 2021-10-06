import React, { Component } from "react";
import { withRouter } from "react-router";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import UserInfoGit from './users/UserInfoGit';
import FoundedUser from "./users/FoundedUser";

import Users from "./users/Users";
import Navbar from './../../shared/navbar/Navbar';
import SideBar from './../../shared/sidebar/SideBar';

import { verifyCredential } from './../../auth/DashboardAuth';

class Dashboard extends Component {
    constructor(props){
        super(props);

        verifyCredential();
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/dashboard/users' render={() => {
                        return (
                            <div id='wrapper'>
                                <SideBar />
                                <div id="content-wrapper" className="d-flex flex-column">
                                    <div id="content">
                                        <Navbar />
                                        <Users />
                                    </div>
                                </div>
                            </div>
                        );
                    }} />
                    <Route path='/dashboard/user/:login' render={() => {
                        return (
                            <div id='wrapper'>
                                <SideBar />
                                <div id="content-wrapper" className="d-flex flex-column">
                                    <div id="content">
                                        <Navbar />
                                        <UserInfoGit />
                                    </div>
                                </div>
                            </div>
                        );
                    }} />
                    <Route path='/dashboard/searchUser/:user' render={() => {
                        return (
                            <div id='wrapper'>
                                <SideBar />
                                <div id="content-wrapper" className="d-flex flex-column">
                                    <div id="content">
                                        <Navbar />
                                        <FoundedUser />
                                    </div>
                                </div>
                            </div>
                        );
                    }} />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default withRouter(Dashboard);