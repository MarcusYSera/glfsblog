import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { signIn, signOut, createUserAction } from '../../actions';

import glfsBlogDB from '../../apis/glfsBlogDB';

class GoogleAuth extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            // '497745475816-s1se1ef8qio68uoat80f87bdmmbmtg33.apps.googleusercontent.com',
          '497745475816-ndjdnh1jmcd3og0a5j10teru22kpejnq.apps.googleusercontent.com',
          scope: ('email', 'profile'),
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.currentUser = this.auth.currentUser.get();
          // this.userBasicInfo = this.currentUser.getBasicProfile();
          console.log(this.auth);

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
          return;
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
      glfsBlogDB
        .get(
          `/api/users/${this.auth.currentUser.get().getBasicProfile().getEmail()}`
        )
        .then((res) => {
          if (res.data === '') {
            console.log('new user signing in by google');
            console.log(res.data);
            if (createNewUser) {
              console.log('will create new account');
              glfsBlogDB
                .post('/api/users', {
                  gmailID: `${this.auth.currentUser.get().getId()}`,
                  firstName: `${this.auth.currentUser
                    .get()
                    .getBasicProfile()
                    .getGivenName()}`,
                  lastName: `${this.auth.currentUser
                    .get()
                    .getBasicProfile()
                    .getFamilyName()}`,
                  email: `${this.auth.currentUser
                    .get()
                    .getBasicProfile()
                    .getEmail()}`,
                  createdAt: `${new Date()}`,
                })
                .then((res) => {
                  console.log(res.status);
                  return;
                })
                .catch((err) => {
                  // alert(err);
                  console.log(err);
                  return;
                });
            }
          }
          return;
        });
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
      // return null;
      return <div>I don't know if we are signed in</div>;
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
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut, createUserAction })(
  withRouter(GoogleAuth)
);
