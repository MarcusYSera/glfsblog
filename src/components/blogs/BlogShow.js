import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';

const BlogShow = () => {
  return (
    <div className="ui massive horizontal selection list">
      <div className="item">
        <img className="ui avatar image" src={faker.image.avatar()} alt="blog pic" />
        <div className="content">
          <div className="header">Blog Title</div>
          short description
        </div>
      </div>
      {/* <div className="image">
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
      </div> */}
    </div>
  );
};

export default BlogShow;
