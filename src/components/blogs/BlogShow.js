import React from 'react';
import { Link } from 'react-router-dom';

const BlogShow = () => {
  return (
    <div className="ui card">
      <div className="image">
        <img src="" alt="blog pic" />
      </div>
      <div className="content">
        <Link to="/blogs/view" className="header">
          Blog Name/Title
        </Link>
      </div>
    </div>
  );
};

export default BlogShow;
