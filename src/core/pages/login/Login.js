import React, { Component } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { withRouter } from 'react-router';

import './../../../css/login.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.initialValues = {
            email: '',
            password: ''
        };
        this.validationSchema = Yup.object({
            email: Yup.string().email('Correo inválido').required('Campo obligatorio'),
            password: Yup.string().required('Campo obligatorio')
        })
    }
    onSubmit = values => {
        window.sessionStorage.setItem('user', JSON.stringify({
            email: values.email,
            password: values.password
        }))
        this.props.history.push('/dashboard/users')
    };
    render() {
        return (
            <div className="container backgroundLogin">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">
                                                    Iniciar sesión
                                                </h1>
                                            </div>
                                            <Formik initialValues={this.initialValues} validationSchema={this.validationSchema} onSubmit={this.onSubmit}>
                                                {
                                                    formik => {
                                                        const { errors, touched, handleChange } = formik;
                                                        return (
                                                            <Form>
                                                                <div className="form-group">
                                                                    <input type="email" onChange={handleChange} className="form-control form-control-user"
                                                                        id="email" aria-describedby="emailHelp"
                                                                        placeholder="Correo electrónico" />
                                                                    {errors.email && touched.email && errors.email}
                                                                </div>
                                                                <br />
                                                                <div className="form-group">
                                                                    <input type="password" onChange={handleChange} className="form-control form-control-user"
                                                                        id="password" placeholder="Contraseña" />
                                                                    {errors.password && touched.password && errors.password}
                                                                </div>
                                                                <button className="btn btn-success btn-user btn-block" disabled={!formik.isValid}>
                                                                    Iniciar sesión
                                                                </button>
                                                            </Form>
                                                        );
                                                    }
                                                }
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}
export default withRouter(Login);