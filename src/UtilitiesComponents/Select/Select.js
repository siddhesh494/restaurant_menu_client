import * as React from "react";

export function Select({ onValueChange, children }) {
  return (
    <select onChange={(e) => onValueChange(e.target.value)} className="border p-2 rounded-lg w-full">
      {children}
    </select>
  );
}

export function SelectTrigger({ children }) {
  return <div className="border p-2 rounded-lg w-full bg-white cursor-pointer">{children}</div>;
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-500">{placeholder}</span>;
}

export function SelectContent({ children }) {
  return <div className="border rounded-lg p-2 bg-white shadow-md">{children}</div>;
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
