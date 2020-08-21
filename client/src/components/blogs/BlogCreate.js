import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import TextInput from './../finalformcomponents/TextInput';

class BlogCreate extends Component {
  state = {
    blogtitle: '',
    bloglocation: '',
    blogtags: [],
    bloglinks: [],
    blogpicture: '',
    blogdescription: '',
    blogbody: '',
  };
  onSubmit = (values) => {
    console.log(values);
  };

  required = (value) => (value ? undefined : 'Required');
  validURL = (value) =>
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm.test(
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
                <div className="field">
                  <TextInput
                    name="blogTitle"
                    component="input"
                    placeholder="Blog Title"
                    validate={this.required}
                  />
                </div>
                <div className="field">
                  <TextInput
                    name="blogLocation"
                    component="input"
                    placeholder="Blog Location"
                  />
                </div>
                <div className="field">
                  <TextInput
                    name="blogCategory"
                    component="input"
                    placeholder="Blog Category/Tags/Sort"
                  />
                </div>
                <div className="field">
                  <TextInput
                    name="url"
                    component="input"
                    placeholder="https://example.com"
                    validate={this.composeValidators(this.required, this.validURL)}
                  />
                </div>
                <div className="field">
                  <input type="file" accept="image/png, image/jpeg" />
                </div>
                <div className="field">
                  <TextInput
                    name="blogDescription"
                    component="input"
                    placeholder="Blog Description"
                  />
                </div>
                <div className="field">
                  <TextInput
                    name="blogBody"
                    component="textarea"
                    placeholder="Blog Body"
                  />
                </div>
                <div className="field">
                  <button>
                    Add category ie places to eat, places to see, advice, ect
                  </button>
                </div>
                <input type="submit" value="Post" />
              </div>
            </form>
          )}
        />
      </div>
    );
  }
}

export default BlogCreate;
