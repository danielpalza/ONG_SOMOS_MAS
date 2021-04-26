import React, { useEffect, useState } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validation } from './utils';
import { useHistory, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectNews } from '../../../components/edit/news/newsSlice';
import {
  postHttpRequest,
  patchHttpRequest,
  getHttpRequest,
} from '../../../helper/axios';

function NewsForm(props) {
  const { id } = useParams();
  const [news, setNews] = useState('');
  const [forEdit, setForEdit] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (id) {
      getHttpRequest(`/news/${id}`).then(response => {
        console.log(response);
        setNews(response.data.entry);
        setForEdit(true);
      });
    }
  }, []);

  const handlePost = async values => {
    await postHttpRequest('/news', values);
    history.goBack();
  };

  const handleEdit = async values => {
    await patchHttpRequest(`/news/${news.id}`, values);
    history.goBack();
  };

  const inicialValues = {
    title: news.name || '',
    image: news.image || '',
    category: news.categoryId || '',
    content: news.content || '',
  };

  return (
    <Formik
      initialValues={inicialValues}
      validationSchema={validation}
      onSubmit={values => (forEdit ? handlePost(values) : handleEdit(values))}
    >
      <Form className="container mt-3">
        <div className="form-group d-flex flex-column">
          <label htmlFor="title" className="text-left">
            Title:
          </label>
          <Field type="text" name="title" id="title" className="form-control" />
          <ErrorMessage
            name="title"
            component="span"
            className="text-danger text-left"
          />
        </div>
        <div className="form-group d-flex flex-column">
          <label htmlFor="category" className="text-left">
            Category:
          </label>
          <Field
            type="text"
            name="category"
            render={({ field, form }) => (
              <>
                <select
                  id="category"
                  className="form-control"
                  onChange={e => form.setFieldValue(field.name, e.target.value)}
                >
                  <option value="One">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                  <option value="Four">Four</option>
                </select>
              </>
            )}
          />
          <ErrorMessage
            name="category"
            component="span"
            className="text-danger text-left"
          />
        </div>
        <div className="form-group d-flex flex-column">
          <label htmlFor="content" className="text-left">
            Content:
          </label>
          <Field
            type="text"
            name="content"
            id="content"
            className="form-control"
            render={({ field, form }) => (
              <>
                <CKEditor
                  editor={Editor}
                  data={field.value}
                  onChange={(e, editor) =>
                    form.setFieldValue(field.name, editor.getData())
                  }
                />
              </>
            )}
          />
          <ErrorMessage
            name="content"
            component="span"
            className="text-danger text-left"
          />
        </div>
        <div className="form-group d-flex flex-column">
          <label htmlFor="image" className="text-left">
            Image:
          </label>
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
            name="image"
            component="span"
            className="text-danger text-left"
          />
        </div>
        <div className="row my-sm-5">
          <div className="col-md-4 col-lg-3">
            <button
              onClick={e => history.goBack()}
              className={'btn btn-secondary btn-block'}
            >
              Cancel
            </button>
          </div>
          <div className="col-md-4 col-lg-3 mt-2 mt-md-0">
            <button type="submit" className={'btn btn-primary btn-block'}>
              {forEdit ? 'Submit' : 'Edit'}
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default NewsForm;
