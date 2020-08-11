import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
  // console.log('props from home page');
  // console.log(props);
  return (
    <div>
      <h1>Welcome {props.auth.firstName}</h1>
      <Link to="/blogs/list">View All Blogs</Link>
      <br />
      <Link to="/blogs/new">Post a New Blog</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log('state from home page');
  // console.log(state);
  return state;
};
export default connect(mapStateToProps)(Home);
