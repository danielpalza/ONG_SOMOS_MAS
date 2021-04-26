import React, { useState, useEffect } from 'react';
import { getHttpRequest } from '../../../helper/axios/index';
import Loader from '../../../components/Loader/index';
import './categories.css';
const Categories = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    getHttpRequest('/categories')
      .then(res => {
        setState(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container-fluid list-container ">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
      />

      {state !== [] ? (
        <div className="container text-left">
          <p style={{ marginBottom: '130px' }} className="display-4">
            Categories List
          </p>
          <div className="table-responsive-sm">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"> Id </th>
                  <th scope="col"> Category </th>
                  <th scope="col"> Description </th>
                  <th scope="col"> Actions </th>
                </tr>
              </thead>
              <tbody>
                {state.map(category => (
                  <tr>
                    <td>{category.id}</td>
                    <td> {category.name}</td>
                    <td className="description d-block text-truncate text-justify">
                      {category.description}
                    </td>
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
        </div>
      ) : (
        <div className="container text-left">
          <p style={{ marginBottom: '130px' }} className="display-4">
            Categories List
          </p>
          <div>
            <Loader />
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories;
