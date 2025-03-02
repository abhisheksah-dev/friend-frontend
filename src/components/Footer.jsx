import React from "react";
// 1) Make sure you have this image in your project, e.g. "src/assets/empower-img.png"
// 2) Update the path below to match your actual file location/name

// (Optional) If you want social icons, install react-icons: npm install react-icons
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      {/* 
        This container helps center the footer content and sets a max width 
        so it doesn't stretch too wide on large screens 
      */}
      <div className="max-w-7xl mx-auto">
        {/*
          TOP SECTION:
          - Left: "empower-img" (the graphic for EMPOWERING TRUST / VERIFYING TRUTH)
          - Right: a set of links + vertical stack of social icons
        */}
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left Side: The Empower Image */}
          <div className="mb-6 md:mb-0">
            <img
              src="/empowerImg.png"
              alt="Empowering Trust - Verifying Truth"
              className="object-contain w-64"
              // Adjust 'w-64' or other classes as needed to resize the image
            />
          </div>

          {/* Right Side: Links & Social Icons */}
          <div className="flex items-start space-x-8 md:space-x-12">
            {/* Vertical Links */}
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Authify
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Settings
                </a>
              </li>
            </ul>

            {/* Social Icons (stacked vertically) */}
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-gray-300">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/*
          BOTTOM SECTION:
          Centered copyright
        */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © 2025. All rights are reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
