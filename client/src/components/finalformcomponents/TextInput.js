import React from 'react';
import { Field } from 'react-final-form';

const TextInput = (props) => {
  // const { validate } = props;
  // console.log(validate);
  return (
    <Field
      name={props.name}
      component={props.component}
      // type="text"
      validate={props.validate}
    >
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
