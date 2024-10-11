import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleStorageChange = () => {
      setUsername(localStorage.getItem("username"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-200 transition duration-300">
            Feynman Board
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {username && (
            <Link to="/dashboard" className="hover:text-gray-200 transition duration-300">
              Dashboard
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center p-2"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} mt-2`}>
        {username && (
          <Link
            to="/dashboard"
            className="block px-4 py-2 text-white hover:bg-blue-700 transition duration-300"
            onClick={toggleMenu}
          >
            Dashboard
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
