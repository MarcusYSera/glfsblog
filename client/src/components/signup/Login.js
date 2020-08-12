// Connect to redux to save user info on login

import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signIn } from '../../actions';

import GoogleAuth from './GoogleAuth';

import glfsBlogDB from '../../apis/glfsBlogDB';

class Login extends Component {
  state = { currentUser: '' };

  onSubmit = async (values) => {
    const { signIn: signInProp } = this.props;
    if (values.email !== '') {
      await glfsBlogDB
        .get(`/api/users/${values.email}`)
        .then((res) => {
          if (res.data !== '') {
            this.setState({
              currentUser: res.data,
            });
            console.log(res.data);
            signInProp(true, res.data._id, res.data.firstName);
            this.props.history.push('/');
            return res.data;
          } else {
            this.setState({
              currentUser: res.data,
            });
            console.log('login failed');
            return null;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const { currentUser } = this.state;
    if (currentUser === '' && values.email !== '') {
      return { email: 'No Account Associated With This Email' };
    }
  };

  render() {
    const subscription = {};
    const { currentUser } = this.state;
    return (
      <div className="signupform">
        <h1 className="ui center aligned header">Login</h1>
        <div className="ui center aligned basic segment">
          <GoogleAuth createNewUser={false} />
          <div className="ui horizontal divider">OR</div>
          <Form
            onSubmit={this.onSubmit}
            subscription={subscription}
            initialValues={{ email: '', password: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              }
              if (!values.password) {
                errors.password = 'Required';
              }
              if (currentUser !== '' && currentUser.password !== values.password) {
                errors.password = 'Email and Password do not match.';
              }
              return errors;
            }}
            render={({ handleSubmit, form, values, submitError }) => (
              <form
                className="ui form attached fluid segment"
                onSubmit={handleSubmit}
              >
                <div className="ui stacked segment">
                  <div className="field">
                    <Field
                      name="email"
                      component="input"
                      type="text"
                      placeholder="Email"
                    >
                      {({ input, meta }) => (
                        <div>
                          <input {...input} placeholder="Email" />
                          {(meta.error || meta.submitError) && meta.touched && (
                            <span>{meta.error || meta.submitError}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                  <div className="field">
                    <Field
                      name="password"
                      component="input"
                      type="password"
                      placeholder="Password"
                    >
                      {({ input, meta }) => (
                        <div>
                          <input {...input} placeholder="Password" />
                          {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                  </div>
                  <div>
                    <button className="ui submit button" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            )}
          />
          <div className="ui bottom attached warning message">
            Need an Account? <Link to="/signup/FinalForm">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { signIn })(withRouter(Login));
