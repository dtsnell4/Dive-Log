import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap'

const FormInput = (props) => {
  // console.log(props)
  const {
    input,
    type,
    label,
    id,
    placeholder,
    value,
    touched, 
    errors,
    field,
    form, 
  } = props;
  console.log(props)
  let rows = null;

  if (type === "textarea") {
    rows = 10;
  }
  return (
  	<FormGroup>
      {label && <Label className="text-shadow" for={id}>{label}</Label>}
      <Input {...input} value={field.value} type={type} id={id} placeholder={placeholder} className="bubble" rows={rows} />
    </FormGroup>
  );
};

      // {touched && error && <span>{error}</span>}
export default FormInput;

