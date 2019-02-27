import React from 'react';
import Post from './PostItem';

import './PostsList.css';

const PostList = ({ posts }) => {
  return (
    <div className="list-container">
      <ul className="list">
        {posts &&
          posts.map(post => (
            <li key={post.id} className="list-item">
              <Post
                id={post.id}
                created_at={post.created_at}
                description={post.description}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostList;
