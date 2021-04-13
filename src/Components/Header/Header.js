import React, { useEffect, useState } from 'react';
import { links } from '../../utils/navMenuLinks';
import { getHttpRequest } from '../../helper/axios/index';
import Loader from '../Loader/index';
import './Header.css';

const Header = () => {
  const [state, setState] = useState({});

  useEffect(() => {
    getHttpRequest('http://localhost:3001/organizations/1/public')
      .then(res => {
        setState(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const { image } = state;

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: '#e3f2fd' }}
      >
        <div className="container-fluid">
          {image ? (
            <img className="logo-image" src={image} alt="logo" />
          ) : (
            <Loader />
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapse_target"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            style={{ paddingRight: '50px' }}
            className="collapse  navbar-collapse justify-content-end"
            id="collapse_target"
          >
            <ul className="navbar-nav">
              {links.map((routes, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <a className="nav-link text-uppercase" href={routes.route}>
                      {routes.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
