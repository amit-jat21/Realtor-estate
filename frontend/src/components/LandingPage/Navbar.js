import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.svg" alt="Logo" className="h-8 w-48" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="home" smooth duration={500} className="text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
            HOME
          </Link>
          <Link to="services" smooth duration={500} className="text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
            SERVICES
          </Link>
          <Link to="about" smooth duration={500} className="text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
            ABOUT PROJECTS
          </Link>
          <Link to="featured" smooth duration={500} className="text-sm font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
            TESTIMONIALS
          </Link>
          <Link to="contact" smooth duration={500}>
            <button className="ml-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow text-sm font-semibold">
              CONTACT
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full h-screen bg-white flex flex-col items-center space-y-6 px-4 py-8 z-40">
          <Link onClick={toggleMenu} to="home" smooth duration={500} className="text-gray-700 hover:text-blue-600 text-lg">
            HOME
          </Link>
          <Link onClick={toggleMenu} to="services" smooth duration={500} className="text-gray-700 hover:text-blue-600 text-lg">
            SERVICES
          </Link>
          <Link onClick={toggleMenu} to="about" smooth duration={500} className="text-gray-700 hover:text-blue-600 text-lg">
            ABOUT PROJECTS
          </Link>
          <Link onClick={toggleMenu} to="featured" smooth duration={500} className="text-gray-700 hover:text-blue-600 text-lg">
            TESTIMONIALS
          </Link>
          <Link onClick={toggleMenu} to="contact" smooth duration={500} className="w-full flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded shadow text-sm font-semibold w-full">
              CONTACT
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;