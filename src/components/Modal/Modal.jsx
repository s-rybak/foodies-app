import React from "react";

export const Modal = ({ children, isOpen, onClose }) => {
  const className = `modal${isOpen ? " modal--open" : ""}`;

  return (
    <div className={className}>
      <div className="modal__background">
        <div className="modal__window">
          <button
            className="modal__close"
            onClick={() => {
              onClose(false);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#050505"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#050505"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};
