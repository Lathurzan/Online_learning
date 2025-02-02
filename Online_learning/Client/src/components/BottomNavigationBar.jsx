import React from "react";
import logo from "../assets/logo.png"; // Adjust the path to match your project structure

const BottomNavigationBar = () => {
  const navSections = [
    {
      title: "Online IELTS Learning Offer",
      content: (
        <div className="flex flex-col items-center gap-4">
          <img
            src={logo}
            alt="Online Learning Logo"
            className="w-32 h-32 object-contain transition-transform duration-500 hover:scale-110"
          />
          <p className="text-gray-700 text-center">
            Achieve your IELTS goals with flexible, high-quality online
            learning modules tailored for your success.
          </p>
        </div>
      ),
    },
    {
      title: "Google Map Location",
      content: (
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3936.2323882934566!2d80.40580877478544!3d9.400993190675976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3afe94d85ab776b9%3A0xf863f2c1147c9bd2!2sCC25%2B99R%20Rasiah%20Medical%20Stotes%2C%20Kilinochchi!3m2!1d9.4009515!2d80.4083868!5e0!3m2!1sen!2slk!4v1738426072562!5m2!1sen!2slk"
            className="w-full h-48 md:h-64 rounded-lg border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      ),
    },
    {
      title: "About Us",
      content: (
        <div className="flex flex-col items-center gap-4">
          <p className="leading-6 text-gray-700 text-center">
            Welcome to BJ Academy, your trusted partner in IELTS
            preparation. Our mission is to empower learners worldwide to
            achieve their desired IELTS band scores through accessible,
            high-quality, and personalized online education.
          </p>
        </div>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <ul className="flex flex-col items-start gap-4">
          <li>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-all duration-300"
            >
              <i className="fab fa-youtube text-xl"></i> Youtube
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition-all duration-300"
            >
              <i className="fab fa-instagram text-xl"></i> Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-500 transition-all duration-300"
            >
              <i className="fab fa-twitter text-xl"></i> Twitter
            </a>
          </li>
          <li>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-all duration-300"
            >
              <i className="fab fa-tiktok text-xl"></i> TikTok
            </a>
          </li>
          <li className="flex items-center gap-2">
            <i className="fas fa-phone text-xl text-gray-700"></i>
            <span className="text-gray-700">Phone: 701979750</span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="bg-gray-50 p-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {navSections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white shadow-lg rounded-md p-4 transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-lg font-semibold text-blue-600 mb-3 text-center">
              {section.title}
            </h2>
            <div className="text-gray-600">{section.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigationBar;
