import React from "react";
import Header from "../components/Header";

const A2 = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-center p-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">A2 UKVI English Test</h1>
        
        <p className="text-lg text-gray-700 max-w-3xl mb-8">
          The A2 English test is a Secure English Language Test (SELT) that evaluates
          your ability to communicate in English at a basic level, particularly in
          speaking and listening. This test is typically required for individuals
          extending their visas under the Family Route after 2.5 years of residency in the UK.
        </p>

        {/* Test Details Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Test Details</h2>
          <ul className="list-disc text-left text-gray-600 space-y-2 ml-5">
            <li><strong>Duration:</strong> Approximately 7 minutes</li>
            <li><strong>Focus:</strong> Speaking and Listening</li>
            <li><strong>CEFR Level:</strong> A2 (Basic user of English)</li>
            <li><strong>Eligibility:</strong> Spouse, partner, or parent visas</li>
          </ul>
        </div>

        {/* Booking the Test Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Booking the Test</h2>
          <ul className="list-disc text-left text-gray-600 space-y-2 ml-5">
            <li><strong>Approved Test Providers:</strong> UKVI-approved SELT centers</li>
            <li><strong>Fee:</strong> £120 to £150 (varies by test center)</li>
            <li><strong>Required Documents:</strong> Valid photo ID (passport or BRP) and visa details</li>
          </ul>
        </div>

        {/* Preparation Tips Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Preparation Tips</h2>
          <ul className="list-disc text-left text-gray-600 space-y-2 ml-5">
            <li>Familiarize yourself with A2 vocabulary and grammar.</li>
            <li>Practice common speaking scenarios such as introducing yourself, talking about your routine, or discussing plans.</li>
            <li>Listen to simple English conversations and practice responding to basic questions.</li>
          </ul>

          {/* Video Section */}
          <div className="w-full mt-6">
            <iframe
              width="100%"
              height="315"
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
      </div>
    </>
  );
};

export default A2;
