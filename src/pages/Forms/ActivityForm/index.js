import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useSelector, useDispatch } from 'react-redux';
import {
  failFetch,
  selectFetch,
  setLoading,
} from '../../../components/fetch/fetchSlice';
import {
  postHttpRequest,
  patchHttpRequest,
  getHttpRequest,
} from '../../../helper/axios';
import ErrorAlert from '../../../components/Alerts/ErrorAlert';
import Loader from '../../../components/Loader';
import validationSchema from './validationSchema';
import editorConfiguration from './editConfiguration';
import { useParams } from 'react-router';

function ActivityForm(props) {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      //TODO: the endPoint does not exists yet so we need ot change the following request
      //depending on the structure of the response
      getHttpRequest(`/activities/${id}`).then(response =>
        setActivityData(response)
      );
    }
  }, []);

  const [isModeEdit, setIsModeEdit] = useState(id ? true : false);
  const [activityData, setActivityData] = useState('');

  const fetch = useSelector(selectFetch);
  const dispatch = useDispatch();
  const handleOnCancel = e => {
    e.preventDefault();
    alert('Operation cancel');
    props.history.goBack();
  };

  const handleSubmit = async activity => {
    dispatch(setLoading());
    let url;
    if (isModeEdit) {
      url = `${URL}/${id}`;
      //#TODO :  Test endpoint when implemented
      // await patchHttpRequest(url, { id, ...activity })
      alert('Editado');
      props.history.goBack();
    } else {
      //#TODO :   Test endpoint when implemented
      //await postHttpRequest(url, activity)
      alert('Creado');
      props.history.goBack();
    }
  };

  const intialValue = {
    name: activityData.name || '',
    data: activityData.content || '',
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
                className="btn btn-outline-secondary"
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
