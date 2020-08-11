import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { signIn, signOut, createUserAction } from '../../actions';

import glfsBlogDB from '../../apis/glfsBlogDB';

class GoogleAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createNewUser: props.createNewUser,
    };
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
          this.currentUser = this.auth.currentUser.get();
          this.userBasicInfo = this.currentUser.getBasicProfile();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    const { signIn: signInProp, signOut: signOutProp, createNewUser } = this.props;
    if (isSignedIn) {
      signInProp(
        this.auth.isSignedIn.get(),
        this.currentUser.getId(),
        this.auth.currentUser.get().getBasicProfile().getGivenName()
      );

      if (createNewUser) {
        glfsBlogDB
          .post('/api/users', {
            gmailID: `${this.currentUser.getId()}`,
            firstName: `${this.userBasicInfo.getGivenName()}`,
            lastName: `${this.userBasicInfo.getFamilyName()}`,
            email: `${this.userBasicInfo.getEmail()}`,
            createdAt: `${new Date()}`,
          })
          .then((res) => {
            console.log(res.status);
          })
          .catch((err) => {
            // alert(err);
            console.log(err);
          });
      }
      this.props.history.push('/');
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
  isSignedIn: null,
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut, createUserAction })(
  withRouter(GoogleAuth)
);
