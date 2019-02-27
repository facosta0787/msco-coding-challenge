import React from 'react';

import './Hero.css';

const Hero = ({ title, subtitle }) => {
  return (
    <div className={'hero'}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default Hero;
