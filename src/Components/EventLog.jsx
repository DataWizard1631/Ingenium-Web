import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Event data structure
const eventData = {
  esports: [
    {
      id: 1,
      title: "EVENT TITLE",
      image: "/1.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
      meetingType: "online",
      registrationPeriod: "1st Feb - 15th Feb",
    },
    {
      id: 2,
      title: "EVENT TITLE",
      image: "/3.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
      meetingType: "offline",
      registrationPeriod: "5th Feb - 20th Feb",
    },
  ],
  csevents: [
    {
      id: 3,
      title: "EVENT TITLE",
      image: "/2.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
      meetingType: "hybrid",
      registrationPeriod: "10th Feb - 25th Feb",
    },
  ],
  mechevnets: [
    {
      id: 4,
      title: "EVENT TITLE",
      image: "/5.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
      meetingType: "offline",
      registrationPeriod: "15th Feb - 28th Feb",
    },
  ],
  eeeevents: [
    {
      id: 5,
      title: "EVENT TITLE",
      image:"/6.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
      meetingType: "online",
      registrationPeriod: "20th Feb - 5th Mar",
    },
  ],
  chemevents: [
    {
      id: 6,
      title: "EVENT TITLE",
      image:"/1.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
      meetingType: "online",
      registrationPeriod: "20th Feb - 5th Mar",
    },
  ],
  concert: [
    {
      id: 7,
      title: "EVENT TITLE",
      image:"/6.jpg",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet animi sapiente totam sed possimus laboriosam, rem fugiat deleniti illo voluptatem!",
      meetingType: "online",
      registrationPeriod: "20th Feb - 5th Mar",
    },
  ],
};

const categories = [
  { id: 'esports', label: 'e-sports' },
  { id: 'csevents', label: 'CS Events' },
  { id: 'mechevnets', label: 'Mech Event' },
  { id: 'eeeevents', label: 'EEE Event' },
  { id: 'chemevents', label: 'Chem Events' },
  { id: 'concert', label: 'Concert' },
];

function CardComp({ event }) {
  const navigate = useNavigate();

  return (
    <div className="w-[45vw] h-[45vh] flex bg-white rounded-lg overflow-hidden">
      {/* Image */}
      <div className="w-[47%]">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover "
        />
      </div>

      {/* Description */}
      <div className="flex flex-col flex-1 justify-between bg-white p-8">
        <div className="font-primaryFont text-3xl ">{event.title}</div>
        <div className="font-secFont1 text-[1.2em] ">
          {event.description}
        </div>
        <div className="font-secFont1 text-[1.2em]">
          <p><span className="">Meeting: </span><span>{event.meetingType}</span></p>
          <p><span className="">Registration: </span><span>{event.registrationPeriod}</span></p>
        </div>
        <div className="font-secFont1 text-[1.2em] flex gap-4">
          <button className="px-6 py-2 bg-colPink text-white rounded-full hover:bg-pink-700 transition-colors">
            Register
          </button>
          <button 
            onClick={() => navigate(`/eventdetails`)}
            className="px-6 py-2 border border-white  rounded-full hover:bg-white/10 transition-colors"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export const EventLog = () => {
  const [selectedCategory, setSelectedCategory] = useState('esports');

  return (
    <section className="w-full bg-colBlack flex flex-col justify-center gap-[4em] min-h-screen py-20">
      {/* Event Log Header */}
      <div className="flex h-[40vh] items-center flex-col justify-around mt-[8vh]">
        {/* Logo */}
        <div className='pb-10'>
          <img src="/Logos/Ing_White_2025.png" alt="" />
        </div>
        <div>
          <h2 className="text-9xl font-primaryFont text-white">EVENT LOG</h2>
        </div>
        <div>
          <p className="text-2xl font-secFont1 max-w-[57vw] text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* Card Section */}
      <div className="w-full flex flex-col items-center gap-12">
        {/* Event Selector Bars */}
        <div className="flex items-center justify-between bg-gray-200 w-[52vw] rounded-full px-[7px] py-[7px]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`text-xl font-secFont1 px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id 
                ? 'bg-colPink text-white' 
                : 'text-black'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Event Cards */}
        <div className="flex flex-col gap-8">
          <AnimatePresence mode="wait" initial={false}>
            {eventData[selectedCategory]?.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.2999,
                  ease: "easeOut"
                }}
                layout
                className="card-container"
              >
                <CardComp event={event} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
