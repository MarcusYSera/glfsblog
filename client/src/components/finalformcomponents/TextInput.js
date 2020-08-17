import React from 'react';
import { Field } from 'react-final-form';

const TextInput = (props) => {
  // const { validate } = props;
  // console.log(props);
  return (
    <Field name={props.name} component="input" validate={props.validate}>
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
