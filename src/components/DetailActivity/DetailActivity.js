import React, { Fragment, useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { requestActivity } from './utils';
import ErrorAlert from '../ErrorAlert';
import './style.css';

function DetailActivity() {
  const [detailActivity, setDetail] = useState();
  //Message from ErrorAlert
  const [message, setMessage] = useState({title:'', text:''});
  const [error, setError] = useState(true);
  //Redirect to home
  const [redirect, setRedirect] = useState(false);
  let { id } = useParams();


  useEffect(() => {console.log({id})
    if (id) {
      requestActivity(id)
        .then(res => setDetail(res.data))
        .catch(err =>{
          setError(true)
          setMessage({
            title: 'Ocurrio un error!', 
            text: 'No se encontro la actividad pedida.' 
          })  
        });
    }
  }, [id]);


  //When redirect is true, redirect to home
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      {error ?<ErrorAlert title = {message.title} text = {message.text} />:''}
    
      {detailActivity !== undefined ? (
        <main className="rounded shadow container-fluid p-2 d-flex flex-column w-50 align-items-center">
          <div className="text-left w-100 m-2 rounded ">
            <div className="d-flex justify-content-between align-items-center rounded text-white bg-dark p-2">
              <h6>{detailActivity.type}</h6>
              <button
                onClick={() => setRedirect(true)}
                type="button"
                class="btn btn-outline-secondary"
              >
                Regresar
              </button>
            </div>

            <h1 className="p-2 ">{detailActivity.name}</h1>
          </div>
          <div className="m-2">
            <img src={detailActivity.image} className="img-fluid" />
          </div>
          <div className="m-2">
            <h5>{detailActivity.content}</h5>
          </div>
        </main>
      ) : (
        <main className="rounded shadow container-fluid p-2 d-flex flex-column w-50 align-items-center">
          <div className="text-left w-100 m-2 rounded ">
            <div className="d-flex justify-content-between align-items-center rounded text-white bg-dark p-2">
              <h6>Sin actividad</h6>
              <button
                onClick={() => setRedirect('/')}
                type="button"
                class="btn btn-outline-secondary"
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

export default DetailActivity;
