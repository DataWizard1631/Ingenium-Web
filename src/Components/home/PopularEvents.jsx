import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import eventsData from '../../data/events.json';
import CloudinaryImage from '../../tools/CloudinaryImage';

// List of popular event IDs to display
const POPULAR_EVENT_IDS = [
  'hackathon',
  'standup-comedy',
  'escape-room',
  'hera-pheri',
];

const PopularEvents = () => {
  const [popularEvents, setPopularEvents] = useState([]);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Filter events based on the IDs in POPULAR_EVENT_IDS
    const filteredEvents = eventsData.events.filter(event => 
      POPULAR_EVENT_IDS.includes(event.id)
    );
    setPopularEvents(filteredEvents);
  }, []);

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <div className="py-16 md:py-32 px-4 md:px-8 bg-black">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-primaryFont text-white text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-12 md:mb-16"
      >
        Most Popular Events
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-[100rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
      >
        {popularEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.2 }
            }}
            className="relative overflow-hidden rounded-xl shadow-xl cursor-pointer"
            onMouseEnter={() => setHoveredEvent(event.id)}
            onMouseLeave={() => setHoveredEvent(null)}
            onClick={() => handleEventClick(event.id)}
          >
            {/* A3 Poster Style Container - A3 aspect ratio is 1:√2 (approximately 1:1.414) */}
            <div className="relative aspect-[1/1.414] overflow-hidden">
              {/* Poster Image */}
              <CloudinaryImage
                src={event.image}
                alt={event.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  hoveredEvent === event.id ? 'scale-110' : 'scale-100'
                }`}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
              
              {/* Event Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-colPink/90 font-secFont1 text-white text-sm px-4 py-2 rounded-full font-bold">
                  {event.category}
                </span>
              </div>
              
              {/* Event Content - Positioned at bottom */}
              <div className="absolute bottom-0 left-0 w-full p-5 space-y-3">
                <h3 className="font-primaryFont text-white text-xl md:text-2xl font-bold line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="flex items-center gap-2 text-white/80 text-sm font-secFont1">
                  <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                    {event.date}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm line-clamp-3 font-secFont1">
                  {event.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 font-secFont1 text-white bg-colPink hover:bg-colPink/90 px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
                >
                  View Details
                </motion.button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-colPink/20 to-transparent opacity-60" />
              <div className="absolute top-0 right-0 w-8 h-8 bg-colPink/30 rounded-bl-xl" />
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <button 
          onClick={() => navigate('/events')}
          className="px-6 py-2 text-lg bg-transparent border border-colPink text-colPink rounded-full hover:bg-colPink hover:text-white transition-all duration-300 font-secFont1"
        >
          View All Events
        </button>
      </motion.div>
    </div>
  );
};

export default PopularEvents; 