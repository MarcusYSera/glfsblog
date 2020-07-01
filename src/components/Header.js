import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './signup/GoogleAuth';

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
      <GoogleAuth />
    </div>
  );
};

export default Header;
