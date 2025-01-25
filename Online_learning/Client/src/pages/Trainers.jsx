import React from "react";

const Trainers = () => {
  // Sample trainers data
  const trainers = [
    {
      id: 1,
      name: "John Doe",
      photo: "https://via.placeholder.com/150", // Replace with actual image URL
      bio: "John is a certified IELTS trainer with 10 years of experience.",
    },
    {
      id: 2,
      name: "Jane Smith",
      photo: "https://via.placeholder.com/150", // Replace with actual image URL
      bio: "Jane specializes in speaking and writing modules of IELTS.",
    },
    {
      id: 3,
      name: "Emily Johnson",
      photo: "https://via.placeholder.com/150", // Replace with actual image URL
      bio: "Emily focuses on helping students achieve their target band scores.",
    },
  ];

  // Sample videos
  const videos = [
    {
      id: 1,
      title: "IELTS Preparation Tips",
      url: "https://www.youtube.com/embed/abc123", // Replace with actual video URL
    },
    {
      id: 2,
      title: "Improve Your Speaking Skills",
      url: "https://www.youtube.com/embed/def456", // Replace with actual video URL
    },
    {
      id: 3,
      title: "Mastering IELTS Writing",
      url: "https://www.youtube.com/embed/ghi789", // Replace with actual video URL
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      {/* Trainers Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Meet Our Trainers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform duration-500 hover:scale-105"
            >
              <img
                src={trainer.photo}
                alt={trainer.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {trainer.name}
              </h3>
              <p className="text-gray-600 text-center mt-2">{trainer.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Section */}
      <div>
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Training Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <iframe
                title={video.title}
                src={video.url}
                width="100%"
                height="200"
                className="rounded-lg"
                allowFullScreen
              ></iframe>
              <h3 className="text-lg font-semibold text-gray-800 mt-4">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
