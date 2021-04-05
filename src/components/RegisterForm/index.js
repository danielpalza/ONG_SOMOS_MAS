import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";

import { postData, registerSchema } from "./utils";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const RegisterForm = () => {
    const inicialValues = {
        name: "",
        surname: "",
        email: "",
        password: "",
    };

    return (
        <Formik
            initialValues={inicialValues}
            onSubmit={(values) => postData(values)}
            validationSchema={registerSchema}>
            <Form className="container d-flex flex-column">
                <div className="d-flex flex-column spacing">
                    <label className="text-left">Nombre:</label>
                    <Field className="form-control" name="name" type="text" />
                    <ErrorMessage
                        className="alert alert-danger"
                        component="label"
                        name="name"
                    />
                </div>

                <div className="d-flex flex-column spacing">
                    <label className="text-left">Apellido:</label>
                    <Field
                        className="form-control"
                        name="surname"
                        type="text"
                    />
                    <ErrorMessage
                        className="alert alert-danger"
                        component="label"
                        name="surname"
                    />
                </div>

                <div className="d-flex flex-column spacing">
                    <label className="text-left">Email:</label>
                    <Field className="form-control" name="email" type="email" />
                    <ErrorMessage
                        className="alert alert-danger"
                        component="label"
                        name="email"
                    />
                </div>

                <div className="d-flex flex-column spacing">
                    <label className="text-left">Contraseña:</label>
                    <Field
                        className="form-control"
                        name="password"
                        type="password"
                    />
                    <ErrorMessage
                        className="alert alert-danger"
                        component="label"
                        name="password"
                    />
                </div>

                <button className="btn btn-outline-primary">
                    Registrase !!
                </button>
            </Form>
        </Formik>
    );
};

export default RegisterForm;
