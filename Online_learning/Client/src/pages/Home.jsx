import React, { useState } from "react";
import { FaCheckCircle, FaBook, FaCalendarAlt, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Modal from "../components/Modal.jsx";
import Complaints from "../components/Complaints.jsx";
import ResultsTimeline from "../components/ResultsTimeline.jsx"; // Ensure this import is correct
import ielts from "../assets/ielts.png";
import lifeskills from "../assets/lifeskills.png";
import ukvi from "../assets/ukvi.png";
import "../style/styles.css";
import BottomNav from "../components/BottomNavigationBar.jsx";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", options: [] });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleCardClick = (index) => {
    if (index === 0) {
      setModalContent({ title: "IELTS", options: ["General", "Academic"] });
    } else if (index === 1) {
      setModalContent({
        title: "UKVI",
        options: ["General UKVI", "Academic UKVI"],
      });
    } else if (index === 2) {
      setModalContent({
        title: "IELTS Life Skills",
        options: ["A1", "A2", "B1"],
      });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <section className="mt-16 bg-blue-700 text-center px-6 py-16">
        <div className="max-w-4xl bg-white text-blue-700 p-8 rounded-lg shadow-lg mx-auto">
          <h1 className="text-5xl font-bold mb-4">Online Learning</h1>
          <p className="text-xl mb-8">Your Gateway to IELTS Success!</p>
          <div className="bg-blue-500 text-white p-6 rounded-lg">
            <p className="text-lg font-semibold mb-4">Book Your IELTS Preparation Today!</p>
            <button className="bg-white text-blue-700 px-6 py-2 rounded-lg hover:bg-blue-100">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50" id="ielts_course">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {["IELTS", "UKVI", "IELTS Life Skills"].map((service, index) => (
            <div
              key={index}
              className="bg-white text-blue-700 p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              onClick={() => handleCardClick(index)}
            >
              <div className="p-4 border border-blue-700 rounded-lg">
                <img
                  src={index === 0 ? ielts : index === 1 ? ukvi : lifeskills}
                  alt={service}
                  className="mx-auto mb-6 w-32 h-20 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service}</h3>
              <p className="text-gray-600">
                {service === "IELTS"
                  ? "Get ready for your IELTS exam with expert preparation materials and practice tests."
                  : service === "UKVI"
                  ? "Specialized preparation for the UKVI IELTS exams to meet visa requirements."
                  : "Tailored materials to help you prepare for the IELTS Life Skills exams focused on visa purposes."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Options */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{modalContent.title}</h3>
            <ul className="mb-6">
              {modalContent.options.map((option, idx) => (
                <li key={idx} className="mb-2">
                  <button
                    className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 w-full text-left"
                    onClick={() => alert(`${modalContent.title} - ${option}`)}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="mt-6 block text-sm text-blue-700 underline hover:text-blue-900"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
   {/* Modal for Options */}
   {modalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {modalContent.title}
            </h3>
            <ul className="mb-6">
              {modalContent.options.map((option, idx) => (
                <li key={idx} className="mb-2">
                  <button
                    className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 w-full text-left"
                    onClick={() => alert(`${modalContent.title} - ${option}`)}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="mt-6 block text-sm text-blue-700 underline hover:text-blue-900"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Popup Window */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedService}
            </h3>
            <p className="text-gray-600 mb-6">
              Please choose the type of preparation:
            </p>
            <div className="flex justify-between">
              <button
                className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800"
                onClick={() => alert(`${selectedService} - Academic selected`)}
              >
                Academic
              </button>
              <button
                className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800"
                onClick={() => alert(`${selectedService} - General selected`)}
              >
                General
              </button>
            </div>
            <button
              className="mt-6 block text-sm text-blue-700 underline hover:text-blue-900"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Features Section */}
      <section className="bg-gradient-to-b from-blue-50 to-green-50 py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12 animate-fade-in">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="bg-gradient-to-b from-blue-100 to-green-100 p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-slide-in">
            <FaCheckCircle className="mx-auto text-green-700 mb-4 text-5xl" />
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Test Options</h3>
            <p className="text-gray-700">
              Choose from various test options that suit your needs, including online and in-person testing.
            </p>
          </div>
          <div className="bg-gradient-to-b from-blue-100 to-green-100 p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-slide-in">
            <Link to="/payment-section">
              <FaBook className="mx-auto text-green-700 mb-4 text-5xl" />
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Library Membership</h3>
              <p className="text-gray-700">
                Exclusive access to an extensive IELTS library with preparation materials and resources.
              </p>
            </Link>
          </div>
          <div className="relative">
            <div
              className="bg-gradient-to-b from-blue-100 to-green-100 p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-slide-in cursor-pointer"
              onClick={handlePopupToggle}
            >
              <FaCalendarAlt className="mx-auto text-green-700 mb-4 text-5xl" />
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Complaints Procedure</h3>
              <p className="text-gray-700">
                Our easy and transparent complaints handling process ensures your concerns are addressed.
              </p>
            </div>
            {isPopupOpen && (
              <>
                <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl overflow-y-auto z-50 p-4 transform transition duration-500">
                  <button
                    className="text-gray-500 hover:text-red-600 text-xl font-bold mb-4"
                    onClick={handlePopupToggle}
                  >
                    &times; Close
                  </button>
                  <Complaints />
                </div>
                <div
                  className="fixed inset-0 bg-black bg-opacity-30 z-40"
                  onClick={handlePopupToggle}
                ></div>
              </>
            )}
          </div>
          <div
            className="bg-gradient-to-b from-blue-100 to-green-100 p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-slide-in cursor-pointer"
            onClick={handleCardClick}
          >
            <FaChartLine className="mx-auto text-green-700 mb-4 text-5xl" />
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Results Timeline</h3>
            <p className="text-gray-700">
              Track your progress with our computer-based testing options and receive results in just 1-5 days.
            </p>
          </div>
          {/* Pop-Up Window */}
          {showPopup && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
                <button
                  className="absolute top-2 right-2 text-red-600 text-2xl font-bold"
                  onClick={closePopup}
                >
                  &times;
                </button>
                <ResultsTimeline />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Navigation Bar */}
      <BottomNav />
    </div>
  );
};

export default Home;
