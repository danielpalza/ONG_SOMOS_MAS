import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to home</h1>
      <Link to="/counter">Go to counter</Link>
    </div>
  );
};

export default Home;
