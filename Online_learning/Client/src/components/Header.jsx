import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import logo from "../assets/logo.png";
import home_button from "../assets/home-button.png";
import { FaBars } from "react-icons/fa";
import SignIn from "./SignIn"; // Import SignIn component

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md">
      <div className="flex justify-between items-center p-4">
        <div className="logo">
          <img src={logo} alt="Logo" width="100" />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center justify-center w-full">
          <ul className="flex items-center space-x-6 justify-center">
            <li>
              <Link to="/" className="text-lg transition-colors duration-300 hover:text-gray-400">
                <img src={home_button} alt="Home" className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link to="/trainers" className="text-lg transition-colors duration-300 hover:text-gray-400">
                Trainers
              </Link>
            </li>
            <li>
              <a href="#ielts_course" className="text-lg transition-colors duration-300 hover:text-gray-400">
                IELTS Course
              </a>
            </li>
            <li>
              <a href="#score-calculator" className="text-lg transition-colors duration-300 hover:text-gray-400">
                Score Calculator
              </a>
            </li>
            <li>
              <a href="#blog" className="text-lg transition-colors duration-300 hover:text-gray-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#forum" className="text-lg transition-colors duration-300 hover:text-gray-400">
                Forum
              </a>
            </li>
            <li>
              <a href="#faq" className="text-lg transition-colors duration-300 hover:text-gray-400">
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

        {/* Mobile search and buttons container */}
        <div className="flex items-center space-x-2 md:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-32"
          />
          <button className="text-2xl text-white z-50 p-2" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>

        {/* Sign In button */}
        <button
          onClick={toggleModal}
          className="px-6 py-2 bg-[#0025DC] text-white rounded-[5px] hover:bg-blue-700 text-sm md:text-base whitespace-nowrap hidden md:block"
        >
          Sign In
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 shadow-lg bg-gradient-to-r from-blue-600 to-green-500`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-6">
          <li>
            <Link to="/" className="text-lg transition-colors duration-300 hover:text-gray-400">
              <img src={home_button} alt="Home" className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link to="/trainers" className="text-lg transition-colors duration-300 hover:text-gray-400">
              Trainers
            </Link>
          </li>
          <li>
            <a href="#ielts-course" className="text-lg transition-colors duration-300 hover:text-gray-400">
              IELTS Course
            </a>
          </li>
          <li>
            <a href="#score-calculator" className="text-lg transition-colors duration-300 hover:text-gray-400">
              Score Calculator
            </a>
          </li>
          <li>
            <a href="#blog" className="text-lg transition-colors duration-300 hover:text-gray-400">
              Blog
            </a>
          </li>
          <li>
            <a href="#forum" className="text-lg transition-colors duration-300 hover:text-gray-400">
              Forum
            </a>
          </li>
          <li>
            <a href="#faq" className="text-lg transition-colors duration-300 hover:text-gray-400">
              FAQ
            </a>
          </li>
          <li>
            <button
              onClick={toggleModal}
              className="px-6 py-2 bg-[#0025DC] text-white rounded-[8px] hover:bg-blue-700 text-sm"
            >
              Sign In
            </button>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Modal */}
      {isModalOpen && <SignIn onClose={toggleModal} />}
    </header>
  );
}

export default Header;
