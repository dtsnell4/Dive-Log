import React from 'react';
import { Label, CustomInput } from 'reactstrap'

const DiveCustomInput = (props) => {
  const {
  	input,
    type,
    label,
    id,
    placeholder,
    value,
    validateMe,
    meta: { touched, error },
  } = props;

  return (
  	<span className="mr-3">
      <Label className="text-shadow" for={id}>
        <CustomInput {...input} value={value} type={type} id={id} placeholder={placeholder} onBlur={validateMe} className="bubble" inline />
        {label}
      </Label>
      {touched && error && <span>{error}</span>}
    </span>
  );
};

export default DiveCustomInput;

