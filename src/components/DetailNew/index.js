import React, { Fragment, useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { requestNews } from './utils';
import ErrorAlert from '../ErrorAlert';
import './style.css';

function Index() {
  const [detailNew, setDetailNew] = useState();
  //Message from ErrorAlert
  const [message, setMessage] = useState();
  //Redirect to home
  const [redirect, setRedirect] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    if (id) {
      requestNews(id)
        .then(res => setDetailNew(res.data))
        .catch(err =>
          setMessage(
            ErrorAlert({
              title: 'Ocurrio un error!',
              text: 'No se encontro la noticia pedida.',
            })
          )
        );
    }
  }, [id]);

  //When redirect is true, redirect to home
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <p> {message} </p>
      {detailNew !== undefined ? (
        <main className="rounded shadow container-fluid p-2 d-flex flex-column w-50 align-items-center">
          <div className="text-left w-100 m-2 rounded ">
            <div className="d-flex justify-content-between align-items-center rounded text-white bg-dark p-2">
              <h6> {detailNew.entry.type} </h6>
              <button
                onClick={() => setRedirect(true)}
                type="button"
                className="btn btn-outline-secondary"
              >
                Regresar
              </button>
            </div>
            <h1 className="p-2 "> {detailNew.entry.name} </h1>
          </div>
          <div className="m-2">
            <img src={detailNew.entry.image} className="img-fluid" alt="img" />
          </div>
          <div className="m-2">
            <h5> {detailNew.entry.content} </h5>
          </div>
        </main>
      ) : (
        <main className="rounded shadow container-fluid p-2 d-flex flex-column w-50 align-items-center">
          <div className="text-left w-100 m-2 rounded ">
            <div className="d-flex justify-content-between align-items-center rounded text-white bg-dark p-2">
              <h6> Sin noticia </h6>
              <button
                onClick={() => setRedirect('/')}
                type="button"
                className="btn btn-outline-secondary"
              >
                Regresar
              </button>
            </div>
          </div>
        </main>
      )}
    </Fragment>
  );
}

export default Index;
