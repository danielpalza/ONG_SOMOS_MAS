import React from 'react';

function CustomButton({ children, onClick }) {
  return (
    <div>
      <button
        type="submit"
        className="btn  btn-block"
        onClick={onClick}
        style={{ background: '#9ac9fb' }}
      >
        {children}
      </button>
    </div>
  );
}

export default CustomButton;
