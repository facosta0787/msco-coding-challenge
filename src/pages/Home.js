import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Searcher from '../components/Searcher';
import UserInfo from '../components/UserInfo';
import PostsList from '../components/PostsList';

import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    onSubmitHandler('facosta0787');
  }, []);

  const onSubmitHandler = async value => {
    if (value.trim() !== '') {
      const { data: posts } = await axios.get(
        `https://api.github.com/users/${value}/gists`
      );
      if (posts.length > 0) {
        const [post] = posts;
        const {
          owner: { login }
        } = post;
        const { data: user } = await axios.get(
          `https://api.github.com/users/${login}`
        );
        setPosts(posts);
        setUser(user);
      }
    }
  };

  const render = () => {
    const linkPosts = posts.map(post => post.url);
    console.log(linkPosts);
    const { name, avatar_url } = user;
    return (
      <div className="container">
        <div className="content">
          <Header />
          <Hero
            title="Blog msco."
            subtitle="Explore the unknown. Uncover what matters. Prototype, test, repeat.
          Combine intuition with evidence. Design with intent and build it right."
          />
          <Searcher
            onSubmit={onSubmitHandler}
            placeholder="Keyword..."
            areThereResults={posts.length > 0}
          />
          {user.name && <UserInfo name={name} avatar={avatar_url} />}
          {posts.length > 0 && <PostsList posts={posts} />}
          <img
            src="/img/gph_background.png"
            className="graphic"
            alt="graphic"
          />
        </div>
      </div>
    );
  };

  return render();
};

export default Home;
