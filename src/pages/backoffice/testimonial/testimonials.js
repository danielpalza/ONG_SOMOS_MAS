import React from 'react';
import { testimonialsTable } from '../../../utils/testimonialsBackoffice';
import './testimonials.css';
const Testimonials = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />
      <div className="container text-left">
        <p style={{ marginBottom: '130px' }} className="display-4">
          Testimonials List
        </p>

        <table className="table">
          <thead>
            <tr>
              <th scope="col"> Id </th>
              <th scope="col"> Name </th>
              <th scope="col"> Actions </th>
            </tr>
          </thead>
          <tbody>
            {testimonialsTable.map((value, index) => (
              <tr key={index}>
                <td>{value.id}</td>
                <td> {value.name} </td>
                <td>
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <button className="btn btn-primary btn-block">
                        Edit
                      </button>
                    </div>
                    <div className="delete col-sm-12 col-md-6 col-lg-6">
                      <button className="btn btn-danger btn-block">
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Testimonials;
