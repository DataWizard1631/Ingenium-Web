import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import eventsData from "../../data/events.json";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import CloudinaryImage from "../../tools/CloudinaryImage";

const EventCarousel = () => {
  // Helper function to parse date strings
  const getFirstDate = (dateStr) => {
    // Extract the first date from strings like "28th march, 29th march"
    const firstDate = dateStr.split(',')[0].toLowerCase();
    
    // Remove suffixes (th, st, nd, rd)
    const cleanDate = firstDate.replace(/(st|nd|rd|th)/, '');
    
    // Create a date object for the current year
    const currentYear = new Date().getFullYear();
    const dateObj = new Date(`${cleanDate} ${currentYear}`);
    
    return dateObj;
  };

  // Sort events by date before using them
  const sortedEvents = React.useMemo(() => {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set to start of day for fair comparison

    // Filter out past events and then sort remaining events
    return [...eventsData.events]
      .filter(event => {
        const eventDate = getFirstDate(event.date);
        // If dates are equal, check the time
        if (eventDate.getTime() === currentDate.getTime()) {
          const eventTime = new Date(`1970/01/01 ${event.time}`);
          const currentTime = new Date();
          return eventTime > currentTime;
        }
        return eventDate >= currentDate;
      })
      .sort((a, b) => {
        const dateA = getFirstDate(a.date);
        const dateB = getFirstDate(b.date);

        if (dateA.getTime() !== dateB.getTime()) {
          return dateA - dateB;
        }

        // If dates are equal, compare times
        const timeA = new Date(`1970/01/01 ${a.time}`);
        const timeB = new Date(`1970/01/01 ${b.time}`);
        return timeA - timeB;
      });
  }, []);

  // Add a check for empty events
  if (sortedEvents.length === 0) {
    return (
      <div className="relative w-full bg-black py-8 sm:py-16 md:py-24 md:pb-28 overflow-hidden">
        <h2 className="text-[2.2rem] sm:text-4xl md:text-6xl font-primaryFont text-white text-center mb-8 mt-8 md:mt-8 sm:mb-16 px-4">
          Upcoming Events
        </h2>
        <p className="text-white text-center text-lg">No upcoming events at the moment.</p>
      </div>
    );
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const controls = useAnimation();
  const [slideDirection, setSlideDirection] = useState('right');

  // Initialize controls with default animation
  React.useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
  }, [activeIndex]);

  const handleNext = () => {
    setSlideDirection('right');
    setActiveIndex((prev) => (prev + 1) % sortedEvents.length);
  };

  const handlePrev = () => {
    setSlideDirection('left');
    setActiveIndex(
      (prev) => (prev - 1 + sortedEvents.length) % sortedEvents.length
    );
  };

  const handleDragEnd = (event, info) => {
    const dragDistance = info.offset.x;
    const dragThreshold = 50; // minimum distance to trigger slide change

    if (dragDistance > dragThreshold) {
      setSlideDirection('left');
      handlePrev();
    } else if (dragDistance < -dragThreshold) {
      setSlideDirection('right');
      handleNext();
    } else {
      // If drag wasn't far enough, animate back to original position
      controls.start({ x: 0 });
    }
  };

  return (
    <div className="relative w-full bg-black py-8 sm:py-16 md:py-24 md:pb-28 overflow-hidden">
      <h2 className="text-[2.2rem] sm:text-4xl md:text-6xl font-primaryFont text-white text-center mb-8 mt-8 md:mt-8 sm:mb-16 px-4">
        Upcoming Events
      </h2>

      <motion.div
        className="relative max-w-[1400px] mx-auto px-3 md:px-4 touch-pan-y"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={controls}
      >
        {/* Desktop Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors bg-white/10 p-3 rounded-lg backdrop-blur-sm"
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="hidden md:block absolute -right-12 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors bg-white/10 p-3 rounded-lg backdrop-blur-sm"
        >
          <FaArrowRight className="w-6 h-6" />
        </button>

        {/* Main Event Display */}
        <div className="relative min-h-[600px] md:h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: slideDirection === 'right' ? 200 : -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slideDirection === 'right' ? -200 : 200 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col md:flex-row gap-4 md:gap-12 bg-gradient-to-b from-gray-900/80 to-black/95 md:bg-none rounded-2xl p-3 md:p-6 shadow-xl md:shadow-none"
            >
              {/* Image Section */}
              <div className="relative w-full md:w-fit h-[200px] md:h-full rounded-xl md:rounded-2xl overflow-hidden bg-black/20">
                <CloudinaryImage
                  src={sortedEvents[activeIndex].image}
                  alt={sortedEvents[activeIndex].title}
                  className="w-full h-full object-contain md:hover:scale-105 transition-transform duration-300"
                  draggable="false"
                />
                <div className="absolute inset-0" />
              </div>

              {/* Content Section - Mobile Optimized */}
              <div className="w-full md:w-[55%] font-secFont1 text-white space-y-3 md:space-y-6 p-2 md:p-6 select-none ">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-4xl font-primaryFont leading-tight">
                    {sortedEvents[activeIndex].title}
                  </h3>
                  <div className="flex items-center gap-2 text-colPink text-sm md:text-lg pt-4">
                    <span className="bg-colPink/10 px-3 py-1 rounded-full">
                      {sortedEvents[activeIndex].date}
                      {sortedEvents[activeIndex].otherdate && <span> | {sortedEvents[activeIndex].otherdate}</span>}
                    </span>
                    {
                      sortedEvents[activeIndex].category !== "Esports" && (
                        <>
                        <span className="w-1 h-1 rounded-full bg-colPink"></span>
                          <span className="bg-colPink/10 px-3 py-1 rounded-full">
                          {sortedEvents[activeIndex].time}
                        </span>
                        </>
                      )
                    }
                  </div>
                </div>

                <p className="font-secFont1 text-gray-300 text-sm md:text-lg leading-relaxed line-clamp-3 md:line-clamp-5">
                  {sortedEvents[activeIndex].longDescription}
                </p>

                <div className="font-secFont1 space-y-2 bg-white/5 rounded-lg p-3 md:p-0 md:bg-transparent">
                  <div className="flex items-center gap-2 text-sm md:text-lg text-gray-400">
                    <p className="flex flex-wrap gap-2">
                      <span className="font-semibold text-gray-100">Contact: </span>
                      <span className="flex gap-1">
                        {sortedEvents[activeIndex].contact.map((con, index, arr) => (
                          <span key={index}>
                            {con}{index !== arr.length - 1 && ' | '}
                          </span>
                        ))}
                      </span>

                    </p>
                  </div>
                </div>
                {/* className="w-full md:w-1/2 bg-colPink text-white py-3 rounded-lg md:rounded-xl text-sm md:text-base font-semibold active:scale-95 md:hover:bg-pink-700/80 transition-all duration-300 md:transform shadow-lg shadow-pink-500/20" */}
                <div className="font-secFont1 flex flex-col gap-2 md:flex-row md:gap-4 pt-3">
                  {sortedEvents[activeIndex].registrationLink ? (
                    <a
                      href={sortedEvents[activeIndex].registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-1/2 bg-colPink text-white py-3 text-center rounded-lg md:rounded-xl text-sm md:text-base font-semibold active:scale-95 md:hover:bg-pink-700/80 transition-all duration-300 md:transform shadow-lg shadow-pink-500/20"                    >
                      Register
                    </a>
                  ) : (
                    <button
                      className="px-4 sm:px-6 py-2 bg-colPink text-white rounded-full opacity-50 cursor-not-allowed text-sm sm:text-base"
                      disabled
                    >
                      Register
                    </button>
                  )}
                  <button
                    onClick={() =>
                      navigate(`/event/${sortedEvents[activeIndex].id}`)
                    }
                    className="w-full md:w-1/2 border border-colPink text-colPink py-3 rounded-lg md:rounded-xl text-sm md:text-base font-semibold active:scale-95 md:hover:bg-colPink md:hover:text-white transition-all duration-300 md:transform "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Event Navigation Dots */}
          <div className="absolute -bottom-6 md:-bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
            {sortedEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1 md:h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-colPink w-4 md:w-6"
                    : "bg-white/50 hover:bg-white w-1 md:w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventCarousel;
