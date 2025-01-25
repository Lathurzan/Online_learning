import React, { useState } from "react";

const Feedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Feedback Button */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={handleButtonClick}
          className="bg-gradient-to-b from-blue-500 to-green-500 text-white flex items-center justify-center px-4 py-2 rounded-r-md shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          📝 Feedback
        </button>
      </div>

      {/* Feedback Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-500"
          style={{ animation: "fadeIn 0.5s ease-in-out" }}
        >
          <div
            className="bg-white rounded-lg p-8 max-w-lg w-full shadow-xl relative transform transition-transform duration-500"
            style={{ animation: "scaleIn 0.5s ease-in-out" }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              We Value Your Feedback
            </h2>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-blue-600 focus:outline-none text-gray-700"
              rows="5"
              placeholder="Let us know what you think..."
            ></textarea>
            <div className="flex justify-between mt-6">
              <button
                onClick={closeModal}
                className="text-gray-500 px-5 py-2 rounded-md hover:text-gray-700 hover:underline transition-all"
              >
                Cancel
              </button>
              <button
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-md shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default Feedback;
