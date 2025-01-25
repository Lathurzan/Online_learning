import React from "react";

const FeaturedArticles = () => {
  const articles = [
    {
      image: "https://via.placeholder.com/300",
      title: "How to successfully book an IDP IELTS test",
      category: null,
      time: null,
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Question types in the IELTS Academic Writing test",
      category: "Preparation",
      time: "5 mins read",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Question types in the IELTS Speaking test",
      category: "Pronunciation",
      time: "30s read",
    },
    {
      image: "https://via.placeholder.com/300",
      title: "Question types in the IELTS Listening test",
      category: null,
      time: null,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          <span className="text-orange-500 border-l-4 border-orange-500 pl-2">
            Featured news and articles
          </span>
        </h2>
        <button className="text-sm font-medium text-gray-700 border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-100">
          View all articles
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md overflow-hidden border hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{article.title}</h3>
              {article.category && (
                <span className="inline-block mt-2 text-sm text-blue-500 bg-blue-100 px-2 py-1 rounded-full">
                  {article.category}
                </span>
              )}
              {article.time && (
                <p className="mt-2 text-sm text-gray-600">{article.time}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
