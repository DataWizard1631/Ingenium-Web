import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine scroll direction and visibility
      setVisible(
        (prevScrollPos > currentScrollPos) || // Scrolling up
        currentScrollPos < 10 // At top of page
      );
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* Main Navbar */}
      <div className="bg-colPink">
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="font-primaryFont text-2xl md:text-3xl text-white hover:opacity-90 transition-opacity"
            >
              INGENIUM
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8 text-xl">
              {["Home", "Events", "Timeline", "About"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative font-secFont1 text-white group py-2"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute bottom-2 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              
              <button className="bg-white text-colPink px-6 py-2 rounded-full font-secFont1
                transition-all duration-300 hover:bg-opacity-90 active:scale-95">
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-black/95 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-[50%]' : 'translate-x-full'
        }`}
        style={{ top: '64px' }} // height of navbar
      >
        <div className="flex flex-col items-center pt-8 space-y-6 bg-[#080C18] h-screen w-[50%]">
          {["Home", "Events", "Timeline", "About"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-white text-xl font-secFont1 hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          
          <button 
            className="mt-4 bg-white text-colPink px-8 py-3 rounded-full font-secFont1
              transition-all duration-300 hover:bg-opacity-90 active:scale-95"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
