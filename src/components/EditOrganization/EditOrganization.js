import React, { useState } from "react";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function EditOrganization() {
  const registerSchema = Yup.object().shape({
    name: Yup.string().required("No name was provided"),
    logo: Yup.mixed()
      .required("A file is required")
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) => value && /\.(jpg|png|gif)$/i.test(value)
      ),
  });

  const inicialValues = {
    name: "",
    logo: "",
  };

  const updateData = async (values) => {
    // try {
    //   const response = await axios.post(
    //     "http://localhost:4000/backoffice/edit-organization",
    //     {
    //       values,
    //     }
    //   );
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Formik
      initialValues={inicialValues}
      onSubmit={(values) => updateData(values)}
      validationSchema={registerSchema}
    >
      <Form className="container d-flex flex-column">
        <div className="d-flex flex-column spacing">
          <label className="text-left">Name:</label>
          <Field className="form-control" name="name" type="text" />
          <ErrorMessage
            className="alert alert-danger"
            component="label"
            name="name"
          />
        </div>

        <div className="d-flex flex-column spacing">
          <label className="text-left">Logo:</label>
          <Field className="form-control" name="logo" type="file" />
          <ErrorMessage
            className="alert alert-danger"
            component="label"
            name="logo"
          />
        </div>

        <button className="btn btn-outline-primary mt-3">Update</button>
      </Form>
    </Formik>
  );
}
