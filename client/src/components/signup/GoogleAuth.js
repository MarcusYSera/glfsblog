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
      signedIn: '',
      userName: '',
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
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  componentDidUpdate() {
    if (this.auth.isSignedIn.get() && this.state.signedIn === '') {
      const googleId = this.auth.currentUser.get().getId();
      const googleUser = this.auth.currentUser
        .get()
        .getBasicProfile()
        .getGivenName();
      this.setState({
        signedIn: googleId,
        userName: googleUser,
      });
    }
    if (!this.auth.isSignedIn.get() && this.state.signedIn) {
      this.setState({
        signedIn: '',
        userName: '',
      });
    }
    console.log(this.state);
  }

  onAuthChange = (isSignedIn) => {
    const { signIn: signInProp, signOut: signOutProp, createNewUser } = this.props;
    if (isSignedIn) {
      signInProp(this.auth.currentUser.get().getId());

      const getInfo = this.auth.currentUser.get();
      const basicProfile = getInfo.getBasicProfile();

      const idSet = getInfo.getId();
      const userEmail = basicProfile.getEmail();
      const userFirstName = basicProfile.getGivenName();
      const userLastName = basicProfile.getFamilyName();

      if (createNewUser) {
        const today = new Date();
        glfsBlogDB
          .post('/api/users', {
            gmailID: `${idSet}`,
            firstName: `${userFirstName}`,
            lastName: `${userLastName}`,
            email: `${userEmail}`,
            createdAt: `${today}`,
          })
          .then((res) => {
            console.log(res.status);
            this.props.history.push('/');
          })
          .catch((err) => {
            alert(err);
            console.log(err);
          });
      }
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

export default connect(mapStateToProps, { signIn, signOut, createUserAction })(
  withRouter(GoogleAuth)
);
