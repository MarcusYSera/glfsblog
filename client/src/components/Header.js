import React from 'react';
import { Link } from 'react-router-dom';
// import { DELETE_USER } from '../actions/types';
import { Dropdown, Menu } from 'semantic-ui-react';

const Header = () => {
  return (
    <div className="ui borderless main menu">
      <div className="ui text container">
        <div className="header item">
          <Link to="/" className="ui header">
            <i className="circle icon red" />
          </Link>
        </div>
        <div className="ui icon right pointing dropdown link item" >
          <i className="bars icon"></i>
          <div className="menu">
            <div className="item">
          <Link to="/signup/signin" className="ui right floated header">
            Sign In
          </Link>
          </div>
          <div className="item">
          <Link to="/admin/Admin" >
            Admin
          </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
