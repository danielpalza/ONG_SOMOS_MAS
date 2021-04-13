import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorAlert from "./ErrorAlert";
import { Redirect } from "react-router-dom";
import { postHttpRequest } from "../helper/axios";
//import { Redirect } from "react-router-dom";

//Schema of validation of the values
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .max(255, "Debe tener menos de 255 caracteres.")
    .email("Debe ser un email valido.")
    .required("Debe ingresar un email."),
  password: Yup.string()
    .min(6, "Debe tener minimo 6 caracteres.")
    .max(255, "Debe tener menos de 255 caracteres.")
    .required("Debe ingresar una contraseña."),
});

//mantain the redirect
let redirect = null;

//Make axios request to the endpoint of login, if auth is correct, change "redirect" to "/" and make
// a redirect, on other case, throw a alert message with swal
async function requestLogin(user) {
  let indexUrl = "http://localhost:3000"; // Change later with the real url of the server.
  let err = await postHttpRequest(indexUrl + "/auth/login", user)
    .then((res) => {
      //saves the data of the user for later use
      localStorage.setItem("user", res.data);
      redirect = "/";
    })
    .catch((error) => {
      return {
        error: true,
        message: "No se pudo iniciar sesion debido a un error.",
      };
    });

  return err;
}

function FormLogin() {
  //Form to enter the data to make a request and login
  //The height is explicit in style because there is no configure any parents element with this height
  //and this fix the problem with Bootstrap

  //State to the messages to show
  const [message, setMessage] = useState();

  //Redirect to "/" when the request is ok
  if (redirect) {
    return <Redirect to={redirect} />;
  }

  //handle the petition to requestLogin, and set message to what is return
  const handleLogin = (user, setSubmitting) => {
    requestLogin(user)
      .then((res) => {
        if (res.error) {
          setMessage(
            ErrorAlert({
              title: "Ocurrio un error",
              text: res.message,
            })
          );
          setSubmitting(false)
        }
      })
      .catch((err) => err);
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="container-fluid d-inline-block justify-content-center align-items-center d-flex flex-column "
    >
      <p>{message}</p>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Disabled the submit button, and create a User object with the values.
          setSubmitting(true);
          handleLogin({ ...values }, setSubmitting);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="border border-primary rounded p-5 d-flex flex-column align-items-center form-group"
          >
            <h1>Login</h1>
            <div className=" flex-column d-flex m-2 p-2">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Ingrese su email"
                className={
                  touched.email && errors.email
                    ? "border border-danger form-control"
                    : "border border-success form-control"
                }
              />
              <ErrorMessage
                component="div"
                className="text-danger"
                name="email"
              />
            </div>
            <div className="flex-column d-flex m-2 p-2">
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Ingrese su contraseña"
                className={
                  touched.password && errors.password
                    ? "border border-danger form-control"
                    : "border border-success form-control"
                }
              />
              <ErrorMessage
                component="div"
                className="text-danger"
                name="password"
              />
            </div>
            <div className="m-2 p-2">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Entrar
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default FormLogin;
