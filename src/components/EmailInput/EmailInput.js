import React from "react";

function EmailInput({ onChange, value }) {
  return (
    <div className="form-group d-flex flex-column">
      <label className="text-left" htmlFor="exampleFormControlInput2">
        Email:
      </label>
      <input
        type="email"
        onChange={onChange}
        value={value}
        className="form-control"
        id="exampleFormControlInput2"
        placeholder="name@example.com"
      />
    </div>
  );
}

export default EmailInput;
