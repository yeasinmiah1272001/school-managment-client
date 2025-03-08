// components/FormInput.jsx
import React from "react";

const FormInput = ({ label, id, placeholder, type = "text", name }) => {
  return (
    <div className="flex items-center">
      <label htmlFor={id} className="w-1/3 text-gray-800 font-medium">
        {label}:
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-2/3 p-1 bg-[#D9D9D9]/30 rounded-lg border border-indigo-500 focus:outline-none"
      />
    </div>
  );
};

export default FormInput;
