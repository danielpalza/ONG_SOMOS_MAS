import React from 'react';

import { useHistory, useLocation } from 'react-router';
import { setActivity, removeActivity } from '../../../components/edit/activities';
import { deleteHttpRequest } from '../../../helper/axios';
import {
  selectFetch, failFetch, setLoading, successFetch
} from '../../../components/fetch/fetchSlice'
import { useSelector, useDispatch } from 'react-redux'

function Activity({ activity }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const handleEdit = () => {
    history.push(location.pathname + `/${activity.id}`);
  };

  const handleDelete = async () => {
    dispatch(setLoading())
    try {
      await deleteHttpRequest(`/activities/${activity.id}`);
      dispatch(successFetch("Borrado con exito"))
      dispatch(removeActivity(activity.id))
    }
    catch (e) {
      dispatch(failFetch(e))
    }
  }
  return (
    <React.Fragment key={activity.id}>
      <td style={{ verticalAlign: 'inherit' }}> {activity.name} </td>
      <td className="text-left" style={{ textAlign: 'center' }}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <button className="btn btn-primary btn-block" onClick={handleEdit}>
              Editar
                  </button>
          </div>
          <div className="delete col-sm-12 col-md-6 col-lg-6 ">
            <button className="btn btn-danger btn-block" onClick={handleDelete} >
              Borrar
                </button>
          </div>
        </div>
      </td>
    </React.Fragment >
  );
}

export default Activity;


