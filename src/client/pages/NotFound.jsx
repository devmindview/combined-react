import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-500 text-gray-900 rounded-lg font-medium hover:bg-green-400 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
