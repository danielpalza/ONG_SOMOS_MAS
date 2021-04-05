import React from "react";

function CustomTextArea({ label, placeholder, onChange, value }) {
  return (
    <div className="form-group d-flex flex-column">
      <label className="text-left" htmlFor="exampleFormControlTextarea1">
        {label}:
      </label>
      <textarea
        onChange={onChange}
        value={value}
        className="form-control"
        placeholder={placeholder}
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
  );
}

export default CustomTextArea;
