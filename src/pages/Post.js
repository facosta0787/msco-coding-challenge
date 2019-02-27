import React, { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import Hero from '../components/Hero';
import UserInfo from '../components/UserInfo';
import Paginator from '../components/Paginator';

import ReactMarkdown from 'react-markdown';
import { dateFormat, dateRelativeFormat } from '../shared/formatters';

import axios from 'axios';

const renderContent = file => {
  if (file) {
    return (
      <div className="post-body">
        <ReactMarkdown source={file.content} />
      </div>
    );
  }
};

const Post = props => {
  const [post, setPost] = useState(null);
  const [user, setUser] = useState({});
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchPost();
  }, [props]);

  const fetchPost = async () => {
    const { data } = await axios.get(`https://api.github.com/gists/${getId()}`);

    const {
      owner: { login }
    } = data;

    const { data: user } = await axios.get(
      `https://api.github.com/users/${login}`
    );

    const { data: posts } = await axios.get(
      `https://api.github.com/users/${login}/gists`
    );

    setPost(data);
    setUser(user);
    setLinks(posts.map(post => post.id));
  };

  const getId = () => {
    const {
      match: {
        params: { id }
      }
    } = props;
    return id;
  };

  const render = () => {
    if (!post) {
      return <Spinner />;
    }

    const { created_at, description, files } = post;
    const [content] = Object.keys(files);
    const file = files[content];

    const { name, avatar_url } = user;

    return (
      <div className="container">
        <div className="content">
          <Header />
          <div className="post-date">
            {dateFormat(created_at)} •{' '}
            <span>{dateRelativeFormat(created_at)}</span>
          </div>
          <div className="post-content">
            <Hero title={description} />
            {renderContent(file)}
          </div>
          {user.name && <UserInfo name={name} avatar={avatar_url} />}
          <Paginator gists={links} current={getId()} />
          <img
            src="/img/gpp_background.png"
            className="graphic"
            alt="graphic"
          />
        </div>
      </div>
    );
  };

  return render();
};

export default Post;
