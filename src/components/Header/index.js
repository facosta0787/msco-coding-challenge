import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <div className="logo" />
        </Link>
      </div>
      <div className="login-controls">
        <span className="login-controls-text">Sing in</span>
      </div>
    </header>
  );
};

export default Header;
