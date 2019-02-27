import React from 'react';
import { Link } from 'react-router-dom';
import './Paginator.css';

const Paginator = ({ gists, current }) => {
  const getNext = () => {
    if (gists.indexOf(current) === gists.length - 1) {
      return current;
    }
    return gists[gists.indexOf(current) + 1];
  };

  const getPrev = () => {
    if (gists.indexOf(current) <= 0) {
      return current;
    }
    return gists[gists.indexOf(current) - 1];
  };

  const render = () => {
    return (
      <div className="paginator">
        <Link to={`/${getPrev()}`}>
          <i className="fas fa-arrow-left arrow arrow-left" />
        </Link>
        <Link to={`/${getNext()}`}>
          <i className="fas fa-arrow-right arrow arrow-right" />
        </Link>
      </div>
    );
  };

  return render();
};

export default Paginator;
