import React from "react";

const Input = ({ value, onChange, type, readOnly }) => {
  return (
    <input
      className="bg-slate-100 w-full px-3 py-2 rounded-lg"
      type={type}
      readOnly={readOnly}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
