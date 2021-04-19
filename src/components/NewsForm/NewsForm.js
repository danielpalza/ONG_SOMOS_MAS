import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validation } from './utils';
import { useSelector } from 'react-redux';
import { selectNews } from '../edit/news/newsSlice';
import { postHttpRequest, patchHttpRequest } from '../../helper/axios';
import { useHistory } from 'react-router';

function NewsForm() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const news = useSelector(selectNews);
  const [forEdit, setForEdit] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setForEdit(news ? true : false);
    if (forEdit) {
      const { title, image, category, content } = news;
      setTitle(title);
      setImage(image);
      setCategory(category);
      setContent(content);
    }
  }, []);

  const handlePost = async values => {
    await postHttpRequest('/news', values);
    history.push('/novedades');
  };

  const handleEdit = async values => {
    await patchHttpRequest(`/news/${news.id}`, values);
    history.push('/novedades');
  };

  return (
    <Formik
      initialValues={{ title, image, category, content }}
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
                  editor={ClassicEditor}
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
              onClick={e => history.push('/news')}
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
