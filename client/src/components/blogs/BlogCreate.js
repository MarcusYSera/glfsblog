import React, { Component } from 'react';
import { Form } from 'react-final-form';
// import { withRouter, Link } from 'react-router-dom';
// import { connect } from 'react-redux';

import TextInput from './../finalformcomponents/TextInput';

class BlogCreate extends Component {
  // state = {
  //   blogtitle: '',
  //   bloglocation: '',
  //   blogtags: [],
  //   bloglinks: [],
  //   blogpicture: '',
  //   blogdescription: '',
  //   blogbody: '',
  // };
  onSubmit = (values) => {
    console.log(values);
  };

  required = (value) => (value ? undefined : 'Required');
  validURL = (value) =>
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/gm.test(
      value
    )
      ? undefined
      : 'Must be valid URL';
  // validURL = (value) => (urlRegex.test(value) ? undefined : 'Must be valid URL');
  composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);

  render() {
    const subscription = {};
    // const { blogtitle, bloglocations, blogtags, bloglinks, blogpicture, blogdescription, blogbody} = this.state
    return (
      <div className="column">
        <h1 className="ui header">Post New Blog</h1>
        <Form
          onSubmit={this.onSubmit}
          subscription={subscription}
          // validate={(values) => {
          //   const errors = {};
          //   return errors;
          // }}
          initialValues={{ blogTitle: '' }}
          render={({ submitError, handleSubmit, form, values }) => (
            <form className="ui large form" onSubmit={handleSubmit}>
              <div className="ui stacked segment">
                <TextInput
                  name="blogTitle"
                  component="text"
                  placeholder="Blog Title"
                  validate={this.required}
                />
                {/* when I get a chance, see about hooking up google places here */}
                <TextInput
                  component="text"
                  name="blogLocation"
                  placeholder="Blog Location"
                />
                {/* swap out for checkboxes */}
                <TextInput component="checkbox" name="blogCategory" value="food">
                  Food
                </TextInput>
                <TextInput component="checkbox" name="blogCategory" value="travel">
                  Travel
                </TextInput>
                <TextInput
                  component="checkbox"
                  name="blogCategory"
                  value="attraction"
                >
                  Attraction
                </TextInput>
                <TextInput
                  component="text"
                  name="url"
                  placeholder="https://example.com"
                  validate={this.composeValidators(this.required, this.validURL)}
                />
                <div className="field">
                  <input type="file" accept="image/png, image/jpeg" />
                </div>
                <TextInput
                  component="text"
                  name="blogDescription"
                  placeholder="Short Blog Description"
                />
                <TextInput
                  component="textarea"
                  name="blogbody"
                  placeholder="Blog Body"
                />
                {/* <div className="field">
                  <button className="ui button">
                    Add category ie places to eat, places to see, advice, ect
                  </button>
                </div> */}
                  <button className="ui submit button" type="submit">
                    Submit
                  </button>
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

export default BlogCreate;
