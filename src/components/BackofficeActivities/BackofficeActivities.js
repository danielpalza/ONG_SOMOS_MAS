import React, { useEffect, useState } from 'react';
import { getHttpRequest } from '../../helper/axios/index';
import Activity from './Activity';

function BackofficeActivities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getActs = async () => {
      setActivities([
        { name: 'football', id: 1 },
        { name: 'basket', id: 2 },
        { name: 'tennis', id: 3 },
        { name: 'handball', id: 4 },
        { name: 'volley', id: 5 },
        { name: 'baseball', id: 6 },
      ]);
    };
    getActs();
  }, []);

  return (
    <div className="container">
      <h2>Activities</h2>
      <div className="container mt-3">
        {activities.map(activity => (
          <Activity key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}

export default BackofficeActivities;
