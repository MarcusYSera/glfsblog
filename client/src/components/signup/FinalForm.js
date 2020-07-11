import React, { Component } from 'react';
import { Form, Field, FormSpy } from 'react-final-form';

class FinalForm extends Component {
  // onSubmit = (e) => {
  //   console.log(e.firstName);
  // };

  required = (value) => (value ? undefined : 'Required');

  render() {
    return (
      <div>
        <h1>Final Form</h1>
        <Form
          onSubmit={(values) => {
            console.log({ values });
          }}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="firstName" validate={this.required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} placeholder="First Name" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="lastName" validate={this.required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} placeholder="Last Name" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="email" validate={this.required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} placeholder="Email" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="password" validate={this.required}>
                {({ input, meta }) => (
                  <div>
                    <input {...input} placeholder="Password" />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
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
