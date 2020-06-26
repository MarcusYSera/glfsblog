import React from 'react';
import { Link } from 'react-router-dom';
import faker from 'faker';

const BlogShow = () => {
  return (
    <div className="ui massive horizontal selection list">
      <div className="item">
        <Link to="/blogs/view" className="ui link cards">
          <div className="card">
            <img className="image" src={faker.image.avatar()} alt="blog pic" />
            <div className="content">
              <div className="header">Blog Title</div>
              <div className="meta">{faker.address.city()}</div>
              <div className="description">short description</div>
            </div>
            <div className="extra content">
              <span className="right floated">date added</span>
              <i className="eye icon" />
              22 views
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogShow;
