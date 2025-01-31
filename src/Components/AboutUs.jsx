import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
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
  
  return <span ref={ref}>{count}+</span>;
};

export const AboutUs = () => {
  return (
    <section className="px-4 sm:px-6 md:px-[10vw] py-16 sm:py-20 md:py-24 w-full flex flex-col gap-6 sm:gap-8 md:gap-10 border-t border-white/30">
      {/* Title */}
      <div className="text-white font-secFont1 w-fit px-4 py-2 flex justify-center items-center border-2 border-white rounded-full text-sm sm:text-base">
        About Us
      </div>

      {/* Text Area */}
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Primary Text */}
        <div className="w-full md:w-1/2 md:border-r border-white/30 pr-0 md:pr-8">
          <h2 className="font-secFont1 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Lorem ipsum dolor
            <br />
            sit amet.
          </h2>
        </div>

        {/* Secondary Text + Counters */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-12">
          <p className="font-secFont1 text-white text-sm sm:text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quidem similique facere, recusandae mollitia cumque sed nostrum ad eaque tempora voluptatibus culpa voluptatem.
          </p>

          {/* Counters */}
          <div className="text-white font-secFont1 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { count: 50, label: "Events" },
              { count: 100, label: "Participants" },
              { count: 10, label: "Years" }
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