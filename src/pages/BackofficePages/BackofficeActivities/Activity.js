import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { setActivity } from '../../../components/edit/activities';
import { deleteHttpRequest } from '../../../helper/axios';

function Activity({ activity }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const handleEdit = () => {
    dispatch(
      setActivity({ id: activity.id, name: activity.name, data: activity.data })
    );
    history.push(location.pathname + `/${activity.id}`);
  };

  const handleDelete = async () => {
    await deleteHttpRequest(`/activities/${activity.id}`);
  };
  return (
    <div
      key={activity.id}
      className="row d-flex justify-content-between mb-4 mb-sm-3"
    >
      <h3 className="col-sm-4 text-sm-left"> {activity.name} </h3>
      <button
        onClick={handleEdit}
        className="btn btn-primary col-sm-2 mb-1 mb-sm-0"
      >
        Edit
      </button>
      <button onClick={handleDelete} className="btn btn-secondary col-sm-2">
        Delete
      </button>
    </div>
  );
}

export default Activity;
