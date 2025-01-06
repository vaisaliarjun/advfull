import React from 'react';
import Navbar from './Navbar';
import './Home.css';
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <header>
        <h1>Welcome to Personal Planner</h1>
        <p>Split your plan easily with friends and family!</p>
      </header>
    </div>
  );
};

export default Home;
