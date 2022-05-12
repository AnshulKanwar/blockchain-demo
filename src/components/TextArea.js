import React from "react";

const TextArea = ({ value, onChange }) => {
  return (
    <textarea
      rows="6"
      value={value}
      onChange={onChange}
      className="bg-slate-100 w-full px-3 py-2 rounded-lg"
    />
  );
};

export default TextArea;
