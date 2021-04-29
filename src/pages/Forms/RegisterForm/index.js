import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import ErrorAlert from '../../../components/Alerts/ErrorAlert';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { postData, registerSchema } from './utils';

import './styles.css';

const RegisterForm = () => {
  const inicialValues = {
    name: '',
    surname: '',
    email: '',
    password: '',
  };
  //State to the messages to show
  const [message, setMessage] = useState();
  let redirect = null;

  //handle the petition to requestLogin, and set message to what is return
  const handleRegister = user => {
    postData(user, redirect)
      .then(res => {
        if (res.error) {
          setMessage(
            ErrorAlert({
              title: 'Ocurrio un error',
              text: res.message,
            })
          );
        }
      })
      .catch(err => err);
  };

  const history = useHistory();
  useEffect(() => {
    //Redirect to "/" when the request is ok
    if (redirect) {
      return <Redirect to={redirect} />;
    }

    if(localStorage.getItem('token')){
      history.push('/');
    }
  }, []);

  return (
    <Formik
      initialValues={inicialValues}
      onSubmit={values => handleRegister(values)}
      validationSchema={registerSchema}
    >
      <Form className="container d-flex flex-column">
        <p>{message}</p>
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
          <Field className="form-control" name="surname" type="text" />
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
          <Field className="form-control" name="password" type="password" />
          <ErrorMessage
            className="alert alert-danger"
            component="label"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Registrase !!
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
