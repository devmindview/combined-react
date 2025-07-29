import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { getAllCategories } from "../services/userServices";
import { useRef } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([])

  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCategories(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    getAllCategories().then(setCategories).catch(console.error);
  }, []);

  return (
    <header className="w-full bg-[#fdfbf7]  tracking-wide z-50">
      <div className="flex items-center justify-between px-6 py-4 md:py-6 md:px-20">
        {/* Logo */}
        <Link to={'/'} className="flex items-center">
          <img
            src={logo} // Replace with your logo
            alt="combined"
            className="w-16 md:w-20 mr-2"
          />

        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-normal text-green-950 relative">
          <Link to="/" className="hover:text-green-700">Home</Link>
          <Link to="/about" className="hover:text-green-700">About</Link>
          <Link to="/products" className="hover:text-green-700">Products</Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowCategories(!showCategories)}
              className={`hover:text-green-700 focus:outline-none transition duration-200 ${showCategories ? "text-green-700 font-semibold" : ""
                }`}
            >
              Our Categories
            </button>

            {showCategories && (
              <div className="absolute left-0 top-full mt-2 w-[300px] bg-white rounded-xl shadow-xl border border-gray-200 p-4 grid grid-cols-2 gap-3 text-sm z-50 animate-fade-in">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/products?category=${encodeURIComponent(cat.name)}`}
                    className="text-green-900 hover:text-green-600"
                    onClick={() => setShowCategories(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

        </nav>


        {/* Contact Button (desktop only) */}
        <div className="hidden lg:block">

          <Link to={'/contact'} className="bg-[#1d4607] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-green-700 transition">
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
          className={`bg-[#fdfbf7] w-3/4 sm:w-2/4 max-w-xs h-full p-6 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
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
          <nav className="space-y-5 text-green-950 font-medium text-sm">
            <Link to="/" className="block hover:text-green-700">Home</Link>
            <hr />
            <Link to="/about" className="block hover:text-green-700">About</Link>
            <hr />
            <Link to="/products" className="block hover:text-green-700">Products</Link>
            <hr />
            <Link to="#" className="block hover:text-green-700">Categories</Link>
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                className="block text-xs text-gray-600 hover:text-green-700"
                onClick={() => setMenuOpen(false)} 
              >
                {cat.name}
              </Link>
            ))}

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
