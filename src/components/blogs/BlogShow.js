import React from 'react';
// import { Link } from 'react-router-dom';
// import faker from 'faker';
import { connect } from 'react-redux';

const BlogShow = ({ blog }) => {
  if (!blog) {
    return <div>no song selected, please select song</div>;
  }
  return (
    <div>
      <h1>{blog.title}</h1>
      <div>{blog.date}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { blog: state.selectedBlog };
};

export default connect(mapStateToProps)(BlogShow);
