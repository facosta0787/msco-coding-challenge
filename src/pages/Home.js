import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
