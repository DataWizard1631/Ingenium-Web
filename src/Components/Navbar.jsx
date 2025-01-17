import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" fixed top-0 w-screen h-[8vh] flex p-2 items-center bg-colGray/40 backdrop-blur-lg z-50 transition-all duration-300 hover:bg-[#080C18]/90">
      {/* Logo */}
      <div className="bg-transparent h-full w-[20%] font-primaryFont text-5xl text-white flex justify-center items-center transition-transform duration-300 hover:scale-105">
        <a href="/" className="hover:opacity-80 transition-opacity">
          INGENIUM
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden ml-auto p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex h-full w-[75%] text-white text-lg font-secFont1 gap-12 items-center pl-10">
        {["Home", "Events", "Timeline", "About"].map((item) => (
          <a
            key={item}
            href={`${item.toLowerCase()}`}
            className="relative hover:text-white/80 transition-colors duration-200 group"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 top-[8vh] bg-[#080C18]/95 backdrop-blur-md transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center pt-10 space-y-8">
          {["Home", "Events", "Timeline", "About"].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-white text-xl font-secFont1 hover:text-white/80 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </NavLink>
          ))}

          <button className="bg-white text-[#080C18] border-none rounded-full px-8 py-4 hover:bg-white/90 transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>

      {/* Contact Us Button (Desktop) */}
      <div className="hidden lg:flex justify-center items-center h-full w-[15%] font-secFont1">
        <button className="bg-white text-[#080C18] border-none rounded-full px-8 py-4 hover:bg-white/90 transition-all duration-300 hover:scale-105 active:scale-95">
          Contact Us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
