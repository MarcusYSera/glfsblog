import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '497745475816-s1se1ef8qio68uoat80f87bdmmbmtg33.apps.googleusercontent.com',
          scope: ('email', 'profile'),
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
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
    auth.signOut().then(() => {
      signOutProp();
      this.signOut();
    });
  }

  signOut() {
    this.props.history.push('/signup/login');
  }

  renderSignInOutButton() {
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
          {/* don't forget to add mouse change to pointer on hover over for sign out */}
          <div
            className="item"
            onClick={() => this.signOutUser(signOutProp, this.auth)}
          >
            Sign Out
          </div>
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
  // console.log(state);
  return {
    isSignedIn: state.auth.isSignedIn,
    userName: state.auth.userId,
    firstName: state.auth.firstName,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(withRouter(Dropdown));
