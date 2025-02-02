import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import home_button from "../assets/home-button.png";
import { FaBars, FaUser } from "react-icons/fa";
import SignIn from "./SignIn"; // Ensure SignIn calls onLoginSuccess on successful login
import ScoreCalculator from "./ScoreCalculator"; // Import ScoreCalculator component

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScoreCalculatorOpen, setIsScoreCalculatorOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // Open Sign In modal if location state requests it.
  useEffect(() => {
    if (location.state?.openLogin) {
      setIsModalOpen(true);
    }
  }, [location.state]);

  // Update login status when the modal closes.
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [isModalOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleScoreCalculator = () => {
    setIsScoreCalculatorOpen(!isScoreCalculatorOpen);
  };

  // Callback function to handle a successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsProfileDropdownOpen(false);
    navigate("/");
  };

  // Navigate to Profile page and close the dropdown.
  const goToProfile = () => {
    setIsProfileDropdownOpen(false);
    navigate("/profile");
  };

  // Toggle dropdown when profile icon is clicked.
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md">
      <div className="flex justify-between items-center p-4 relative">
        <div className="logo">
          <img src={logo} alt="Logo" width="100" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center w-full">
          <ul className="flex items-center space-x-6 justify-center">
            <li>
              <Link
                to="/"
                className="text-lg transition-colors duration-300 hover:text-gray-400"
              >
                <img src={home_button} alt="Home" className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link
                to="/trainers"
                className="text-lg transition-colors duration-300 hover:text-gray-400"
              >
                Trainers
              </Link>
            </li>
            <li>
              <a
                href="#ielts_course"
                className="text-lg transition-colors duration-300 hover:text-gray-400"
              >
                IELTS Course
              </a>
            </li>
            <li>
              <button
                onClick={toggleScoreCalculator}
                className="text-lg transition-colors duration-300 hover:text-gray-400"
              >
                Score Calculator
              </button>
            </li>
            <li>
              <a
                href="#blog"
                className="text-lg transition-colors duration-300 hover:text-gray-400"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#forum"
                className="text-lg transition-colors duration-300 hover:text-gray-400"
              >
                Forum
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-lg transition-colors duration-300 hover:text-gray-400"
              >
                FAQ
              </a>
            </li>
          </ul>
          <div className="flex items-center mx-8">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-48 text-black"
            />
          </div>
        </nav>

        {/* Mobile Search and Buttons Container */}
        <div className="flex items-center space-x-2 md:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-32"
          />
          <button
            className="text-2xl text-white z-50 p-2"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>

        {/* Sign In Button or Profile Icon */}
        {isLoggedIn ? (
          <div className="relative">
            <button onClick={toggleProfileDropdown} className="p-2 text-white">
              <FaUser size={24} />
            </button>
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white rounded-md shadow-lg py-2 z-50">
                <button
                  onClick={goToProfile}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={toggleModal}
            className="px-6 py-2 bg-[#0025DC] text-white rounded-[5px] hover:bg-blue-700 text-sm md:text-base whitespace-nowrap hidden md:block"
          >
            Sign In
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 shadow-lg bg-gradient-to-r from-blue-600 to-green-500`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-6">
          <li>
            <Link
              to="/"
              className="text-lg transition-colors duration-300 hover:text-gray-400"
            >
              <img src={home_button} alt="Home" className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link
              to="/trainers"
              className="text-lg transition-colors duration-300 hover:text-gray-400"
            >
              Trainers
            </Link>
          </li>
          <li>
            <a
              href="#ielts-course"
              className="text-lg transition-colors duration-300 hover:text-gray-400"
            >
              IELTS Course
            </a>
          </li>
          <li>
            <button
              onClick={toggleScoreCalculator}
              className="text-lg transition-colors duration-300 hover:text-gray-400"
            >
              Score Calculator
            </button>
          </li>
          <li>
            <a
              href="#blog"
              className="text-lg transition-colors duration-300 hover:text-gray-400"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#forum"
              className="text-lg transition-colors duration-300 hover:text-gray-400"
            >
              Forum
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="text-lg transition-colors duration-300 hover:text-gray-400"
            >
              FAQ
            </a>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sign In Modal */}
      {isModalOpen && (
        <SignIn
          onClose={() => setIsModalOpen(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {/* Score Calculator Modal */}
      {isScoreCalculatorOpen && (
        <ScoreCalculator
          onClose={() => setIsScoreCalculatorOpen(false)}
          className="bg-gradient-to-r from-green-500 to-blue-600"
        />
      )}
    </header>
  );
}

export default Header;
