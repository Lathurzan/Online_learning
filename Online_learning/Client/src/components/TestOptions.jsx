import React from 'react';

const TestOptions = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Test Options</h2>
        <p className="text-center text-gray-600 mb-12">
          Choose from various test options that suit your needs, including online and in-person testing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Online Testing Option */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Online Testing</h3>
            <p className="text-gray-600 mb-4">
              Take the test from the comfort of your home with our secure online platform.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
          
          {/* In-Person Testing Option */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">In-Person Testing</h3>
            <p className="text-gray-600 mb-4">
              Visit one of our authorized testing centers for an in-person experience.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestOptions;
