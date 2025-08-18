import React from "react";
import logo from '../../assets/logo.png'

const MaintenancePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white text-black text-center px-4">
      <div className="max-w-md bg-white/5 p-8 rounded-2xl shadow-lg">
        <img
          src={logo}
          alt="Logo"
          className="w-24 mx-auto mb-6"
        />
        <h1 className="text-2xl md:text-3xl font-medium mb-3">We’ll Be Back Soon</h1>
        <p className="text-gray-800">
          Our website is currently undergoing scheduled maintenance. <br />
          We’ll be back online shortly - thank you for your patience!
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;
