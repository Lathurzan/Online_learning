import React from "react";

const Modal = ({ isOpen, title, options, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white text-blue-700 p-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 animate-scale">
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <div className="text-center">
          <p className="text-lg mb-6">Choose your test type:</p>
          <div className="flex justify-center space-x-4">
            {options.map((option, index) => (
              <button
                key={index}
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 block mx-auto bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
