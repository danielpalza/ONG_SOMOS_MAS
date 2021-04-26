import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Editor from 'ckeditor5-custom-build/build/ckeditor';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useSelector, useDispatch } from 'react-redux';
import {
  failFetch,
  selectFetch,
  setLoading,
} from '../../features/fetch/fetchSlice';
import { postHttpRequest, patchHttpRequest } from '../../../helper/axios';
import ErrorAlert from '../ErrorAlert';
import Loader from '../../../components/Loader';
import validationSchema from './validationSchema';
import editorConfiguration from './editConfiguration';

const URL = `${process.env.REACT_APP_API_URL}/activities`;

function ActivityForm({ id = null, name, data }) {
  const [isModeEdit, setIsModeEdit] = useState(id ? true : false);
  const intialValue = {
    name: name || '',
    data: data || '',
  };
  const fetch = useSelector(selectFetch);
  const dispatch = useDispatch();
  console.log(fetch);
  const handleOnCancel = e => {
    e.preventDefault();
    // #TODO : should return  to previous screen when the router is implemented
    alert('Operation cancel');
  };
  const handleSubmit = async activity => {
    dispatch(setLoading());
    let url;
    if (isModeEdit) {
      url = `${URL}/${id}`;
      //#TODO :  Test endpoint when implemented
      // await patchHttpRequest(url, { id, ...activity })
      alert('Editado');
    } else {
      //#TODO :   Test endpoint when implemented
      //await postHttpRequest(url, activity)
      alert('Creado');
    }
  };

  return (
    <>
      {fetch.loading ? (
        <Loader />
      ) : (
        <Formik
          initialValues={intialValue}
          onSubmit={values => handleSubmit(values)}
          validationSchema={validationSchema}
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
            <label className="text-left">Content:</label>
            <Field name="data">
              {({ field, form }) => {
                return (
                  <>
                    <CKEditor
                      editor={Editor}
                      config={editorConfiguration}
                      onChange={(event, editor) => {
                        form.setFieldValue(field.name, editor.getData());
                      }}
                    />
                  </>
                );
              }}
            </Field>
            <ErrorMessage
              className="alert alert-danger"
              component="label"
              name="data"
            />

            <button className="btn btn-outline-primary" type="submit">
              {isModeEdit ? 'Edit' : 'Create'}
            </button>
            {isModeEdit && (
              <button
                className="btn btn-outline-primary"
                onClick={handleOnCancel}
              >
                Cancel
              </button>
            )}
            {fetch.error && <ErrorAlert text={fetch.error}></ErrorAlert>}
          </Form>
        </Formik>
      )}
    </>
  );
}

export default ActivityForm;
