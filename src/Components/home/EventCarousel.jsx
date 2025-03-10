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
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-primaryFont text-white text-center mb-8 sm:mb-16 px-4">
        Upcoming Events
      </h2>

      <motion.div 
        className="relative max-w-[1400px] mx-auto px-4 touch-pan-y"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        animate={controls}
      >
        {/* Desktop Navigation Arrows */}
        <button 
          onClick={handlePrev}
          className="hidden sm:block absolute -left-12 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors bg-white/10 p-3 rounded-lg backdrop-blur-sm"
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={handleNext}
          className="hidden sm:block absolute -right-12 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors bg-white/10 p-3 rounded-lg backdrop-blur-sm"
        >
          <FaArrowRight className="w-6 h-6" />
        </button>

        {/* Main Event Display */}
        <div className="relative min-h-[700px] sm:h-[800px] md:h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col md:flex-row gap-6 md:gap-12"
            >
              {/* Image Section */}
              <div className="relative w-full md:w-fit h-[300px] md:h-full rounded-3xl overflow-hidden">
                <img 
                  src={eventsData.events[activeIndex].image}
                  alt={eventsData.events[activeIndex].title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-[55%] text-white space-y-4 sm:space-y-6 p-4 sm:p-6 select-none">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primaryFont leading-tight">
                    {eventsData.events[activeIndex].title}
                  </h3>
                  <div className="font-secFont1 flex flex-wrap items-center gap-2 sm:gap-3 text-colPink text-lg sm:text-xl">
                    <span>{eventsData.events[activeIndex].date}</span>
                    <span>•</span>
                    <span>{eventsData.events[activeIndex].time}</span>
                  </div>
                </div>

                <p className="font-secFont1 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                  {eventsData.events[activeIndex].description}
                </p>

                <div className="font-secFont1 space-y-2 sm:space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg text-gray-400">
                    <span>Registration Period:</span>
                    <span className="text-white">{eventsData.events[activeIndex].registrationPeriod}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg text-gray-400">
                    <span>Meeting Type:</span>
                    <span className="text-white capitalize">{eventsData.events[activeIndex].meetingType}</span>
                  </div>
                </div>

                <div className="font-secFont1 flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
                  <button className="w-full sm:w-1/2 bg-colPink text-white py-3 rounded-xl text-base sm:text-lg font-semibold hover:bg-pink-700 transition-all duration-300 transform hover:scale-105">
                    Register Now
                  </button>
                  <button 
                    onClick={() => navigate(`/eventdetails/${eventsData.events[activeIndex].id}`)}
                    className="w-full sm:w-1/2 border-2 border-colPink text-colPink py-3 rounded-xl text-base sm:text-lg font-semibold hover:bg-colPink hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Event Navigation Dots */}
          <div className="absolute -bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {eventsData.events.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-colPink w-6' : 'bg-white/50 hover:bg-white'
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