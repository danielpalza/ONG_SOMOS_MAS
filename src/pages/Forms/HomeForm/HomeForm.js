import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './HomeForm.css';
const HomeForm = () => {
  const formik = useFormik({
    initialValues: {
      welcomeText: '',
      firstImage: null,
      firstText: '',
      secondImage: null,
      secondText: '',
      thirdImage: null,
      thirdText: '',
    },
    validationSchema: yup.object({
      welcomeText: yup
        .string()
        .required('Please write a welcome text')
        .min(20, 'Message too short- Minimum 20 characters required!'),
      firstImage: yup
        .mixed()
        .test(
          'fileType',
          'Incorrect file type',
          file =>
            file && ['image/png', 'image/jpg', 'image/jpeg'].includes(file.type)
        ),
      secondImage: yup
        .mixed()
        .test(
          'fileType',
          'Incorrect file type',
          file =>
            file && ['image/png', 'image/jpg', 'image/jpeg'].includes(file.type)
        ),
      thirdImage: yup
        .mixed()
        .test(
          'fileType',
          'Incorrect file type',
          file =>
            file && ['image/png', 'image/jpg', 'image/jpeg'].includes(file.type)
        ),
      firstText: yup.string(),
      secondText: yup.string(),
      thirdText: yup.string(),
    }),
    onSubmit: formData => {
      console.log(formData);
    },
  });

  return (
    <div className="container-fluid">
      <div className="form-card card text-left">
        <div className="card-header header-form text-center">Home Form</div>
        <div className="card-body">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="welcomeText">Welcome Message*</label>
              <textarea
                className="form-control"
                placeholder="20 characters minimun-length"
                id="welcomeText"
                rows="3"
                name="welcomeText"
                onChange={formik.handleChange}
              />
              {formik.errors.welcomeText ? (
                <div
                  style={{
                    color: 'red',
                    fontStyle: 'italic',
                    fontSize: '15px',
                  }}
                >
                  {formik.errors.welcomeText}
                </div>
              ) : null}
            </div>
            <hr />
            <p className="h1 text-center ">Slide Custom</p>
            <hr />
            <div className="form-row">
              <div className="form-group col-sm-12 col-md-6 ">
                <input
                  type="file"
                  className="form-control"
                  id="firstImage"
                  accept="image/png, image/jpeg"
                  name="firstImage"
                  onChange={e =>
                    formik.setFieldValue('firstImage', e.currentTarget.files[0])
                  }
                />
                <label
                  className="label-image text-center "
                  htmlFor="firstImage"
                >
                  <ion-icon style={{ fontSize: '1rem' }} name="image-sharp" />
                  &nbsp; Choose Image
                </label>
                {formik.errors.firstImage ? (
                  <div
                    style={{
                      color: 'red',
                      fontStyle: 'italic',
                      fontSize: '15px',
                    }}
                  >
                    {formik.errors.firstImage}
                  </div>
                ) : null}
              </div>

              <div className="form-group col-sm-12 col-md-6">
                <label htmlFor="firstText">First Text</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write a text"
                  id="firstText"
                  name="firstText"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-sm-12 col-md-6">
                <input
                  type="file"
                  className="form-control"
                  id="secondImage"
                  accept="image/png, image/jpeg"
                  name="secondImage"
                  onChange={e =>
                    formik.setFieldValue(
                      'secondImage',
                      e.currentTarget.files[0]
                    )
                  }
                />
                <label
                  className="label-image text-center"
                  htmlFor="secondImage"
                >
                  <ion-icon style={{ fontSize: '1rem' }} name="image-sharp" />
                  &nbsp; Choose Image
                </label>
                {formik.errors.secondImage ? (
                  <div
                    style={{
                      color: 'red',
                      fontStyle: 'italic',
                      fontSize: '15px',
                    }}
                  >
                    {formik.errors.secondImage}
                  </div>
                ) : null}
              </div>

              <div className="form-group col-sm-12 col-md-6">
                <label htmlFor="secondText">Second Text</label>
                <input
                  type="text"
                  placeholder="Write a text"
                  className="form-control"
                  id="secondText"
                  name="secondText"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-sm-12 col-md-6">
                <input
                  type="file"
                  className="form-control"
                  id="thirdImage"
                  accept="image/png, image/jpeg"
                  name="thirdImage"
                  onChange={e =>
                    formik.setFieldValue('thirdImage', e.currentTarget.files[0])
                  }
                />
                <label className="label-image text-center" htmlFor="thirdImage">
                  <ion-icon style={{ fontSize: '1rem' }} name="image-sharp" />
                  &nbsp; Choose Image
                </label>

                {formik.errors.thirdImage ? (
                  <div
                    style={{
                      color: 'red',
                      fontStyle: 'italic',
                      fontSize: '15px',
                    }}
                  >
                    {formik.errors.thirdImage}
                  </div>
                ) : null}
              </div>

              <div className="form-group col-sm-12 col-md-6">
                <label htmlFor="thirdText">Third Text</label>
                <input
                  type="text"
                  placeholder="Write a text"
                  className="form-control"
                  id="thirdText"
                  name="thirdText"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <hr />
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
