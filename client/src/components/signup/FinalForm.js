import React, { Component } from 'react';
import { Form, Field, FormSpy } from 'react-final-form';

class FinalForm extends Component {

  onSubmit=(e)=>{
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <div>
        <h1>Final Form</h1>
        <Form>
          onSubmit={this.onSubmit}

        </Form>
      </div>
    );
  }
}

export default FinalForm;
