import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        
        setCount(Math.floor(easeOutQuart * end));
        
        if (progress < duration) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [end, duration, isInView]);
  
  return <span ref={ref}>{count}<span className=" m-0 p-0 text-colPink">+</span></span>;
};

export const AboutUs = () => {
  return (
    <section className="px-4 sm:px-6 md:px-[10vw] md:pt-24 pb-16 w-full flex flex-col gap-6 sm:gap-8 md:gap-10">
      {/* Title */}
      <div className="flex sm:hidden text-colPink font-secFont1 mt-6 w-fit text-base text-left">
        About Us
      </div>
      <div className="hidden sm:flex text-white font-secFont1 w-fit px-4 py-2 justify-center items-center rounded-full text-base border-2 border-white">
        About Us
      </div>


      

      {/* Text Area */}
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Primary Text */}
        <div className="w-full md:w-1/2 md:border-r border-white/30 pr-0 md:pr-8">
          <img src="Logos/ing-logo.svg" alt="Ingenium Logo" className="w-[40%] mb-12 h-auto" />
          <h2 className="font-primaryFont text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Tech Ingenium
          </h2>
        </div>

        {/* Secondary Text + Counters */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-12">
          <p className="font-secFont1 text-white text-sm sm:text-base md:text-lg leading-relaxed">
          Launched in 2016, Ingenium stands as Ahmedabad University's
          premier annual tech festival. hosted by the School of
          Engineering and Applied Sciences. This expansive event offers
          a captivating blend of innovation and learning, featuring
          dynamic workshops exploring industry trends, a thrilling
          hackathon spotlighting coding prowess, and specialized tracks
          like Chemathon and Mechathons delving into chemistry and
          mechanical engineering. Ingenium is not merely an event; it's
          a celebration of ideas. teamwork. and the limitless potential of
          technology. Attendees can expect interactive sessions, cutting-
          edge tech exhibitions, and networking opportunities with
          industry experts. As the hub Of innovation at Ahmedabad
          University, Ingenium invites everyone to shape the future—a
          space where concepts come to life in the ever-evolving world
          of technology.
          </p>

          {/* Counters */}
          <div className="text-white font-secFont1 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { count: 18, label: "Events" },
              { count: 1500, label: "Participants" },
              { count: 8, label: "Years" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center sm:items-start gap-2">
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  <Counter end={item.count} />
                </p>
                <span className="text-white/50 text-sm sm:text-base">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};