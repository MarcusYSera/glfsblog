import React from 'react';
import { Field } from 'react-final-form';
import { compose } from 'redux';

const TextInput = (props) => {
  const { validate } = props;
  console.log(validate);
  return (
    <Field name={props.name} component="input" type="text" validate={props.validate}>
      {({ input, meta }) => (
        <div>
          <input {...input} placeholder={props.placeholder} />
          {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  );
};

export default TextInput;
