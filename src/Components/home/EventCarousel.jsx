import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import eventsData from '../../data/events.json';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const EventCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % eventsData.events.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + eventsData.events.length) % eventsData.events.length);
  };

  return (
    <div className="relative w-full bg-black py-16 md:py-24 overflow-hidden">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-primaryFont text-white text-center mb-16">
        Upcoming Events
      </h2>

      <div className="relative max-w-[1400px] mx-auto px-4">
        {/* Navigation Arrows - Moved outside */}
        <button 
          onClick={handlePrev}
          className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors bg-white/10 p-3 rounded-lg"
        >
          <FaArrowLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white transition-colors bg-white/10 p-3 rounded-lg"
        >
          <FaArrowRight size={24} />
        </button>

        {/* Main Event Display */}
        <div className="relative h-[600px] md:h-[700px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col md:flex-row gap-8 md:gap-12"
            >
              {/* Image Section */}
              <div className="relative w-full md:w-2/3 h-[300px] md:h-full rounded-3xl overflow-hidden">
                <img 
                  src={eventsData.events[activeIndex].image}
                  alt={eventsData.events[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/3 text-white space-y-6 p-4">
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-primaryFont">
                    {eventsData.events[activeIndex].title}
                  </h3>
                  <div className="flex items-center gap-3 text-colPink">
                    <span>{eventsData.events[activeIndex].date}</span>
                    <span>•</span>
                    <span>{eventsData.events[activeIndex].time}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {eventsData.events[activeIndex].description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>Registration Period:</span>
                    <span className="text-white">{eventsData.events[activeIndex].registrationPeriod}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>Meeting Type:</span>
                    <span className="text-white capitalize">{eventsData.events[activeIndex].meetingType}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-6">
                  <button className="w-full bg-colPink text-white py-3 rounded-xl text-lg font-semibold hover:bg-pink-700 transition-colors">
                    Register Now
                  </button>
                  <button 
                    onClick={() => navigate(`/eventdetails/${eventsData.events[activeIndex].id}`)}
                    className="w-full border-2 border-colPink text-colPink py-3 rounded-xl text-lg font-semibold hover:bg-colPink hover:text-white transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Event Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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
      </div>
    </div>
  );
};

export default EventCarousel; 