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
                  placeholder="Title"
                  validate={this.required}
                />
                {/* when I get a chance, see about hooking up google places here */}
                <TextInput
                  component="text"
                  name="blogLocation"
                  placeholder="Destination"
                />
                {/* swap out for checkboxes */}
                {/* change this later to multiselect */}
                {/* <TextInput
                  component="selectMultiple"
                  name="blogCategory"
                  placeholder="Blog Category"
                >
                  <option value="">Blog Category</option>
                  <option value="food">Food</option>
                  <option value="travel">Travel</option>
                  <option value="attraction">Attraction</option>
                  <option value="historical">Historical</option>
                  <option value=""></option>
                  <option value=""></option>
                </TextInput> */}
                <label>
                  Categories, Choose All that Apply
                  <TextInput component="checkbox" name="blogCategory" value="review">
                    Review
                  </TextInput>
                  <TextInput component="checkbox" name="blogCategory" value="tips">
                    Tips
                  </TextInput>
                  <TextInput
                    component="checkbox"
                    name="blogCategory"
                    value="experience"
                  >
                    Experience
                  </TextInput>
                  <TextInput component="checkbox" name="blogCategory" value="food">
                    Food, Consider adding cost text input on check
                  </TextInput>
                  <TextInput
                    component="checkbox"
                    name="blogCategory"
                    value="activity"
                  >
                    Activity, adding cost text input on check
                  </TextInput>
                </label>
                <TextInput
                  component="text"
                  name="url"
                  placeholder="Helpful Links"
                  validate={this.composeValidators(this.required, this.validURL)}
                />
                <div className="field">
                  <input type="file" accept="image/png, image/jpeg" />
                </div>
                <TextInput
                  component="text"
                  name="blogDescription"
                  placeholder="Short Description/Caption"
                />
                <TextInput
                  component="textarea"
                  name="blogbody"
                  placeholder="Start Writing Here"
                />
                {/* <div className="field">
                  <button className="ui button">
                    Add category ie places to eat, places to see, advice, associated cost for activity, ect
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
