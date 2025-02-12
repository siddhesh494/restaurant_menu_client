import * as React from "react";

export function Textarea({ placeholder, value, onChange }) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-lg p-2 w-full"
    />
  );
}
