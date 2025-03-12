import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import eventsData from "../../data/events.json";
import CloudinaryImage from "../../tools/CloudinaryImage";

const categories = [
  { id: "all", label: "All" },
  { id: "Hackathon", label: "Hackathon" },
  { id: "CSE Events", label: "CSE Events" },
  { id: "esports", label: "E-sports" },
  { id: "mechevents", label: "Mech Event" },
  { id: "eeeevents", label: "EEE Event" },
  { id: "chemevents", label: "Chem Events" },
];

const comingSoonCategories = [
  "esports",
  "mechevents",
  "eeeevents",
  "chemevents"
];

function CardComp({ event }) {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full sm:w-[90vw] md:w-[80vw] lg:w-[45vw] min-h-[300px] sm:h-[40vh] md:h-[45vh] flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="w-full sm:w-fit h-full sm:h-full">
        <CloudinaryImage
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col flex-1 justify-between p-4 sm:p-6 md:p-8">
        <div className="font-primaryFont text-xl sm:text-2xl md:text-3xl mb-4">
          {event.title}
        </div>
        {/* display date time here */}

        <div className="font-secFont1 text-sm sm:text-base md:text-lg mb-4 line-clamp-3">
          {event.longDescription}
        </div>
        <div className="font-secFont1 text-sm sm:text-base md:text-lg mb-4">
          <p className="mb-2">
            <span className="font-semibold">Date: </span>
            <span>{event.date}</span>
          </p>
          <p className="mb-2">
            <span className="font-semibold">Time: </span>
            <span>{event.time}</span>
          </p>
          <p className="flex flex-wrap gap-2">
            <span className="font-semibold">Contact: </span>
            <span className="flex flex-col gap-1">{event.contact.map((con, index) => (
              <span key={index}>{con}</span>
            ))}</span>
          </p>
        </div>
        <div className="font-secFont1 flex sm:flex-row gap-3 sm:gap-4 lg:mb-4">
          {/* Register Button */}
          {event.registrationLink ? (
            <a
              href={event.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2 bg-colPink text-white rounded-full hover:bg-pink-700 transition-colors text-sm sm:text-base text-center"
            >
              Register
            </a>
          ) : (
            <button
              className="px-4 sm:px-6 py-2 bg-colPink text-white rounded-full opacity-50 cursor-not-allowed text-sm sm:text-base text-center"
              disabled
            >
              Register
            </button>
          )}
          <button
            onClick={() => navigate(`/event/${event.id}`)}
            className="px-4 sm:px-6 py-2 border border-colPink text-colPink rounded-full hover:bg-colPink hover:text-white transition-colors text-sm sm:text-base"
          >
            Read More
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export const EventLog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleEvents, setVisibleEvents] = useState(4); // Initial number of visible events
  const [isOpen, setIsOpen] = useState(false);

  const getAllEvents = () => {
    return eventsData.events.sort((a, b) => a.date.localeCompare(b.date));
  };

  const currentEvents = selectedCategory === "all"
    ? getAllEvents().slice(0, visibleEvents)
    : getAllEvents().filter(event => event.category === selectedCategory);

  const totalEvents = selectedCategory === "all" ? getAllEvents().length : 0;
  const hasMoreEvents = selectedCategory === "all" && visibleEvents < totalEvents;

  const handleLoadMore = () => {
    setVisibleEvents((prev) => prev + 4); // Load 4 more events
  };

  // Reset visible events when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleEvents(4);
  };

  const renderContent = () => {
    if (comingSoonCategories.includes(selectedCategory)) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center justify-center min-h-[50vh] px-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-primaryFont text-white">
              Announcement Coming Soon!
            </h3>
            <div className="h-1 w-20 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-colPink to-transparent" />
            <p className="text-lg sm:text-xl text-gray-300 font-secFont1 max-w-2xl">
              Stay tuned for exciting events in this category. We're preparing something special for you!
            </p>
          </motion.div>
        </motion.div>
      );
    }

    return (
      <motion.div 
        layout
        className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full items-center"
      >
        <AnimatePresence mode="wait">
          {currentEvents?.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2,
                ease: [0.4, 0, 0.2, 1]
              }}
              layout
              className="w-full flex justify-center px-4 sm:px-6 md:px-8"
            >
              <CardComp event={event} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section className="w-full flex flex-col justify-center gap-8 sm:gap-12 md:gap-16 min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      {/* Event Log Header */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 mt-16 sm:mt-20 md:mt-20">
        {/* Logo with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-48 sm:w-56 md:w-64 mb-4 sm:mb-6 md:mb-8 relative"
        >
          <div className="absolute inset-0 blur-md" />
          <img
            src="/Logos/Ing_White_2025.png"
            alt="Ingenium Logo"
            className="w-full h-auto relative z-10"
          />
        </motion.div>

        {/* Title with Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative inline-block"
        >
          <h1 className="font-primaryFont text-3xl xs:text-4xl sm:text-6xl lg:text-9xl mb-3 xs:mb-4 sm:mb-6 lg:mb-8 font-semibold text-white tracking-[0.17em]">
            EVENT LOG
          </h1>
          <div className="absolute -bottom-0 md:bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-colPink to-transparent" />
        </motion.div>

      </div>

      {/* Categories Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full flex flex-col items-center gap-8 sm:gap-10 md:gap-12"
      >
        {/* Desktop Categories */}
        <div className="hidden sm:flex flex-wrap justify-center gap-6 bg-gray-200/20 backdrop-blur-md rounded-full p-2">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
              onClick={() => handleCategoryChange(category.id)}
              className={`text-sm sm:text-base md:text-sm px-3 sm:px-4 md:px-6 py-2 rounded-full transition-all duration-150 flex items-center gap-2 font-[ModernAge] ${
                selectedCategory === category.id
                  ? "bg-colPink text-white shadow-lg"
                  : "text-white hover:bg-gray-300/20"
              }`}
            >
              <span>{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Categories Dropdown */}
        <div className="sm:hidden w-full max-w-[50%] mx-auto relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-2 rounded-full bg-gray-200/20 backdrop-blur-md text-white border border-white/20 focus:outline-none focus:border-colPink text-center relative font-[ModernAge]"
          >
            {categories.find((cat) => cat.id === selectedCategory)?.label}
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] rounded-lg overflow-hidden z-50">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    handleCategoryChange(category.id);
                    setIsOpen(false);
                  }}
                  className={`w-full py-2 px-4 text-center text-sm hover:bg-gray-700 transition-colors font-[ModernAge] ${
                    selectedCategory === category.id
                      ? "bg-colPink text-white"
                      : "text-white"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        {renderContent()}

        {/* Load More Button */}
        {hasMoreEvents && !comingSoonCategories.includes(selectedCategory) && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={handleLoadMore}
            className="mt-8 px-8 py-3 border-[1px] border-white text-white rounded-full hover:bg-white/20 transition-all duration-300 font-secFont1 text-lg shadow-lg hover:shadow-xl"
          >
            Load More Events
          </motion.button>
        )}
      </motion.div>
    </section>
  );
};
