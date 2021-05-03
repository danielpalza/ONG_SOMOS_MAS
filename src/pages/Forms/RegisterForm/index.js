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

    if (localStorage.getItem('token')) {
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
    <main class="page contact-us-page">
      <section class="clean-block clean-form dark">
        <div class="container form">
          <div class="block-heading">
            <h2 class="text-info"> Sign Up Here </h2>
          </div>
          <Formik
            initialValues={inicialValues}
            onSubmit={values => handleRegister(values)}
            validationSchema={registerSchema}
          >
            <Form className="content d-flex flex-column">
              <p> {message} </p>
              <div className="d-flex flex-column spacing">
                <label className="text-left"> Name: </label>
                <Field className="form-control" name="name" type="text" />
                <ErrorMessage
                  className="alert alert-danger"
                  component="label"
                  name="name"
                />
              </div>
              <div className="d-flex flex-column spacing">
                <label className="text-left"> Lastname: </label>
                <Field className="form-control" name="surname" type="text" />
                <ErrorMessage
                  className="alert alert-danger"
                  component="label"
                  name="surname"
                />
              </div>
              <div className="d-flex flex-column spacing">
                <label className="text-left"> Email: </label>
                <Field className="form-control" name="email" type="email" />
                <ErrorMessage
                  className="alert alert-danger"
                  component="label"
                  name="email"
                />
              </div>
              <div className="d-flex flex-column spacing">
                <label className="text-left"> Password: </label>
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
              <button
                style={{ background: '#9ac9fb' }}
                type="submit"
                className="btn "
              >
                Sign up
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </main>
  );
};

export default RegisterForm;
