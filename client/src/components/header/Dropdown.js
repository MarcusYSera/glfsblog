import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import { signIn, signOut } from '../../actions';

import './dropdown.css';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  componentDidMount() {
    const { isSignedIn } = this.props;
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '497745475816-s1se1ef8qio68uoat80f87bdmmbmtg33.apps.googleusercontent.com',
          scope: ('email', 'profile'),
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          if (isSignedIn === null) {
            this.auth.signOut();
          }
        });
    });
  }

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

  signOutUser(signOutProp, auth) {
    auth.signOut();
    signOutProp();
  }

  renderSignInOutButton() {
    // console.log(this.props);
    const { isSignedIn, signOut: signOutProp } = this.props;
    if (isSignedIn) {
      return (
        <div>
          <Link to="/blogs/new">
            <div className="item">New Blog Post</div>
          </Link>
          <Link to="/blogs/edit/:id">
            <div className="item">Edit Blog Post</div>
          </Link>
          <Link to="/blogs/view/:id">
            <div className="item">View Blog Post</div>
          </Link>
          <Link to="/">
            <div
              className="item"
              onClick={() => this.signOutUser(signOutProp, this.auth)}
            >
              Sign Out
            </div>
          </Link>
        </div>
      );
    }
    if (!isSignedIn) {
      return (
        <Link to="/signup/login">
          <div className="item">Login</div>
        </Link>
      );
    }
  }
  render() {
    const { isSignedIn } = this.props;
    const { open } = this.state;
    console.log(isSignedIn);
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
              <Link to="/blogs/list">
                <div className="item">View All Blogs</div>
              </Link>
              {/* <Link to="/admin/Admin">
                <div className="item">Admin Page</div>
              </Link> */}
              {this.renderSignInOutButton()}
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userName: state.auth.userId,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(Dropdown);
