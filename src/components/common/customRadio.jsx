import React from 'react';
import { Label, CustomInput } from 'reactstrap'

// Input feedback
const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

// Checkbox input
export const Checkbox = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <CustomInput
      name={name}
      id={id}
      type="checkbox"
      value={value}
      checked={value}
      onChange={onChange}
      onBlur={onBlur}
      className="my-checkbox"
      label={label}
      inline
    />
  );
};


export const RadioButton = ({
  field: { name, value, onChange, onBlur },
  id,
  label,
  className,
  ...props
}) => {
  return (
    <CustomInput
      name={name}
      id={id}
      type="radio"
      value={label}
      checked={label === value}
      onChange={onChange}
      onBlur={onBlur}
      className="bubble"
      label={label}
      inline
      {...props}
    />
  );
};


// Radio group
export const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {

  return (
    <div className="test">
      <fieldset>
        <Label className="d-block">{label}</Label>
        {children}
        {touched && <InputFeedback error={error} />}
      </fieldset>
    </div>
  );
};
