import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const Counter = ({ end, duration = 2000 , suffix}) => {
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

  
    return <span ref={ref}>{count}<span className=" m-0 p-0 text-colPink">{suffix}</span></span>;
  
};

export const AboutUs = () => {
  return (
    <section className="px-4 sm:px-6 md:px-[10vw] md:pt-16 md:pb-16 w-full flex flex-col gap-6 sm:gap-8 md:gap-10">
      {/* Title */}
      <div className="flex text-colPink font-secFont1 mt-6 w-fit text-2xl underline-offset-4 underline decoration-colPink/90 text-left">
        About Us
      </div>
      {/* <div className="hidden sm:flex text-white font-secFont1 w-fit px-4 py-2 justify-center items-center rounded-full text-base border-2 border-white">
        About Us
      </div> */}

      {/* Text Area */}
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Primary Text */}
        <div className="w-full md:w-1/2 md:border-r border-white/30 pr-0 md:pr-8 leading-tight">
          <img src="Logos/ing-logo.svg" alt="Ingenium Logo" className="w-[40%] mb-12 h-auto" />
          <h2 className="font-primaryFont text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold -tracking-tighter ">
            Tech <span className="ml-1">Ingenium</span>
          </h2>
        </div>

        {/* Secondary Text + Counters */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-12">
          <p className="font-secFont1 text-white text-sm sm:text-base md:text-lg leading-relaxed text-justify">
          Launched in 2016, Ingenium stands as Ahmedabad University's
          premier annual tech festival. hosted by the School of
          Engineering and Applied Sciences. This expansive event offers
          a captivating blend of innovation and learning, featuring
          dynamic workshops exploring industry trends, a thrilling
          hackathon spotlighting coding prowess.
          </p>

          {/* Counters */}
          <div className="text-white font-secFont1 grid grid-cols-[40%_60%] md:grid-cols-[20%_30%_30%_20%] gap-8 sm:gap-4 w-[90%] md:w-full mx-auto">
            {[
              { count: 18, label: "Events", suffix: "+"},
              { count: 500, label: "Impressions", suffix: "K+" },
              { count: 1500, label: "Participants", suffix: "+" },
              { count: 8, label: "Years", suffix: "+" },
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:items-center sm:items-start gap-2`}
              >
                <p className={`text-4xl sm:text-5xl md:text-6xl font-bold whitespace-nowrap`}>
                  <Counter end={item.count} suffix={item.suffix} />
                </p>
                <span className="text-white/50 text-sm sm:text-base whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};