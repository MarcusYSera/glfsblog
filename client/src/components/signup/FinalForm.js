import React, { Component } from 'react';
import { Form, Field, FormSpy } from 'react-final-form';

class FinalForm extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <div>
        <h1>Final Form</h1>
        <Form>
          onSubmit={this.onSubmit}
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field name="firstName" type="text" placeholder="First Name" />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </Form>
      </div>
    );
  }
}

export default FinalForm;
