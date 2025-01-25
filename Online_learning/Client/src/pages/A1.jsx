import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion"; // Ensure `framer-motion` is installed

const A1 = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-center p-6">
        {/* Title Section */}
        <motion.h1
          className="text-4xl font-bold text-blue-800 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          A1 English Level Details and Explanation
        </motion.h1>

        {/* Introduction Section */}
        <motion.p
          className="text-lg text-gray-700 max-w-3xl mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          The A1 English level is the first level of English proficiency as defined
          by the Common European Framework of Reference for Languages (CEFR). It is
          suitable for absolute beginners who are just starting to learn English and
          lays the foundation for understanding and communicating in the language.
        </motion.p>

        {/* Details Section */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 w-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Key Features of A1 Level
          </h2>
          <ul className="list-disc text-left text-gray-600 space-y-2 ml-5">
            <li>Understand and use very simple phrases and sentences.</li>
            <li>Recognize familiar words and basic phrases when spoken clearly.</li>
            <li>Introduce oneself and others using basic vocabulary.</li>
            <li>Read and understand short, simple texts like notices or instructions.</li>
            <li>Write short sentences such as filling out forms or postcards.</li>
          </ul>
        </motion.div>

        {/* Additional Details Section */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 w-full mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Examples of A1 Level Usage
          </h2>
          <ul className="list-disc text-left text-gray-600 space-y-2 ml-5">
            <li>
              <strong>Conversations:</strong> "Hello! My name is Anna. What is your name?"
            </li>
            <li>
              <strong>Listening:</strong> Following simple instructions like, "Turn
              right at the corner."
            </li>
            <li>
              <strong>Reading:</strong> Understanding signs like, "Open 9 AM - 5 PM."
            </li>
            <li>
              <strong>Writing:</strong> Writing short emails: "Hi John, I am fine.
              How are you?"
            </li>
          </ul>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 w-full mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Watch Videos</h2>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            {/* Video 1 */}
            <div className="w-full md:w-1/2">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/QT4E1XVOsQI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
              <p className="mt-2 text-gray-600 text-sm">
                Introduction to A1 English Level Test
              </p>
            </div>

            {/* Video 2 */}
            <div className="w-full md:w-1/2">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="React Project for User Profile Management"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
              <p className="mt-2 text-gray-600 text-sm">
                React Project for User Profile Management
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default A1;
