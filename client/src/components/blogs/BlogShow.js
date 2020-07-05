import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BlogShow = ({ blog }) => {
  if (!blog) {
    return <div>no blog selected, please select blog</div>;
  }
  return (
    <div>
      <Link to="/blogs/edit">Edit</Link>
      <h1>{blog.title}</h1>
      <div>{blog.date}</div>
      <div>Blog Image</div>
      <div>Blog Content</div>
      <div>Creator/Poster</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { blog: state.selectedBlog };
};

BlogShow.propTypes = {
  blog: PropTypes.arrayOf(PropTypes.object),
};

BlogShow.defaultProps = {
  blog: {},
};

export default connect(mapStateToProps)(BlogShow);
