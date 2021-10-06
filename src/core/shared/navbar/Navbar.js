import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { getSession } from './../../../helpers/utility';

import userSVG from './../../../img/dashboard/undraw_profile.svg';

class DashboardNavbar extends Component {
    constructor(props) {
        super(props);

        this.email = getSession().email;
        this.initialValues = {
            searchUser: '',
        };
        this.validationSchema = Yup.object({
            searchUser: Yup.string()
        })
    }

    onSubmit = values => {
        const user = values.searchUser;
        this.props.history.push(`/dashboard/searchUser/${user}`)
    };
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>
                <Formik initialValues={this.initialValues} validationSchema={this.validationSchema} onSubmit={this.onSubmit}>
                    {
                        formik => {
                            const { errors, touched, handleChange } = formik;
                            return (
                                <Form>
                                    <div className="input-group">
                                        <input type="text" id='searchUser' style={{width: '300px'}} onChange={handleChange} className="form-control bg-light border-0 small" placeholder="Buscar usuarios de Github..."
                                            aria-label="Search" aria-describedby="basic-addon2" />
                                            <button className='btn btn-primary' disabled={!formik.isValid}><i className='fas fa-search'></i></button>
                                        {errors.searchUser && touched.searchUser && errors.searchUser}
                                    </div>

                                </Form>
                            );
                        }
                    }
                </Formik>
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <p className="nav-link dropdown-toggle" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                        </p>
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li className="nav-item no-arrow dropdown">
                        <img className="mr-4 img-profile rounded-circle"
                            src={userSVG} width='30' alt='userImage' />
                        <span>{this.email}</span>
                        <i className="bi bi-chevron-down"></i>
                    </li>
                </ul>

            </nav>
        );
    }
}

export default withRouter(DashboardNavbar);