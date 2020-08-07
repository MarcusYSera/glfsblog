import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

class FinalForm extends Component {
  onSubmit = (e) => {
    console.log(`onSubmit callback here: ${e.firstName}`);
  };

  required = (value) => (value ? undefined : 'Required');

  render() {
    return (
      <div>
        <h1>Final Form</h1>
        <Form
          onSubmit={this.onSubmit}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
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
                <Field name="email" validate={this.required}>
                  {({ input, meta }) => (
                    <div>
                      <input {...input} placeholder="Email" />
                      {meta.touched && meta.error && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
              <div>
                <label>Password</label>
                <Field name="password" validate={this.required}>
                  {({ input, meta }) => (
                    <div>
                      <input {...input} placeholder="Password" />
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

export default FinalForm;
