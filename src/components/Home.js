import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/beers">beers</Link>
      <Link to="/random-beer">ramdom beer</Link>
      <Link to="/new-beer">new beer</Link>
    </div>
  );
}

export default Home;
