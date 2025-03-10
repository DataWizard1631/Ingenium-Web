import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import eventsData from '../../data/events.json';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const EventCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const controls = useAnimation();

  // Initialize controls with default animation
  React.useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % eventsData.events.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + eventsData.events.length) % eventsData.events.length);
  };

  const handleDragEnd = (event, info) => {
    const dragDistance = info.offset.x;
    const dragThreshold = 50; // minimum distance to trigger slide change

    if (dragDistance > dragThreshold) {
      handlePrev();
    } else if (dragDistance < -dragThreshold) {
      handleNext();
    } else {
      // If drag wasn't far enough, animate back to original position
      controls.start({ x: 0 });
    }
  };

  return (
    <div className="relative w-full bg-black py-8 sm:py-16 md:py-24 overflow-hidden">
      <h2 className="text-[2.2rem] sm:text-4xl md:text-6xl font-primaryFont text-white text-center mb-8 mt-8 md:mt-0 sm:mb-16 px-4">
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
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col md:flex-row gap-4 md:gap-12 bg-gradient-to-b from-gray-900/80 to-black/95 md:bg-none rounded-2xl p-3 md:p-6 shadow-xl md:shadow-none"
            >
              {/* Image Section */}
              <div className="relative w-full md:w-fit h-[200px] md:h-full rounded-xl md:rounded-2xl overflow-hidden bg-black/20">
                <img 
                  src={eventsData.events[activeIndex].image}
                  alt={eventsData.events[activeIndex].title}
                  className="w-full h-full object-contain md:hover:scale-105 transition-transform duration-300"
                  draggable="false"
                />
                <div className="absolute inset-0"  />
              </div>

              {/* Content Section - Mobile Optimized */}
              <div className= "w-full md:w-[55%] font-secFont1 text-white space-y-3 md:space-y-6 p-2 md:p-6 select-none " >
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-4xl font-primaryFont leading-tight">
                    {eventsData.events[activeIndex].title}
                  </h3>
                  <div className="flex items-center gap-2 text-colPink text-sm md:text-lg pt-4">
                    <span className="bg-colPink/10 px-3 py-1 rounded-full">{eventsData.events[activeIndex].date}</span>
                    <span className="w-1 h-1 rounded-full bg-colPink"></span>
                    <span className="bg-colPink/10 px-3 py-1 rounded-full">{eventsData.events[activeIndex].time}</span>
                  </div>
                </div>

                <p className="font-secFont1 text-gray-300 text-sm md:text-lg leading-relaxed line-clamp-3 md:line-clamp-none">
                  {eventsData.events[activeIndex].description}
                </p>

                <div className="font-secFont1 space-y-2 bg-white/5 rounded-lg p-3 md:p-0 md:bg-transparent">
                  <div className="flex items-center gap-2 text-xs md:text-lg text-gray-400">
                    <span className="text-colPink font-medium">Registration Period:</span>
                    <span className="text-white">{eventsData.events[activeIndex].registrationPeriod}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-lg text-gray-400">
                    <span className="text-colPink font-medium">Meeting Type:</span>
                    <span className="text-white capitalize">{eventsData.events[activeIndex].meetingType}</span>
                  </div>
                </div>

                <div className="font-secFont1 flex flex-col gap-2 md:flex-row md:gap-4 pt-3">
                  <button className="w-full md:w-1/2 bg-colPink text-white py-3 rounded-lg md:rounded-xl text-sm md:text-base font-semibold active:scale-95 md:hover:bg-pink-700/80 transition-all duration-300 md:transform shadow-lg shadow-pink-500/20">
                    Register Now
                  </button>
                  <button 
                    onClick={() => navigate(`/eventdetails/${eventsData.events[activeIndex].id}`)}
                    className="w-full md:w-1/2 border border-colPink text-colPink py-3 rounded-lg md:rounded-xl text-sm md:text-base font-semibold active:scale-95 md:hover:bg-colPink md:hover:text-white transition-all duration-300 md:transform "
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Event Navigation Dots */}
          <div className="absolute -bottom-6 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
            {eventsData.events.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1 md:h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-colPink w-4 md:w-6' : 'bg-white/50 hover:bg-white w-1 md:w-2'
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