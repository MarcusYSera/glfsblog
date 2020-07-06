import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/blogs/list">View All Blogs</Link>
      <br />
      <Link to="/blogs/new">Post a New Blog</Link>
    </div>
  );
};

export default Home;
