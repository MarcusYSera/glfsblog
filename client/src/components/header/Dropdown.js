import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './dropdown.css';

class Dropdown extends Component {
  state = { open: false };

  clickDropdown = () => {
    const { open } = this.state;
    if (!open) {
      document.addEventListener('click', this.clickedOutside, false);
    } else {
      document.removeEventListener('click', this.clickedOutside, false);
    }
    this.setState((previous) => ({
      open: !previous.open,
    }));
  };

  clickedOutside = (e) => {
    if (this.wrapper.contains(e.target)) {
      return;
    }
    this.clickDropdown();
  };

  render() {
    const { open } = this.state;
    return (
      <div
        className="ui right dropdown link item"
        ref={(wrapper) => {
          this.wrapper = wrapper;
        }}
        onClick={this.clickDropdown}
        onKeyDown={this.clickDropdown}
      >
        <div
        // className="dropdownwrapper"
        >
          <i className="bars icon" />
          {open && (
            <div className="menu transition visible">
              <Link to="/">
                <div className="item">Home</div>
              </Link>
              <Link to="/signup/login">
                <div className="item">Login</div>
              </Link>
              <Link to="/signup/finalform">
                <div className="item">Final Form</div>
              </Link>
              <Link to="/admin/Admin">
                <div className="item">Admin Page</div>
              </Link>
              <Link to="/blogs/new">
                <div className="item">New Blog Post</div>
              </Link>
              <Link to="/blogs/list">
                <div className="item">View All Blog</div>
              </Link>
              <Link to="/blogs/edit/:id">
                <div className="item">Edit Blog Post</div>
              </Link>
              <Link to="/blogs/view/:id">
                <div className="item">View Blog Post</div>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Dropdown;
