import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { withRouter } from 'react-router-dom';

class FinalForm extends Component {
  onSubmit = (e) => {
    console.log(`onSubmit callback here: ${JSON.stringify(e)}`);
    this.props.history.push('/');
  };

  required = (value) => (value ? undefined : 'Required');
  validEmail = (value) =>
    /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}\w+/g.test(value)
      ? undefined
      : 'Must be a valid email';
  composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

  render() {
    return (
      <div>
        <h1>Final Form</h1>
        <Form
          onSubmit={this.onSubmit}
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
          render={({ handleSubmit, form }) => (
            <form onSubmit={handleSubmit}>
              {/* will require field level validation to check individual values */}
              <div>
                <label>First Name</label>
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
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
              <div>
                <label>Last Name</label>
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
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
              <div>
                <label>Email</label>
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder="email"
                  validate={this.composeValidators(this.required, this.validEmail)}
                >
                  {({ input, meta }) => (
                    <div>
                      <input {...input} placeholder="Email" />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>

              {/* Require record level validation for password and confirm password */}

              <div>
                <label>Password</label>
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
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
              <div>
                <label>Confirm Password</label>
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
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

export default withRouter(FinalForm);
