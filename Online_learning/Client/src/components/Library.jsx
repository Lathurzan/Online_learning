// Library.jsx
import React, { useState } from 'react';

const Library = () => {
  // Sample resources data (since no API is available)
  const sampleResources = [
    {
      id: 1,
      title: "Mastering IELTS Writing",
      description: "A comprehensive guide to improving your IELTS writing skills.",
      cover: "https://via.placeholder.com/300x200?text=IELTS+Writing",
    },
    {
      id: 2,
      title: "IELTS Listening Practice",
      description: "Authentic listening exercises to boost your IELTS score.",
      cover: "https://via.placeholder.com/300x200?text=IELTS+Listening",
    },
    {
      id: 3,
      title: "IELTS Vocabulary Builder",
      description: "Essential words and phrases to enhance your IELTS performance.",
      cover: "https://via.placeholder.com/300x200?text=IELTS+Vocabulary",
    },
    {
      id: 4,
      title: "Grammar for IELTS",
      description: "Learn key grammar concepts needed to excel in the IELTS test.",
      cover: "https://via.placeholder.com/300x200?text=IELTS+Grammar",
    },
    {
      id: 5,
      title: "IELTS Speaking Guide",
      description: "Tips and practice exercises to improve IELTS speaking skills.",
      cover: "https://via.placeholder.com/300x200?text=IELTS+Speaking",
    },
  ];

  const [resources] = useState(sampleResources);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter resources based on search query
  const filteredResources = resources.filter(resource =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">
          Online Library
        </h1>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search books or resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 text-blue-900"
          />
        </div>

        {filteredResources.length === 0 ? (
          <p className="text-center text-blue-600">No resources found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={resource.cover}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-blue-800">
                    {resource.title}
                  </h2>
                  <p className="text-blue-700">{resource.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;
