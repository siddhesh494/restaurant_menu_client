import * as React from "react";

export const Dialog = ({ open, onOpenChange, children }) => {
  return (
    open && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="relative bg-white rounded-lg shadow-xl p-1 w-full max-w-md">
          {children}
          <button className="absolute top-2 right-2 text-gray-500" onClick={() => onOpenChange(false)}>
            &times;
          </button>
        </div>
      </div>
    )
  );
};

export const DialogContent = ({ className, children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

export const DialogHeader = ({ children }) => (
  <div className="border-b pb-2 mb-4">{children}</div>
);

export const DialogTitle = ({ children }) => (
  <h2 className="text-lg font-semibold">{children}</h2>
);

export const DialogDescription = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);