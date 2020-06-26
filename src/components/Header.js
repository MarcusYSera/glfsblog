import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui segment">
      <Link to="/" className="ui left aligned header">
        App Icon
      </Link>
      <Link to="/" className="ui right aligned header">
        Home
        {/* <i className="home icon" /> */}
      </Link>
      <Link to="/">Login</Link>
      <Link to="/">Sign Up</Link>
    </div>
  );
};

export default Header;
