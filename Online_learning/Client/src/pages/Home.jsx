import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaBook, FaCalendarAlt, FaChartLine } from "react-icons/fa";
import Header from "../components/Header.jsx";
import BottomNav from "../components/BottomNavigationBar.jsx";
import ResultsTimeline  from "../components/ResultsTimeline.jsx";
import ielts from "../assets/ielts.png";
import lifeskills from "../assets/lifeskills.png";
import ukvi from "../assets/ukvi.png";



const Home = () => {
  const [popupType, setPopupType] = useState(null);
  const [isLifeSkillsPopupOpen, setIsLifeSkillsPopupOpen] = useState(false);
  const [isComplaintsPopupOpen, setIsComplaintsPopupOpen] = useState(false);
  const [isResultsTimelineOpen, setIsResultsTimelineOpen] = useState(false);

  const toggleResultsTimelinePopup = () => {
    setIsResultsTimelineOpen(!isResultsTimelineOpen);
  };

  const handlePopupOpen = (type) => {
    if (type === "Life Skills") {
      setIsLifeSkillsPopupOpen(true);
    } else {
      setPopupType(type);
    }
  };

  const closePopup = () => {
    setPopupType(null);
    setIsLifeSkillsPopupOpen(false);
    setIsComplaintsPopupOpen(false);
  };

  const toggleComplaintsPopup = () => {
    setIsComplaintsPopupOpen(true);
  };

  const features = [
    {
      icon: FaCheckCircle,
      title: "Test Options",
      desc: "Choose from various test options.",
      link: "/testoption",
    },
    {
      icon: FaBook,
      title: "Library Membership",
      desc: "Exclusive IELTS library access.",
      link: "/library",
    },
    {
      icon: FaCalendarAlt,
      title: "Complaints Procedure",
      desc: "Transparent complaints handling.",
      link: "/complaints",
    },
    {
      icon: FaChartLine,
      title: "Results Timeline",
      desc: "Track your progress efficiently.",
      onClick: toggleResultsTimelinePopup,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <Header />

      {/* Hero Section */}
      <section className="mt-16 bg-blue-700 text-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl bg-white text-blue-700 p-8 rounded-lg shadow-lg mx-auto"
        >
          <h1 className="text-5xl font-bold mb-4">Online Learning</h1>
          <p className="text-xl mb-8">Your Gateway to IELTS Success!</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Book Now
          </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-gray-50" id="ielts_course">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <ServiceCard
            title="IELTS"
            image={ielts}
            description="Get ready for your IELTS exam with expert preparation materials."
            onClick={() => handlePopupOpen("IELTS")}
          />
          <ServiceCard
            title="UKVI"
            image={ukvi}
            description="Specialized preparation for UKVI IELTS exams to meet visa requirements."
            onClick={() => handlePopupOpen("UKVI")}
          />
          <ServiceCard
            title="IELTS Life Skills"
            image={lifeskills}
            description="Prepare for IELTS Life Skills exams for visa purposes."
            onClick={() => handlePopupOpen("Life Skills")}
          />
        </div>

        {/* Popups */}
        {popupType && (
          <Popup
            title={`Choose ${popupType} Type`}
            description={`Select your preferred ${popupType} exam type:`}
            options={["General", "Academic"]}
            closePopup={closePopup}
          />
        )}

        {isLifeSkillsPopupOpen && (
          <Popup
            title="Choose Life Skills Level"
            description="Select the IELTS Life Skills level you need:"
            options={["A1", "A2", "B1"]}
            closePopup={closePopup}
          />
        )}

        {isComplaintsPopupOpen && (
          <Popup
            title="Complaints Procedure"
            description="You can raise your concerns through our official procedure."
            options={["Submit Complaint"]}
            closePopup={closePopup}
          />
        )}
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-blue-50 to-green-50 py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-b from-blue-100 to-green-100 p-6 rounded-lg shadow-lg text-center cursor-pointer hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              onClick={feature.onClick}
            >
              {feature.link ? (
                <Link to={feature.link} className="block">
                  <feature.icon className="mx-auto text-green-700 mb-4 text-5xl" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-700">{feature.desc}</p>
                </Link>
              ) : (
                <div>
                  <feature.icon className="mx-auto text-green-700 mb-4 text-5xl" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-700">{feature.desc}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results Timeline Modal */}
      {isResultsTimelineOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 w-11/12 md:w-1/2 p-8 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">Results Timeline</h2>
              <button
                onClick={toggleResultsTimelinePopup}
                className="text-white text-xl p-2 bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-blue-600"
              >
                ×
              </button>
            </div>
            <ResultsTimeline />
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
};

const ServiceCard = ({ title, image, description, onClick }) => (
  <motion.div
    className="bg-white text-blue-700 p-6 rounded-lg shadow-lg text-center cursor-pointer transform hover:scale-105 hover:shadow-2xl"
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
  >
    <div className="p-4 border border-blue-700 rounded-lg">
      <img src={image} alt={title} className="mx-auto mb-6 w-32 h-20 object-cover" />
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Popup = ({ title, description, options, closePopup }) => {
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    const routeMap = {
      "General": title === "Choose UKVI Type" ? "/general-ukvi" : "/general-ielts",
      "Academic": title === "Choose UKVI Type" ? "/academic-ukvi" : "/academic-ielts",
      "A1": "/a1",
      "A2": "/a2",
      "B1": "/b1",
      "Submit Complaint": "/complaints"
    };

    routeMap[option] && navigate(routeMap[option]);
    closePopup();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex justify-center gap-4">
          {options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </motion.button>
          ))}
        </div>
        <button className="mt-6 block text-sm text-blue-700 underline hover:text-blue-900" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Home;
