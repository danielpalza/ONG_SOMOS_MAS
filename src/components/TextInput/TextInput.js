import React from "react";

function TextInput({ label, placeholder, onChange, value }) {
  return (
    <div className="form-group d-flex flex-column">
      <label className="text-left" htmlFor="exampleFormControlInput1">
        {label}:
      </label>
      <input
        type="text"
        onChange={onChange}
        value={value}
        className="form-control"
        id="exampleFormControlInput1"
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
