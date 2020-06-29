import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectBlog } from '../../actions';

// import BlogShow from './BlogShow';

class BlogList extends Component {
  renderList() {
    // const { blogs, selectBlog } = props;
    return this.props.blogs.map((blog) => {
      return (
        <div className="item" key={blog.title}>
          <div className="right floated content">
            <button
              type="submit"
              className="ui button primary"
              onClick={() => this.props.selectBlog(blog)}
            >
              Select
            </button>
          </div>
          <div className="content">{blog.title}</div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props);
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
        <div className="ui divided list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { blogs: state.blogs };
};

export default connect(mapStateToProps, { selectBlog })(BlogList);
