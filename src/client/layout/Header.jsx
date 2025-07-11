import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#fffaf3]  tracking-wide z-50">
      <div className="flex items-center justify-between px-6 py-4 md:py-6 lg:px-10">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logo} // Replace with your logo
            alt="combined"
            className="w-16 md:w-20 mr-2"
          />

        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-green-900">
          <Link to="/" className="hover:text-green-700">HOME</Link>
          <Link to="/about" className="hover:text-green-700">ABOUT</Link>
          <Link to="/products" className="hover:text-green-700">PRODUCTS</Link>
          <Link to="#" className="hover:text-green-700">FOR DEALERS</Link>
        </nav>

        {/* Contact Button (desktop only) */}
        <div className="hidden lg:block">

          <Link to={'/contact'} className="bg-green-800 text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-green-700 transition">
            Contact Us
          </Link>
        </div>

        {/* Hamburger (mobile only) */}
        <button onClick={() => setMenuOpen(true)} className="lg:hidden text-gray-700">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Fullscreen Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`bg-[#fdf5e6] w-3/4 sm:w-2/4 max-w-xs h-full p-6 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="mb-6 text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Links */}
          <nav className="space-y-5 text-green-900 font-semibold text-sm">
            <a href="#" className="block hover:text-green-700">HOME</a>
            <hr />
            <a href="#" className="block hover:text-green-700">ABOUT</a>
            <hr />
            <a href="#" className="block hover:text-green-700">TREATMENT</a>
            <hr />
            <a href="#" className="block hover:text-green-700">PAGES</a>
            <hr />
            <a
              href="#"
              className="inline-block bg-green-800 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition mt-4"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
