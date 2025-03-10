import React, { useEffect, useRef } from 'react';
import eventsData from '../data/events.json';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Timeline() {
  const navigate = useNavigate();
  const events = eventsData.events;
  const currentEventRef = useRef(null);

  // Helper function to parse date string like "25th March"
  const parseDate = (dateStr, timeStr) => {
    const months = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };
    
    const [day, month] = dateStr.split(' ');
    const cleanDay = day.replace(/(st|nd|rd|th)/, '');
    
    // Get current year
    const currentYear = new Date().getFullYear();
    
    // Create date object
    const date = new Date(currentYear, months[month], parseInt(cleanDay));
    
    // Parse time
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':');
    
    // Convert to 24-hour format
    let hour = parseInt(hours);
    if (period === 'PM' && hour !== 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;
    
    date.setHours(hour);
    date.setMinutes(parseInt(minutes));
    
    return date;
  };

  // Helper function to determine event status
  const getEventStatus = (dateStr, timeStr) => {
    const now = new Date();
    const eventDateTime = parseDate(dateStr, timeStr);
    
    if (eventDateTime < now) {
      return 'completed';
    } else if (eventDateTime > now) {
      return 'upcoming';
    } else {
      return 'current';
    }
  };

  // Sort events by date and time
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = parseDate(a.date, a.time);
    const dateB = parseDate(b.date, b.time);
    return dateA - dateB;
  });

  // Find the index of current/next event
  const currentEventIndex = sortedEvents.findIndex(event => {
    const eventDateTime = parseDate(event.date, event.time);
    const now = new Date();
    
    return eventDateTime >= now;
  });

  // For debugging
  console.log('Current Event Index:', currentEventIndex);

  // If all events are in the past, use the length of the array
  const progressIndex = currentEventIndex === -1 ? sortedEvents.length : currentEventIndex;

  // Add useEffect for scrolling
  useEffect(() => {
    if (currentEventIndex !== -1 && currentEventRef.current) {
      // Wait for animations to complete
      setTimeout(() => {
        currentEventRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }, 1000); // Adjust timing based on your animations
    }
  }, [currentEventIndex]);

  return (
    <div className="bg-[url('/bg-texture.jpg')] bg-repeat bg-auto min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 pt-16 sm:pt-20 md:pt-48">
        {/* Logo with Glow Effect */}
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
          className="text-center w-full lg:max-w-[60vw] mx-auto mb-8 xs:mb-10 sm:mb-16 lg:mb-24"
        >
          <div className="relative inline-block">
            <h1 className="font-primaryFont text-3xl xs:text-4xl sm:text-6xl lg:text-9xl
              mb-3 xs:mb-4 sm:mb-6 lg:mb-8 tracking-[0.17em] font-semibold text-transparent bg-clip-text bg-white">
              TIMELINE
            </h1>
            <div className="absolute bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-colPink to-transparent animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative">
          {/* Timeline Line with Progress */}
          <div className="absolute left-4 h-full w-1">
            {/* Base white line */}
            <div className="absolute inset-0 bg-white/50" />
            {/* Progress overlay */}
            <div 
              className="absolute top-0 left-0 w-full bg-colPink transition-all duration-500"
              style={{ 
                height: `${(progressIndex / sortedEvents.length) * 100 + 0.5}%`
              }} 
            />
          </div>

          {/* Events */}
          {sortedEvents.map((event, index) => {
            const eventStatus = getEventStatus(event.date, event.time);
            
            return (
              <motion.div
                key={event.id}
                ref={eventStatus === 'current' ? currentEventRef : null}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start gap-8 mb-16 group"
              >
                {/* Timeline Node with status-based styling */}
                <div className="absolute left-4 top-0 transform -translate-x-[30%] z-10">
                  {/* Base Node */}
                  <div className={`w-3 h-3 rounded-full relative ${
                    eventStatus === 'completed' ? 'bg-colPink' :
                    eventStatus === 'current' ? 'bg-colPink' :
                    'bg-white'
                  }`}>
                    {/* Current Event Animation */}
                    {eventStatus === 'current' && (
                      <>
                        <div className="absolute -inset-2 bg-colPink rounded-full animate-pulse opacity-75" />
                        <div className="absolute -inset-3 bg-colPink/30 rounded-full animate-pulse" />
                      </>
                    )}
                    
                    {/* Upcoming Event Animation */}
                    {eventStatus === 'upcoming' && (
                      <>
                        <div className="absolute -inset-2 bg-white rounded-full animate-pulse opacity-30" />
                        <div className="absolute -inset-3 bg-white/20 rounded-full animate-pulse" />
                      </>
                    )}
                  </div>
                </div>

                {/* Event Card with Date Label */}
                <div className="ml-12 w-[90%] relative">
                  {/* Date Label */}
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                    className={`px-4 py-2 rounded-full backdrop-blur-sm border 
                      hidden sm:block absolute -left-[250px] -top-4
                      ${eventStatus === 'completed' ? 'bg-gray-900/30 border-colPink/50' :
                        eventStatus === 'current' ? 'bg-colPink/20 border-colPink' :
                        'bg-white/10 border-white/20'}`}
                  >
                    <div className={`text-lg font-semibold font-secFont1 ${
                      eventStatus === 'completed' ? 'text-colPink' :
                      eventStatus === 'current' ? 'text-colPink' :
                      'text-white'
                    }`}>
                      {event.date} • {event.time}
                    </div>
                  </motion.div>

                  {/* Mobile Date Label */}
                  <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                    className={`px-4 py-2 rounded-full mb-4 backdrop-blur-sm border sm:hidden w-fit
                      ${eventStatus === 'completed' ? 'bg-gray-900/80 border-colPink/20' :
                        eventStatus === 'current' ? 'bg-colPink/20 border-colPink' :
                        'bg-white/10 border-white/20'}`}
                  >
                    <div className={`text-sm font-semibold font-secFont1 ${
                      eventStatus === 'completed' ? 'text-colPink' :
                      eventStatus === 'current' ? 'text-colPink' :
                      'text-white'
                    }`}>
                      {event.date} • {event.time}
                    </div>
                  </motion.div>

                  {/* Card */}
                  <div className={`bg-gradient-to-b from-gray-900/90 to-black/95 
                    rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl 
                    transition-all duration-300 hover:-translate-y-1 border 
                    ${eventStatus === 'completed' ? 'border-colPink/10' :
                      eventStatus === 'current' ? 'border-colPink/30' :
                      'border-white/20'}`}
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Image Section */}
                      <div className="sm:w-[35%]">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-300"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="sm:w-[65%] p-6 font-secFont1">
                        <div className="flex flex-col gap-2">
                          <h3 className="font-primaryFont text-3xl text-white transition-colors duration-300">{event.title}</h3>
                          <p className="text-gray-400 text-lg mt-2">{event.description}</p>
                          <div className="mt-4 flex flex-col sm:flex-row gap-2">
                            <button className="px-4 py-2 bg-colPink text-white rounded-full hover:bg-pink-700 transition-all duration-300 text-lg">
                              Register Now
                            </button>
                            <button 
                              onClick={() => navigate(`/event/${event.id}`)}
                              className="px-4 py-2 border border-colPink text-colPink rounded-full hover:bg-colPink hover:text-white transition-all duration-300 text-lg"
                            >
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
