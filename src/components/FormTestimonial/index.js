import React, { useEffect, useState } from 'react';
import { Formik, ErrorMessage, Field, Form } from 'formik';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHistory } from 'react-router';
import { validationSchema, handleRequest } from './utils';
import { useSelector } from 'react-redux';
import { selectTestimonials } from '../edit/testimonials/testimonialsSlice';

const FormTestimonial = () => {
  const testimonial = useSelector(selectTestimonials);
  const [test, setTest] = useState({ nam: '', image: null, content: '' });
  const [msg, setMsg] = useState();
  const history = useHistory();

  const handleSubmit = (vals, setSubmitting) => {
    handleRequest(testimonial, setMsg, vals, setSubmitting, history);
  };

  useEffect(() => {
    if (testimonial) {
      const { nam, image, content } = testimonial;
      setTest({ nam, image, content });
    }
  }, []);

  return (
    <div className="container-fluid">
      <p>{msg}</p>
      <Formik
        enableReinitialize
        initialValues={{ ...test }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          //Disabled the submit button, and create a User object with the values.
          setSubmitting(true);
          handleSubmit({ ...values }, setSubmitting);
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
          <Form
            onSubmit={handleSubmit}
            className="p-5 d-flex flex-column align-start text-left "
          >
            <p>{console.log({ values })}</p>
            <div className="d-flex flex-column m-2 p-2 form-group">
              <label>Nombre</label>
              <Field
                type="text"
                name="nam"
                className="form-control"
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Ingrese su nombre"
              />
              <ErrorMessage
                component="div"
                className="text-danger"
                name="nam"
              />
            </div>

            <div className="form-group m-2 p-2">
              <label>Contenido</label>

              <CKEditor
                editor={ClassicEditor}
                data={values.content}
                name="content"
                onChange={(e, editor) => {
                  values.content = editor.getData();
                }}
              />
              <ErrorMessage
                component="div"
                className="text-danger"
                name="content"
              />
            </div>

            <div className="form-group m-2 p-2">
              <label>Imagen</label>
              <Field
                type="file"
                name="image"
                id="image"
                render={({ field, form }) => (
                  <>
                    <input
                      className="form-control-file"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      onChange={e =>
                        form.setFieldValue(field.name, e.currentTarget.files[0])
                      }
                    />
                  </>
                )}
              />
              <ErrorMessage
                component="div"
                className="text-danger"
                name="image"
              />
            </div>

            <div className="m-2 p-2">
              <button
                onClick={e => history.push('/')}
                className="btn m-2 btn-secondary"
                disabled={isSubmitting}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="btn m-2 btn-primary"
                disabled={isSubmitting}
              >
                Enviar testimonio
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormTestimonial;
