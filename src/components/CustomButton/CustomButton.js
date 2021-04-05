import React from "react";

function CustomButton({ children, onClick }) {
  return (
    <div className="row">
      <div className="col-md-4 col-lg-3">
        <button
          type="submit"
          className="btn btn-primary btn-block"
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    </div>
  );
}

export default CustomButton;
