import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { dropSession } from './../../../helpers/utility'

class SideBar extends Component {
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-text mx-3">Github</div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active" style={{ color: 'white' }}>
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>GitHub información</span>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    PERSONAL
                </div>

                <li className="nav-item">
                    <p className="nav-link collapsed active">
                        <i className="fas fa-user"></i>
                        <span>Usuarios</span>
                    </p>
                </li>
                <li className="nav-item">
                    <Link to='/' onClick={() => dropSession()}>
                        <p className="nav-link collapsed active">
                            <i className="fas fa-user"></i>
                            <span>Log out</span>
                        </p>
                    </Link>
                </li>
            </ul>
        );
    }
}

export default SideBar;