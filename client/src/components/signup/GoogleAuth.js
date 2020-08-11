import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signIn, signOut } from '../../actions';

class GoogleAuth extends Component {
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
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    const { signIn: signInProp, signOut: signOutProp } = this.props;
    if (isSignedIn) {
      signInProp(this.auth.currentUser.get().getId());
      // console.log(this.auth.currentUser.get().getBasicProfile());
      console.log(this.auth.currentUser.get().getBasicProfile().getEmail());
      console.log(this.auth.currentUser.get().getBasicProfile().getName());
      console.log(this.auth.currentUser.get().getId());
    } else {
      signOutProp();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    const { isSignedIn } = this.props;
    if (isSignedIn === null) {
      return null;
    }
    if (isSignedIn) {
      return (
        <button
          type="button"
          onClick={this.onSignOutClick}
          className="ui red google button"
        >
          <i className="google icon" />
          Sign Out
        </button>
      );
    }
    return (
      <button
        type="button"
        onClick={this.onSignInClick}
        className="ui red google button"
      >
        <i className="google icon" />
        Sign In with Google
      </button>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

GoogleAuth.propTypes = {
  signIn: PropTypes.func,
  signOut: PropTypes.func,
  isSignedIn: PropTypes.bool,
};

GoogleAuth.defaultProps = {
  signIn() {},
  signOut() {},
  isSignedIn: false,
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
