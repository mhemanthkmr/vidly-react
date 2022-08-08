import React from "react";

const Input = (props) => {
  const { value, name, type, onChange, label, error } = props;
  return (
    <div className="form-group mb-3">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
