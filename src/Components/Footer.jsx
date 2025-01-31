import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

function Footer() {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">

      {/* Main Content */}
      <div className="relative z-20 w-[90%] border-t border-white/10 mx-auto px-4 md:px-8 pt-20 pb-8">

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          {/* Brand Section */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="font-['ModernAge'] text-3xl md:text-4xl mb-4">INGENIUM</h3>
            <p className="font-['OfficialBook'] text-gray-400 mb-6 max-w-md text-xl">
              Empowering innovation and creativity through technology and design. Join us in shaping the future.
            </p>
            <div className="flex space-x-4">
              {[FaTwitter, FaInstagram, FaLinkedinIn, FaGithub].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FF1F79] transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-['OfficialBook'] text-2xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Events", "Timeline", "About"].map((item) => (
                <li key={item} className="flex justify-center md:justify-start">
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-[#FF1F79] rounded-full" />
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start font-['OfficialBook']">
            <h4 className="text-2xl mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2">
                <span className="font-bold text-white flex items-center gap-2">
                  <HiLocationMarker className="text-[#FF1F79] text-xl" />
                </span>
                <span className="text-xl">123 Innovation Street, Tech City</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-2">
                <span className="font-bold text-white flex items-center gap-2">
                  <HiMail className="text-[#FF1F79] text-xl" />
                </span>
                <span className="text-xl">ingenium@ahduni.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-4">
            <p className="font-['OfficialBook'] text-gray-400 text-md text-center w-full">
              © 2025 Ingenium. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FF1F79] rounded-full filter blur-[128px] opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF1F79] rounded-full filter blur-[128px] opacity-20" />
      </div>
    </footer>
  );
}

export default Footer;
