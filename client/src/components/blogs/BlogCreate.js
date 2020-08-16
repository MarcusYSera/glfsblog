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
  render() {
    // const { blogtitle, bloglocations, blogtags, bloglinks, blogpicture, blogdescription, blogbody} = this.state
    return (
      <div className="column">
        <h1 className="ui header">Post New Blog</h1>
        <Form
          onSubmit={this.onSubmit}
          initialValues={{ blogTitle: '' }}
          render={({ submitError, handleSubmit, form, values }) => (
            <form className="ui large form" onSubmit={handleSubmit}>
              <div className="ui stacked segment">
                <div className="field">
                  <TextInput name="blogTitle" placeholder="Blog Title" />
                </div>

                <div className="field">
                  <Field name="blogLocation" component="input" type="text">
                    {({ input, meta }) => (
                      <div>
                        <input {...input} placeholder="Blog Location" />
                        {meta.touched && meta.error && <span>{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                </div>
                <div className="field">
                  <input type="text" placeholder="Blog category/tags/sort" />
                </div>
                <div className="field">
                  <input
                    type="url"
                    placeholder="https://example.com"
                    pattern="https://.*"
                    size="30"
                  />
                </div>
                <div className="field">
                  <input type="file" accept="image/png, image/jpeg" />
                </div>
                <div className="field">
                  <input type="text" placeholder="Blog description" />
                </div>
                <div className="field">
                  <textarea
                    type="text"
                    placeholder="Blog body"
                    rows="10"
                    cols="50"
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
