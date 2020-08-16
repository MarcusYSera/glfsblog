import React from 'react';
import { Field } from 'react-final-form';

const TextInput = (props) => {
  return (
    <Field name={props.name} component="input" type="text">
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
