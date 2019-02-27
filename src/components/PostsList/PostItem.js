import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormat, dateRelativeFormat } from '../../shared/formatters';

const PostItem = ({ created_at, description, id }) => {
  return (
    <div className="post-item-container">
      <div className="post-item-info">
        <div className="post-item-date">
          {dateFormat(created_at)} •{' '}
          <span>{dateRelativeFormat(created_at)}</span>
        </div>
        <h3>{description}</h3>
      </div>
      <Link to={`/${id}`}>
        <span className="post-item-link">Read</span>
      </Link>
    </div>
  );
};

export default PostItem;
