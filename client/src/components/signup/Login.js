import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import { signIn } from '../../actions';

import GoogleAuth from './GoogleAuth';

import glfsBlogDB from '../../apis/glfsBlogDB';

class Login extends Component {
  state = { currentUser: '', checkEmail: false };
  componentDidMount() {
    // need to initialize db to check against registered users
  }

  onSubmit = (e) => {
    console.log('submit clicked');
    if (e.email !== '') {
      this.fetchUserFromDB(e.email);
    }
  };

  fetchUserFromDB = (email) => {
    glfsBlogDB
      .get(`/api/users/${email}`)
      .then((res) => {
        if (res.data !== '') {
          this.setState({
            currentUser: res.data,
            checkEmail: true,
          });
          console.log(res.data);
        } else {
          this.setState({
            checkEmail: true,
          });
          console.log('made it to db else');
          return { email: 'No Account Associated with this Email' };
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // verifyEmail = async (values) => {
  //   if (values.email) {
  //     console.log(values);
  //     await glfsBlogDB
  //       .get(`/api/users/${values.email}`)
  //       .then((res) => {
  //         if (res.data !== '') {
  //           this.setState({
  //             currentUser: res.data,
  //           });
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     const { currentUser } = this.state;
  //     if (currentUser === '') {
  //       return { email: 'No Account Associated With This Email' };
  //     }
  //   }
  // };

  // required = (value) => (value ? undefined : 'Required');

  render() {
    const subscription = {};
    const { currentUser, checkEmail } = this.state;
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
                errors.email = 'Must be filled in';
              }
              if (!values.password) {
                errors.password = 'Cannot be Empty';
              }
              if (currentUser != '' && currentUser.password !== values.password) {
                errors.password = 'Email and Password do not match.';
                // errors.email = 'User Already Exists';
              }
              return Object.keys(errors).length ? errors : null;
            }}
            render={({ handleSubmit, form, values }) => (
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
                      // validate={this.required}
                    >
                      {({ input, meta }) => (
                        <div>
                          <input {...input} placeholder="Email" />
                          {meta.touched && meta.error && <span>{meta.error}</span>}
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
                      // validate={this.required}
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

export default connect(mapStateToProps)(withRouter(Login));
