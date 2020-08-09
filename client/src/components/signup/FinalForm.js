import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createUserAction } from '../../actions';

import GoogleAuth from './GoogleAuth';

import glfsBlogDB from '../../apis/glfsBlogDB';

class FinalForm extends Component {

  onSubmit = (e) => {
    const today = new Date();
    console.log(`onSubmit callback here: ${JSON.stringify(e)}`);

    glfsBlogDB
      .post('/api/users', {
        firstName: `${e.firstName}`,
        lastName: `${e.lastName}`,
        email: `${e.email}`,
        password: `${e.password}`,
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
  };

  required = (value) => (value ? undefined : 'Required');
  validEmail = (value) =>
    /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}\w+/g.test(value)
      ? undefined
      : 'Must be a valid email';
  composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

  render() {
    const subscription = {};
    return (
      <div>
        <h1 className="ui center aligned header">Sign Up</h1>
        <div className="ui placeholder segment">
          <div className="ui two column very relaxed stackable grid">
            <div className="column">
              <Form
                onSubmit={this.onSubmit}
                subscription={subscription}
                validate={(values) => {
                  const errors = {};
                  if (values.password !== values.confirmPassword) {
                    errors.confirmPassword = 'Must Match';
                  }
                  return errors;
                }}
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                }}
                render={({ handleSubmit, form, values }) => (
                  <form
                    className="ui form attached fluid segment"
                    onSubmit={handleSubmit}
                  >
                    {/* will require field level validation to check individual values */}
                    <div className="ui stacked segment">
                      <div className="two fields">
                        <div className="field">
                          {/* <label>First Name</label> */}
                          <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                            validate={this.required}
                          >
                            {({ input, meta }) => (
                              <div>
                                <input {...input} placeholder="First Name" />
                                {meta.touched && meta.error && (
                                  <span>{meta.error}</span>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>
                        <div className="field">
                          {/* <label>Last Name</label> */}
                          <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                            validate={this.required}
                          >
                            {({ input, meta }) => (
                              <div>
                                <input {...input} placeholder="Last Name" />
                                {meta.touched && meta.error && (
                                  <span>{meta.error}</span>
                                )}
                              </div>
                            )}
                          </Field>
                        </div>
                      </div>
                      <div className="field">
                        {/* <label>Email</label> */}
                        <Field
                          name="email"
                          component="input"
                          type="text"
                          placeholder="email"
                          validate={this.composeValidators(
                            this.required,
                            this.validEmail
                          )}
                        >
                          {({ input, meta }) => (
                            <div>
                              <input {...input} placeholder="Email" />
                              {meta.touched && meta.error && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>

                      {/* Require record level validation for password and confirm password */}

                      <div className="field">
                        {/* <label>Password</label> */}
                        <Field
                          name="password"
                          component="input"
                          type="password"
                          placeholder="password"
                          validate={this.required}
                        >
                          {({ input, meta }) => (
                            <div>
                              <input {...input} placeholder="Password" />
                              {meta.touched && meta.error && (
                                <span>{meta.error}</span>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="field">
                        {/* <label>Confirm Password</label> */}
                        <Field
                          name="confirmPassword"
                          component="input"
                          type="password"
                          placeholder="confirmPassword"
                          validate={this.required}
                        >
                          {({ input, meta }) => (
                            <div>
                              <input {...input} placeholder="Confirm Password" />
                              {meta.touched && meta.error && (
                                <span>{meta.error}</span>
                              )}
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
                Already have an Account? <Link to="/signup/login">Sign In</Link>
              </div>
            </div>
            <div className="middle aligned column">
              <GoogleAuth createNewUser={true} />
            </div>
          </div>
          <div className="ui vertical divider">OR</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { createUserAction })(withRouter(FinalForm));
