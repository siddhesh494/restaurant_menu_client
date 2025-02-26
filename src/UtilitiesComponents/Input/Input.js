import * as React from "react";

export function Input({ placeholder, value, onChange, type = "text", disabled=false }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`border border-gray-300 rounded-lg py-1 px-2 w-full ${disabled ? 'cursor-not-allowed': ''}`}
    />
  );
}
