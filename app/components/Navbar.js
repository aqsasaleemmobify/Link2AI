"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/images/main_logo.png" width="70" height="60" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/pages/About" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600">
            How It Works
          </Link>
          <Link href="/pages/DeveloperSubmissionPage" className="text-gray-700 hover:text-blue-600">
            Developers
          </Link>
          <Link href="/login" className="border border-blue-600 text-blue-600 py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white">
            🔒 Login
          </Link>
        </nav>

        {/* Burger Menu for Mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
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
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white shadow-md px-4 py-4 space-y-4`}
      >
        <Link
          href="/pages/About"
          className="block text-gray-700 hover:text-blue-600"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          href="#how-it-works"
          className="block text-gray-700 hover:text-blue-600"
          onClick={toggleMenu}
        >
          How It Works
        </Link>
        <Link
          href="/pages/DeveloperSubmissionPage"
          className="block text-gray-700 hover:text-blue-600"
          onClick={toggleMenu}
        >
          Developers
        </Link>
        <Link
          href="/login"
          className="block border border-blue-600 text-blue-600 py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white"
          onClick={toggleMenu}
        >
          🔒 Login
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
