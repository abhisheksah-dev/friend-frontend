import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center">
      {/* Brand or Logo */}
      <div className="text-xl font-bold">Authify</div>

      {/* Nav Links */}
      <div className="space-x-6 hidden md:block">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          Dashboard
        </a>
        <a href="#" className="hover:text-gray-300">
          About Us
        </a>
        <a href="#" className="hover:text-gray-300">
          Services
        </a>
        <a href="#" className="hover:text-gray-300">
          FAQs
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
