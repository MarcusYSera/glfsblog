import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';

const BlogShow = () => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={faker.image.avatar()} alt="blog pic" />
      </div>
      <div className="content">
        <Link to="/blogs/view" className="header">
          Blog Name/Title
        </Link>
        <div className="meta">Date Created</div>
        <div className="description">Short description of post</div>
        <div className="extra content">
          <Link to="/">
            <i className="eye icon" />
            Views: 22
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogShow;
