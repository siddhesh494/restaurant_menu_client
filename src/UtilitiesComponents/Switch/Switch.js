import * as React from "react";

export function Switch({ checked, onCheckedChange }) {
  return (
    <button
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out ${
        checked ? "bg-green-500" : "bg-red-500"
      }`}
      onClick={() => onCheckedChange(!checked)}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
          checked ? "translate-x-6" : ""
        }`}
      ></div>
    </button>
  );
}
