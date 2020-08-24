import React from 'react';
import { Field } from 'react-final-form';

const TextInput = (props) => {
  // const { validate } = props;
  const { component } = props;
  console.log(props);
  switch (component) {
    case 'input':
      return (
        <div className="field">
          <Field
            name={props.name}
            type={props.type}
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
            multiple
          >
            {props.children}
          </Field>
        </div>
      );
  }
  // return (
  // );
};

export default TextInput;
