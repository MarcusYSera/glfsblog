import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/" className="item">
        App Icon
      </Link>
      <Link to="/" className="item">
        <i className="home icon" />
      </Link>
    </div>
  );
};

export default Header;
