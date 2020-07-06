import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui segment">
      <Link to="/" className="ui header">
        <i className="circle icon red" />
      </Link>
      <Link to="/" className="ui right floated header">
        Home
        {/* <i className="home icon" /> */}
      </Link>
      <Link to="/signup/signin" className="ui right floated header">Sign In</Link>
      <Link to="/admin/Admin" className="ui right floated header">Admin</Link>
    </div>
  );
};

export default Header;
