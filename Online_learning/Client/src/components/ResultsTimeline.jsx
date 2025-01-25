// ResultsTimeline.jsx
import React from 'react';

const ResultsTimeline = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Results Timeline</h2>
        <p className="text-gray-600 mb-8">
          Track your progress with our computer-based testing options and receive results in just 1-5 days.
        </p>

        <div className="relative">
          <div className="border-l-4 border-blue-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
          <ul className="space-y-8">
            <li className="flex flex-col items-center">
              <div className="bg-blue-500 text-white p-4 rounded-full shadow-lg">1</div>
              <p className="mt-4 text-gray-700 font-medium">Day 1: Take your test</p>
            </li>
            <li className="flex flex-col items-center">
              <div className="bg-blue-500 text-white p-4 rounded-full shadow-lg">2</div>
              <p className="mt-4 text-gray-700 font-medium">Day 2-4: Results processing</p>
            </li>
            <li className="flex flex-col items-center">
              <div className="bg-blue-500 text-white p-4 rounded-full shadow-lg">3</div>
              <p className="mt-4 text-gray-700 font-medium">Day 5: Receive your results</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ResultsTimeline;