import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import logo from "/Logos/ing-logo.svg"

function Footer() {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="bg-black text-white font-secFont1 relative overflow-hidden">

      {/* Main Content */}
      <div className="relative z-20 w-[90%] mx-auto px-4 sm:px-6 md:px-8 pt-16 sm:pt-20 md:pt-24 pb-8 border-t border-white/10">
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1 flex flex-col items-center sm:items-start">
            {/* <h3 className="font-['ModernAge'] text-2xl sm:text-3xl md:text-7xl mb-4">INGENIUM</h3> */}
            <img src={logo} alt="logo" className="w-36 md:w-60 mb-8" />
            <div className="flex gap-4">
              {[FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff1f79c2] transition-colors duration-300"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start m-auto">
            <h4 className="font-['OfficialBook'] text-2xl sm:text-2xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Sponsors", "Events", "Timeline", "Our team","Contact"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={item === "Home" ? "/" : item === "Our team" ? "/team" : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 text-sm sm:text-xl"
                  >
                    <span className="w-2 h-2 bg-[#FF1F79] rounded-full" />
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center sm:items-start mx-auto">
            <h4 className="font-['OfficialBook'] text-2xl sm:text-2xl mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3 text-sm sm:text-xl">
                <HiLocationMarker className="text-[#FF1F79] text-xl flex-shrink-0" />
                <span>Ahmedabad University, Ahmedabad, Gujarat</span>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-xl">
                <HiMail className="text-[#FF1F79] text-xl flex-shrink-0" />
                <span>ingenium@ahduni.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <p className="font-['OfficialBook'] text-gray-400 text-sm sm:text-xl text-center">
            © 2025 Ingenium. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background Elements - Keep as is */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-[#FF1F79] rounded-full filter blur-[128px] opacity-50 md:opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#FF1F79] rounded-full filter blur-[128px] opacity-50 md:opacity-20" />
      </div>
    </footer>
  );
}

export default Footer;
