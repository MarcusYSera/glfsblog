import React from 'react';
import { Field } from 'react-final-form';

const TextAreaInput = (props) => {
  // const { validate } = props;
  return (
    <Field
      name={props.name}
      component="textarea"
      placeholder={props.placeholder}
    ></Field>
  );
};

export default TextAreaInput;
