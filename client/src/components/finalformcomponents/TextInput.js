import React from 'react';
import { Field } from 'react-final-form';

const TextInput = (props) => {
  // const { validate } = props;
  const { component } = props;
  console.log(props);
  switch (component) {
    case 'text':
      return (
        <div className="field">
          <Field
            name={props.name}
            type="text"
            component="input"
            validate={props.validate}
          >
            {({ input, meta }) => (
              <div>
                <input {...input} placeholder={props.placeholder} />
                {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </div>
      );
    case 'checkbox':
      return (
        <div className="field">
          <Field
            name={props.name}
            component="input"
            type="checkbox"
            value={props.value}
          />{' '}
          {props.children}
        </div>
      );
    case 'textarea':
      return (
        <div className="field">
          <Field
            name={props.name}
            component="textarea"
            placeholder={props.placeholder}
          />
        </div>
      );
    case 'select':
      return (
        <div className="field">
          <Field
            name={props.name}
            component="select"
            placeholder={props.placeholder}
          >
            {props.children}
          </Field>
        </div>
      );
    case 'selectMultiple':
      return (
        <div className="field">
          <Field
            name={props.name}
            component="select"
            placeholder={props.placeholder}
            // multiple
            className="ui fluid search dropdown"
            multiple=""
          >
            {props.children}
          </Field>
        </div>
      );
    default:
      return null;
  }
  // return (
  // );
};

export default TextInput;
