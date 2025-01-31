import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Timeline.css';

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
    <div className={`timeline-event ${position}`}>
      <div className="timeline-dot"></div>
      <div className="date-badge">{event.date}</div>
      <div className="event-card">
        {/* Image */}
        <div className="event-image">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="event-content">
          <div className="font-primaryFont text-xl sm:text-2xl md:text-3xl mb-4">{event.title}</div>
          <div className="font-secFont1 text-sm sm:text-base md:text-lg mb-4">
            {event.description}
          </div>
          <div className="font-secFont1 text-sm sm:text-base md:text-lg mb-4">
            <p className="mb-2">
              <span className="font-semibold">Meeting: </span>
              <span>{event.meetingType}</span>
            </p>
            <p>
              <span className="font-semibold">Registration: </span>
              <span>{event.registrationPeriod}</span>
            </p>
          </div>
          <div className="font-secFont1 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="px-4 sm:px-6 py-2 bg-colPink text-white rounded-full hover:bg-pink-700 transition-colors text-sm sm:text-base">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeLineComp = () => {
  return (
    <div className="timeline-container">
      <div className='w-full flex justify-center items-center mt-10'>
            <img src="/Logos/Ing_White_2025.png" alt="" />
      </div>
      <div className="timeline-header text-white font-primaryFont">
        <h1>TIMELINE</h1>
        <p className='font-secFont1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      
      <div className="timeline">
        <div className="timeline-line"></div>
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
  );
};

export default TimeLineComp;
