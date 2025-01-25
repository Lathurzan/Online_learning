import React from "react";
import Header from "../components/Header";
import Feedback from "../components/Feedback";
import BottomNavigationBar from "../components/BottomNavigationBar";

// Example Data for Sections
const sections = [
  {
    icon: "🎧",
    title: "Listening",
    description: "Test your ability to understand spoken English in various contexts.",
    duration: "30 minutes"
  },
  {
    icon: "📖",
    title: "Reading",
    description: "Evaluate your reading skills with academic and general texts.",
    duration: "60 minutes"
  },
  {
    icon: "✍️",
    title: "Writing",
    description: "Test your ability to express ideas clearly and coherently in writing.",
    duration: "60 minutes"
  },
  {
    icon: "🗣️",
    title: "Speaking",
    description: "Assess your ability to speak in English in everyday situations.",
    duration: "11-14 minutes"
  }
];

// Example Data for Blog Highlights
const blogHighlights = [
  {
    title: "How to Prepare for IELTS",
    whatItCovers: "Strategies for effective preparation and common mistakes to avoid.",
    whyItHelps: "This guide provides practical tips to improve your IELTS score."
  },
  {
    title: "IELTS Speaking Tips",
    whatItCovers: "Detailed speaking test strategies and common topics.",
    whyItHelps: "Learn how to tackle the speaking section with confidence and ease."
  },
  {
    title: "Writing Task 1 Strategies",
    whatItCovers: "Effective ways to approach the IELTS Writing Task 1.",
    whyItHelps: "Mastering Task 1 can significantly boost your writing score."
  }
];

const GeneralIelts = () => {
  return (
    <>
      {/* Header Section */}
      <Header />
      <Feedback  />

      <div className="bg-gray-100 min-h-screen p-6">
        {/* IELTS General Training Test Section */}
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-12 animate-fade-in-up">
          <div className="bg-blue-600 text-white p-8 text-center rounded-t-lg shadow-lg animate-fade-in-up">
            <h1 className="text-3xl font-extrabold animate-fade-in-up">IELTS General Training Test</h1>
            <p className="text-lg mt-2 animate-fade-in-up">
              For migration, training, and study below degree level.
            </p>
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 animate-fade-in-up">Test Format</h2>
            <p className="text-gray-700 mb-6 animate-fade-in-up">
              The IELTS General Training Test assesses your English proficiency through four sections: Listening, Reading, Writing, and Speaking. Below are the details:
            </p>

            {/* Enhanced Box Layout for Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:bg-blue-50 animate-fade-in-up"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-5xl">{section.icon}</span>
                    <h3 className="text-xl font-bold text-blue-600">{section.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{section.description}</p>
                  <p className="text-sm text-gray-500">Duration: {section.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* YouTube Video Section */}
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-12 p-8 animate-fade-in-up">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center animate-fade-in-up">
            Helpful IELTS Preparation Videos
          </h2>

          {/* Video 1 */}
          <div className="mb-8 animate-fade-in-up">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Video 1: IELTS Tips and Strategies</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/fv-4okrCbLA"
              title="IELTS Tips and Strategies"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="mb-8 animate-fade-in-up">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Video 2: IELTS Speaking Tips</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/knkNX-_Zp5w"
              title="IELTS Speaking Tips"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 3 */}
          <div className="mb-8 animate-fade-in-up">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Video 3: IELTS Writing Task 1 Tips</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/R_Ko29pD2fs"
              title="IELTS Writing Task 1 Tips"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 4 */}
          <div className="mb-8 animate-fade-in-up">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Video 4: IELTS Preparation for Success</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/q6ke5fEmSSU"
              title="IELTS Preparation for Success"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <BottomNavigationBar />
    </>
  );
};

export default GeneralIelts;
