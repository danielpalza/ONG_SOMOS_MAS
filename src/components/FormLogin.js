import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

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

//Make axios request to the endpoint of login
function requestLogin(user) {
  let usr = { ...user }
}

function FormLogin() {
  //Form to enter the data to make a request and login
  //The height is explicit in style because there is no configure any parents element with this height
  //and this fix the problem with Bootstrap
  return (
    <div
      style={{ height: "100vh" }}
      className="container-fluid d-inline-block justify-content-center align-items-center d-flex flex-column "
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Disabled the submit button, and create a User object with the values.
          setSubmitting(true);
          requestLogin({ ...values });
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
