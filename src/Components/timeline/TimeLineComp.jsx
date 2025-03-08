import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './TimeLineComp.css';

const events = [
  {
    id: 1,
    title: "EVENT TITLE",
    image: "Images/1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
    date: "2024-03-22 12:30:00",
    meetingType: "online",
    registrationPeriod: "2nd Feb - 20 Feb 2025",
  },
  {
    id: 2,
    title: "EVENT TITLE",
    image: "Images/3.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
    date: "2024-05-15 14:00:00",
    meetingType: "offline",
    registrationPeriod: "2nd Feb - 20 Feb 2025",
  },
  {
    id: 3,
    title: "EVENT TITLE",
    image: "Images/2.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
    date: "2025-02-19 16:30:00",
    meetingType: "hybrid",
    registrationPeriod: "2nd Feb - 9th Feb 2025",
  },
  {
    id: 4,
    title: "EVENT TITLE",
    image: "Images/2.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
    date: "2025-12-10 16:30:00",
    meetingType: "hybrid",
    registrationPeriod: "2nd Feb - 20 Feb 2025",
  },
  {
    id: 5,
    title: "EVENT TITLE",
    image: "Images/2.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
    date: "2025-12-10 16:30:00",
    meetingType: "hybrid",
    registrationPeriod: "2nd Feb - 20 Feb 2025",
  },
  {
    id: 6,
    title: "EVENT TITLE",
    image: "Images/2.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
    date: "2025-12-10 16:30:00",
    meetingType: "hybrid",
    registrationPeriod: "2nd Feb - 20 Feb 2025",
  },
  
];

const isEventCompleted = (eventDate) => {
  const currentDate = new Date();
  const eventDateTime = new Date(eventDate);
  return eventDateTime < currentDate;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
};

const TimelineEvent = ({ event, position, isCurrentEvent }) => {
  const navigate = useNavigate();
  const isCompleted = isEventCompleted(event.date);
  
  return (
    <div className={`relative mb-12 md:mb-24 w-full lg:w-1/2 
      ${position === 'left' ? 'lg:pr-12 lg:left-0' : 'lg:pl-12 lg:left-1/2'}
      ${isCurrentEvent ? 'scale-105 z-10' : ''}`}
    >
      {/* Timeline Dot - Centered on line */}
      <div className={`hidden md:flex absolute w-4 h-4 rounded-full transform z-10 
        timeline-dot items-center justify-center
        ${position === 'left' ? 'right-[-8px]' : 'left-[-8px]'}
        ${isCompleted ? 'bg-colPink' : 
          isCurrentEvent ? 'bg-colPink current right-[2px] w-6 h-6' : 
          'bg-white upcoming'}`} 
      >
        {/* Static dot to prevent pulse effect on the icon */}
        <div className={`absolute inset-0 rounded-full
          ${isCompleted ? 'bg-colPink' : 
            isCurrentEvent ? 'bg-colPink' : 'bg-white'}`}>
          {isCompleted && (
            <i className="fas fa-check text-white text-[10px] absolute inset-0 flex items-center justify-center"></i>
          )}
        </div>
      </div>

      {/* Date Badge */}
      <div className={`px-4 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm 
        inline-block text-white font-secFont2 transform -translate-y-2 date-badge
        ${isCompleted ? 'bg-colPink' : 'bg-colPink bg-opacity-80'}
        ${position === 'left' ? 'float-right md:mr-4' : 'float-left md:ml-4'}`}
      >
        {formatDate(event.date)}
      </div>

      {/* Clear float */}
      <div className="clear-both"></div>

      {/* Event Card */}
      <div className={`event-card bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md flex flex-col sm:flex-row mt-8 
        transition-all duration-500 ease-in-out relative
        ${isCompleted ? 'opacity-75' : ''}`}
      >
        {/* Image */}
        <div className="event-image w-full h-[150px] xs:h-[200px] sm:w-[47%] sm:h-auto relative">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between relative z-10">
          <div>
            <div className="font-primaryFont text-lg xs:text-xl sm:text-2xl lg:text-3xl mb-2 xs:mb-3 md:mb-4">
              {event.title}
            </div>
            <div className="font-secFont1 text-xs xs:text-sm sm:text-base lg:text-lg mb-2 xs:mb-3 md:mb-4 text-gray-600">
              {event.description}
            </div>
            <div className="font-secFont1 text-xs xs:text-sm sm:text-base lg:text-lg mb-2 xs:mb-3 md:mb-4">
              <p className="mb-1 xs:mb-2">
                <span className="font-semibold">Meeting: </span>
                <span className="text-gray-600">{event.meetingType}</span>
              </p>
              <p>
                <span className="font-semibold">Registration: </span>
                <span className="text-gray-600">{event.registrationPeriod}</span>
              </p>
            </div>
          </div>
          <div className="font-secFont1">
            {isCompleted ? (
              <p className="text-colPink text-sm sm:text-base font-semibold uppercase tracking-wider">
                Completed
              </p>
            ) : (
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <button className="register-btn px-3 xs:px-4 sm:px-5 lg:px-6 py-1.5 xs:py-2 
                  bg-colPink text-white rounded-full hover:bg-pink-700 transition-all duration-300 
                  ease-in-out hover:-translate-y-0.5 text-xs xs:text-sm lg:text-base uppercase tracking-wider">
                  Register
                </button>
                <button 
                  onClick={() => navigate(`/eventdetails/${event.id}`)}
                  className="px-3 xs:px-4 sm:px-5 lg:px-6 py-1.5 xs:py-2 
                  border border-colPink text-colPink rounded-full hover:bg-colPink hover:text-white 
                  transition-all duration-300 ease-in-out hover:-translate-y-0.5 
                  text-xs xs:text-sm lg:text-base uppercase tracking-wider"
                >
                  Read More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileTimelineEvent = ({ event }) => {
  const navigate = useNavigate();
  const isExpired = isEventCompleted(event.date);
  
  return (
    <div className="relative pl-12 pr-4 mb-16">
      {/* Timeline Dot */}
      <div className={`absolute w-5 h-5 ${isExpired ? 'bg-gray-400' : 'bg-white'} rounded-full transform z-10 timeline-dot mobile-timeline-dot top-0 left-0`} />

      {/* Date Badge */}
      <div className={`${isExpired ? 'bg-gray-500' : 'bg-colPink'} px-6 py-2 rounded-full text-sm z-10 -top-8 left-12 date-badge`}>
        {formatDate(event.date)}
      </div>

      {/* Event Card */}
      <div className={`event-card bg-white rounded-2xl overflow-hidden shadow-md flex flex-col ${isExpired ? 'grayscale expired-event' : ''}`}>
        <div className="event-image w-full h-[200px]">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 flex flex-col justify-between gap-4">
          <div>
            <div className="font-primaryFont text-xl mb-4">{event.title}</div>
            <div className="font-secFont1 text-sm mb-4 text-gray-600">
              {event.description}
            </div>
            <div className="font-secFont1 text-sm mb-4">
              <p className="mb-2">
                <span className="font-semibold">Meeting: </span>
                <span className="text-gray-600">{event.meetingType}</span>
              </p>
              <p>
                <span className="font-semibold">Registration: </span>
                <span className="text-gray-600">{event.registrationPeriod}</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button className="register-btn w-full px-4 py-2 bg-colPink text-white rounded-full 
              hover:bg-pink-700 transition-all duration-300 ease-in-out text-sm uppercase tracking-wider">
              Register
            </button>
            <button 
              onClick={() => navigate(`/eventdetails/${event.id}`)}
              className="w-full px-4 py-2 border border-colPink text-colPink rounded-full 
              hover:bg-colPink hover:text-white transition-all duration-300 ease-in-out 
              text-sm uppercase tracking-wider"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeLineComp = () => {
  const currentEventRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    // Find the first upcoming event
    const currentDate = new Date();
    const currentEventIndex = events.findIndex(event => {
      const eventDate = new Date(event.date);
      return eventDate >= currentDate;
    });

    // Scroll to current event with offset
    if (currentEventRef.current) {
      const yOffset = window.innerHeight / 3; // Scroll to show current event at 1/3 of viewport
      const y = currentEventRef.current.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    // Update timeline line color
    if (timelineRef.current && currentEventIndex !== -1) {
      const timelineHeight = timelineRef.current.offsetHeight;
      const eventPosition = currentEventRef.current.offsetTop;
      const percentage = (eventPosition / timelineHeight) * 100;
      
      timelineRef.current.style.background = `linear-gradient(
        to bottom,
        #dd558ed2 ${percentage+0.25}%,
        #ffffff ${percentage}% 100%
      )`;
    }
  }, []);

  return (
    <div className="bg-[url('/bg-texture.jpg')] w-full px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12 lg:py-16 min-h-screen">
      {/* Logo & Header section */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 mt-16 sm:mt-20 md:mt-24">
        {/* Logo */}
        <div className="w-48 sm:w-56 md:w-64 mb-4 sm:mb-6 md:mb-8">
          <img 
            src="/Logos/Ing_White_2025.png" 
            alt="Ingenium Logo" 
            className="w-full h-auto"
          />
        </div>

        {/* Header */}
        <div className="text-center w-full lg:max-w-[60vw] mx-auto mb-8 xs:mb-10 sm:mb-16 lg:mb-24">
          <div className="relative inline-block">
            <h1 className="font-primaryFont text-3xl xs:text-4xl sm:text-6xl lg:text-9xl
              mb-3 xs:mb-4 sm:mb-6 lg:mb-8 tracking-[0.17em] font-semibold text-white">
              TIMELINE
            </h1>
            <div className="absolute bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-colPink to-transparent" />
          </div>
          <p className="font-secFont1 text-sm xs:text-base sm:text-lg lg:text-xl 
            leading-relaxed opacity-90 text-white px-2 xs:px-4 mt-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-[1200px] mx-auto pb-8">
        {/* Timeline Line */}
        <div 
          ref={timelineRef}
          className="hidden md:block absolute left-1/2 top-0 w-1 transform -translate-x-1/2 h-full"
        />

        <div className="flex flex-col gap-6 md:gap-0">
          <AnimatePresence mode="wait" initial={false}>
            {events.map((event, index) => {
              const isCurrentEvent = !isEventCompleted(event.date) && 
                events.slice(0, index).every(e => isEventCompleted(e.date));

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  layout
                  // className="timeline-event"
                  data-last={index === events.length - 1}
                  ref={isCurrentEvent ? currentEventRef : null}
                >
                  <TimelineEvent 
                    event={event} 
                    position={index % 2 === 0 ? 'right' : 'left'}
                    isCurrentEvent={isCurrentEvent}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TimeLineComp;
