import React from "react";
import Header from "../components/Header";
import Feedback from "../components/Feedback";

const AcademicIelts = () => {
  const blogHighlights = [
    {
      title: "Mastering IELTS Listening",
      whatItCovers: "Detailed strategies and practice tips to enhance listening skills.",
      whyItHelps: "Prepares candidates to handle diverse accents, question types, and audio challenges.",
    },
    {
      title: "Vocabulary for IELTS",
      whatItCovers: "A curated list of essential words, their meanings, and practical usage examples.",
      whyItHelps: "Enriches vocabulary, which is crucial for all four modules of the IELTS exam.",
    },
    {
      title: "Understanding IELTS Exam Format",
      whatItCovers: "A breakdown of the exam structure—Listening, Reading, Writing, and Speaking.",
      whyItHelps: "Provides clarity on what to expect, enabling better preparation and time management.",
    },
    {
      title: "Punctuation in IELTS",
      whatItCovers: "The role of proper punctuation in writing and its impact on scores.",
      whyItHelps: "Helps candidates avoid grammatical mistakes that could lower their scores.",
    },
    {
      title: "Proven Tips for Success",
      whatItCovers: "Expert advice and tested strategies for achieving high scores.",
      whyItHelps: "Boosts confidence and performance with actionable insights.",
    },
    {
      title: "Regular IELTS Practice Tests",
      whatItCovers: "Importance of practice tests and how they simulate the real exam experience.",
      whyItHelps: "Improves familiarity with the exam, enhances time management, and identifies weaknesses.",
    },
    {
      title: "Avoiding Common IELTS Mistakes",
      whatItCovers: "Common errors made by candidates and how to prevent them.",
      whyItHelps: "Enables test-takers to avoid pitfalls and secure a better band score.",
    },
  ];

  const sections = [
    {
      title: "Listening",
      description: "Hone your skills for different accents, question types, and audio challenges.",
      icon: "🎧",
      duration: "30 minutes",
    },
    {
      title: "Reading",
      description: "Master comprehension and interpretation of academic passages.",
      icon: "📖",
      duration: "60 minutes",
    },
    {
      title: "Writing",
      description: "Learn to present ideas logically and cohesively.",
      icon: "✍️",
      duration: "60 minutes",
    },
    {
      title: "Speaking",
      description: "Enhance fluency and confidence in conversations.",
      icon: "💬",
      duration: "11–14 minutes",
    },
  ];

  return (
    <>
      <Header />
      <Feedback />

      <div className="bg-gray-100 min-h-screen p-6">
        {/* IELTS Academic Training Test Section */}
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-12 animate-fade-in">
          <div className="bg-blue-600 text-white p-6 text-center">
            <h1 className="text-3xl font-bold">IELTS Academic Training Test</h1>
            <p className="text-lg mt-2">
              For migration, training, and study below degree level.
            </p>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Test Format</h2>
            <p className="text-gray-700 mb-6">
              The IELTS Academic Training Test assesses your English proficiency through four sections: Listening, Reading, Writing, and Speaking. Below are the details:
            </p>

            {/* Enhanced Box Layout for Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition-transform duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-4xl">{section.icon}</span>
                    <h3 className="text-xl font-bold text-blue-600">{section.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{section.description}</p>
                  <p className="text-sm text-gray-500">Duration: {section.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* IELTS Focus Blog Section */}
        <div className="container mx-auto py-16 px-6">
          <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">
            IELTS Focus Blog
          </h1>
          <p className="text-lg text-center mb-12 text-gray-700 animate-fade-in">
            A wealth of resources to help you succeed in your IELTS preparation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                  {highlight.title}
                </h2>
                <h3 className="text-lg font-medium text-green-600 mb-2">
                  What It Covers:
                </h3>
                <p className="text-gray-700 mb-4">{highlight.whatItCovers}</p>
                <h3 className="text-lg font-medium text-green-600 mb-2">
                  Why It Helps:
                </h3>
                <p className="text-gray-700">{highlight.whyItHelps}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicIelts;
