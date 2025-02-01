import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: "EVENT TITLE",
    image: "/1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
    date: "22nd March, 12:30 PM",
    meetingType: "online",
    registrationPeriod: "2nd Feb - 20 Feb 2025",
  },
  {
    id: 2,
    title: "EVENT TITLE",
    image: "/3.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
    date: "22nd March, 12:30 PM",
    meetingType: "offline",
    registrationPeriod: "2nd Feb - 20 Feb 2025",
  },
  {
    id: 3,
    title: "EVENT TITLE",
    image: "/2.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
    date: "22nd March, 12:30 PM",
    meetingType: "hybrid",
    registrationPeriod: "2nd Feb - 20 Feb 2025",
  }
];

const TimelineEvent = ({ event, position }) => {
  const navigate = useNavigate();
  
  return (
    <div className={`relative mb-12 md:mb-24 w-full lg:w-1/2 ${position === 'left' ? 'lg:pr-12 lg:left-0' : 'lg:pl-12 lg:left-1/2'}`}>
      {/* Timeline Dot - Hidden on mobile */}
      <div className={`hidden md:block absolute w-5 h-5 bg-white rounded-full top-0 transform -translate-y-1/2 z-10
        ${position === 'left' ? 'md:right-[-10px] lg:right-[-10px]' : 'md:left-[-10px] lg:left-[-10px]'}`} 
      />

      {/* Date Badge */}
      <div className={`bg-colPink px-4 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm mb-4 md:mb-0 md:absolute md:-top-8 
        max-w-[200px] flex justify-center items-center text-white font-secFont2
        ${position === 'left' ? 
          'mx-auto md:mx-0 md:right-12 md:left-auto md:text-right' : 
          'mx-auto md:mx-0 md:left-12 md:right-auto md:text-left'}`}>
        {event.date}
      </div>

      {/* Event Card */}
      <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md flex flex-col sm:flex-row">
        {/* Image */}
        <div className="w-full h-[150px] xs:h-[200px] sm:w-[47%] sm:h-auto">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between">
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
          <div className="font-secFont1 flex flex-col sm:flex-row gap-2 xs:gap-3">
            <button className="px-3 xs:px-4 sm:px-5 lg:px-6 py-1.5 xs:py-2 bg-colPink text-white rounded-full 
              hover:bg-pink-700 transition-all duration-300 ease-in-out hover:-translate-y-0.5 
              text-xs xs:text-sm lg:text-base uppercase tracking-wider">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileTimelineEvent = ({ event }) => {
  const navigate = useNavigate();
  
  return (
    <div className="relative pl-12 pr-4 mb-16 ">
      {/* Timeline Dot */}
      <div className="absolute w-5 h-5 bg-white rounded-full left-[-10px] transform -translate-y-1/2 z-10" />

      {/* Date Badge */}
      <div className="bg-colPink px-6 py-2 rounded-full text-sm z-10 -top-8 left-12">
        {event.date} 
      </div>

      {/* Event Card */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col">
        <div className="w-full h-[200px]">
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
          <button className="w-full px-4 py-2 bg-colPink text-white rounded-full hover:bg-pink-700 transition-all duration-300 ease-in-out text-sm uppercase tracking-wider">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

const TimeLineComp = () => {
  return (
    <div className="w-full px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12 lg:py-16 min-h-screen">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 mt-16 sm:mt-20 md:mt-24">
        {/* Logo */}
        <div className="w-48 sm:w-56 md:w-64 mb-4 sm:mb-6 md:mb-8">
          <img 
            src="/Logos/Ing_White_2025.png" 
            alt="Ingenium Logo" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Header */}
      <div className="text-center w-full lg:max-w-[60vw] mx-auto mb-8 xs:mb-10 sm:mb-16 lg:mb-24">
        <h1 className="font-primaryFont text-3xl xs:text-4xl sm:text-6xl lg:text-9xl
          mb-3 xs:mb-4 sm:mb-6 lg:mb-8 tracking-[0.2em] font-semibold text-white">
          TIMELINE
        </h1>
        <p className="font-secFont1 text-sm xs:text-base sm:text-lg lg:text-xl 
          leading-relaxed opacity-90 text-white px-2 xs:px-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-[1200px] mx-auto pb-8">
        {/* Timeline Line - Hidden on mobile */}
        <div className="hidden md:block absolute md:left-[10px] lg:left-1/2 top-0 bottom-0 w-0.5 bg-white 
          lg:transform lg:-translate-x-1/2" />

        <div className="flex flex-col gap-6 md:gap-0">
          <AnimatePresence mode="wait" initial={false}>
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                layout
              >
                <TimelineEvent 
                  event={event} 
                  position={index % 2 === 0 ? 'right' : 'left'} 
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TimeLineComp;
