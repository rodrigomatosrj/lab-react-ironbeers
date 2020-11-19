import React, { useState } from 'react';

function FormInput(props) {
  const [state,setState] = props.state;

  function handleChange(event) {
    setState({ ...state, [props.name]: event.currentTarget.value });
  }

  return (
    <div className="form-group">
      <label htmlFor={`inpt-${props.name}`}>{props.label}</label>
      <input
        onChange={handleChange}
        type={props.type}
        className="form-control"
        id={`inpt-${props.name}`}
        name={props.name}
        value={state[props.name]}
      />
    </div>
  );
}

export default FormInput;
