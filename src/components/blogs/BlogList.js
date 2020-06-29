import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import BlogShow from './BlogShow';

class BlogList extends Component {
  render() {
    console.log(this.props);

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
  }
}

const mapStateToProps = (state) => {
  return { blogs: state.blogs };
};

export default connect(mapStateToProps)(BlogList);
