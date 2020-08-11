import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import { signIn } from '../../actions';

import GoogleAuth from './GoogleAuth';

// import InputField from './InputField';

class Login extends Component {

  componentDidMount() {
    // need to initialize db to check against registered users
  }

  onSubmit = (e) => {
    // e.preventDefault();
    console.log('clicked submit button');
  };

  required = (value) => (value ? undefined : 'Required');

  render() {
    const subscription = {};
    return (
      <div className="signupform">
        <h1 className="ui center aligned header">Login</h1>
        <div className="ui center aligned basic segment">
          <GoogleAuth createNewUser={false} />
          <div className="ui horizontal divider">OR</div>
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
            initialValues={{ email: '', password: '' }}
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
                      validate={this.required}
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
                      validate={this.required}
                    >
                      {({ input, meta }) => (
                        <div>
                          <input {...input} placeholder="Password" />
                          {meta.touched && meta.error && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                  </div>
                  <button className="ui submit button" type="submit">
                    Submit
                  </button>
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
