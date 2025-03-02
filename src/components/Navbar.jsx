import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex justify-end items-center">
      {/* Nav Links */}
      <div className="flex space-x-3 bg-gray-900 p-2 rounded-lg shadow-lg">
        <button className="bg-gray-800 text-white px-4 py-2 rounded">
          Home
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded">
          Dashboard ⌄
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded">
          About Us ⌄
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded">
          Services
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded">
          FAQs
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
