import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { DELETE_USER } from '../actions/types';

import Dropdown from './Dropdown';

class Header extends Component {
  // state = {loggedIn: false}

  componentDidMount() {
    console.log(`header did mount ${this.state}`);
  }

  componentDidUpdate() {
    console.log(`header update ${this.state}`);
  }

  render() {
    return (
      <div className="ui borderless main menu">
        <div className="ui text container">
          <div className="header item">
            <Link to="/" className="ui header">
              <i className="circle icon red" />
            </Link>
          </div>
          <Dropdown />
          {/* <div className="ui icon right pointing dropdown link item">
          <i className="bars icon"></i>
          <div className="menu">
          <div className="item">
          <option>
          <Link to="/signup/signin" className="ui right floated header">
          Sign In
          </Link>
          </option>
          </div>
          <div className="item">
          <Link to="/admin/Admin">Admin</Link>
          </div>
          </div>
        </div> */}
        </div>
      </div>
    );
  }
}

export default Header;
