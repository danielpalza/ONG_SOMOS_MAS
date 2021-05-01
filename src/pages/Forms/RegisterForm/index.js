import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import ErrorAlert from '../../../components/Alerts/ErrorAlert';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { postData, registerSchema } from './utils';

import './styles.css';


const RegisterForm = () => {
  const history = useHistory();
  const inicialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  //State to the messages to show
  const [message, setMessage] = useState();
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    //Redirect to "/" when the request is ok
    if (redirect) {
      return <Redirect to={redirect} />;
    }

    if(localStorage.getItem('token')){
      history.push('/');
    }
  }, []);
 

  //Redirect to "/" when the request is ok
  if (redirect) {
    return <Redirect to={redirect} />;
  }
  
  //handle the petition to requestLogin, and set message to what is return
  const handleRegister = user => {
    postData(user, setRedirect)
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
          <Field className="form-control" name="firstName" type="text" />
          <ErrorMessage
            className="alert alert-danger"
            component="label"
            name="firstName"
          />
        </div>

        <div className="d-flex flex-column spacing">
          <label className="text-left">Apellido:</label>
          <Field className="form-control" name="lastName" type="text" />
          <ErrorMessage
            className="alert alert-danger"
            component="label"
            name="lastName"
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
          Registrase
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
