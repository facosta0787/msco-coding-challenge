import React from 'react';
import { string } from 'prop-types';

import './UserInfo.css';
const UserInfo = ({ name, avatar }) => {
  return (
    <div className="user-info">
      <figure className="user-info-avatar">
        <img src={avatar} alt="avatar" />
      </figure>
      <div className="user-info-details">
        <h3>{name}</h3>
        <span>Posts</span>
      </div>
    </div>
  );
};

export default React.memo(UserInfo);

UserInfo.propTypes = {
  name: string.isRequired,
  avatar: string.isRequired
};
