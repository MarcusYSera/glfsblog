import React from 'react';
import { Link } from 'react-router-dom';

import BlogShow from './BlogShow';

const BlogList = () => {
  return (
    <div className="ui divider">
      <Link to="/blogs/new" className="item">
        New Blog
      </Link>
      <br />
      <Link to="/blogs/edit" className="item">
        Edit Blog
      </Link>
      <br />
      <Link to="/blogs/view" className="item">
        View Blog
      </Link>
      <br />
      <Link to="/blogs/delete" className="item">
        DeleteBlog
      </Link>
      <div>
        <BlogShow />
        <BlogShow />
        <BlogShow />
        <BlogShow />
        <BlogShow />
        <BlogShow />
        <BlogShow />
        <BlogShow />
      </div>
    </div>
  );
};

export default BlogList;
