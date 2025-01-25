import React from "react";
import Header from "../components/Header";

const B1 = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-center p-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">B1 UKVI English Test</h1>
        
        <p className="text-lg text-gray-700 max-w-3xl mb-8">
          The B1 English test is a Secure English Language Test (SELT) approved by the UK Home Office. 
          It is required for visa and immigration applications, such as Indefinite Leave to Remain (ILR) 
          or British Citizenship. This test evaluates your ability to communicate effectively in English 
          at an intermediate level.
        </p>

        {/* Test Overview Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Test Overview</h2>
          <ul className="list-disc text-left text-gray-600 space-y-2 ml-5">
            <li><strong>Test Name:</strong> B1 Secure English Language Test (SELT)</li>
            <li><strong>Focus Areas:</strong> Speaking and Listening</li>
            <li><strong>Level:</strong> CEFR Level B1 (Intermediate)</li>
            <li><strong>Purpose:</strong>
              <ul className="list-disc ml-5 space-y-1">
                <li>Application for Indefinite Leave to Remain (ILR)</li>
                <li>Application for British Citizenship</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Test Details Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Test Details</h2>
          <ul className="list-disc text-left text-gray-600 space-y-2 ml-5">
            <li><strong>Duration:</strong> Approximately 10 minutes</li>
            <li><strong>Format:</strong> The test focuses on conversational English, requiring you to communicate effectively in everyday situations such as introducing yourself, discussing hobbies, and talking about familiar topics.</li>
            <li><strong>Eligibility:</strong> 
              <ul className="list-disc ml-5 space-y-1">
                <li>People applying for ILR after living in the UK for a qualifying period.</li>
                <li>Applicants for British Citizenship.</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Requirements Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Requirements</h2>
          <ul className="list-disc text-left text-gray-600 space-y-2 ml-5">
            <li><strong>Documents to Bring:</strong> 
              <ul className="list-disc ml-5 space-y-1">
                <li>A valid photo ID (e.g., passport, biometric residence permit, or national ID card).</li>
                <li>Your visa or Home Office reference number (if applicable).</li>
              </ul>
            </li>
            <li><strong>Approved Test Providers:</strong> 
              <ul className="list-disc ml-5 space-y-1">
                <li>Trinity College London</li>
                <li>IELTS for UKVI</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Sample Topics Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Sample Topics</h2>
          <ul className="list-disc text-left text-gray-600 space-y-2 ml-5">
            <li>Introducing yourself and providing personal details.</li>
            <li>Describing your hobbies, interests, or work.</li>
            <li>Talking about familiar subjects such as daily routines, future plans, or family.</li>
            <li>Answering basic questions and engaging in simple discussions.</li>
          </ul>
        </div>

        {/* Preparation Tips Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Preparation Tips</h2>
          <ul className="list-disc text-left text-gray-600 space-y-2 ml-5">
            <li><strong>Practice Speaking:</strong> Work on speaking clearly and confidently about everyday topics. Practice having simple conversations in English.</li>
            <li><strong>Listening Skills:</strong> Listen to short conversations or audio clips in English and pay attention to common phrases and vocabulary.</li>
            <li><strong>Use Practice Materials:</strong> Look for B1-level English resources online, such as sample questions or mock tests.</li>
            <li><strong>Take Online Classes:</strong> Consider enrolling in online courses or tutorials that prepare you specifically for the B1 UKVI test.</li>
          </ul>
        </div>

        {/* Video Section */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Helpful Videos</h2>
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <div className="w-full md:w-1/2">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="B1 UKVI Test Preparation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
              <p className="mt-2 text-gray-600 text-sm">
                B1 UKVI Test Preparation
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <iframe
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                title="How to Improve Your Speaking Skills for B1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-md"
              ></iframe>
              <p className="mt-2 text-gray-600 text-sm">
                How to Improve Your Speaking Skills for B1
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default B1;
