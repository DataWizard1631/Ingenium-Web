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
    return(
        <section className="px-[10vw] pt-[100px] w-full flex flex-col gap-5 border-t-[1px] border-white border-opacity-30">
            {/* Title */}
            <div className=" text-white font-secFont1 w-[9rem] px-4 py-2 flex justify-center items-center border-2 border-white rounded-full " >
                About Us
            </div>

            {/* Text Area*/}
            <div className=" w-full flex flex-row ">
                {/* Primary Text */}
                <div className="border-r-[1px] border-r-white w-[50%] font-secFont1 text-white text-6xl">
                    Lorem ipsum dolor 
                    <br/>
                    sit amet.
                </div>

                {/* Secondary Text + counters */}
                <div className="w-[50%] flex flex-col pl-8 gap-[50px]">
                    <div className="w-full font-secFont1 text-white text-[0.98rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quidem similique facere, recusandae mollitia cumque sed nostrum ad eaque tempora voluptatibus culpa voluptatem. Est nobis earum dolorem maxime quod minima saepe cum delectus ipsam nulla ipsa, nemo quis dicta, soluta odio omnis, molestiae quo. Velit nisi maiores deleniti.
                    </div>

                    {/* Counters */}
                    <div className="text-white font-secFont1 w-full flex justify-between items-center">
                        <div className="flex flex-col gap-[5px] ">
                            <p className="text-6xl">
                                <Counter end={50} />
                            </p>
                            <span className="opacity-50">Events</span>
                        </div>
                        <div className="flex flex-col gap-[5px] ">
                            <p className="text-6xl">
                                <Counter end={100} />
                            </p>
                            <span className="opacity-50">Events</span>
                        </div>
                        <div className="flex flex-col gap-[5px] ">
                            <p className="text-6xl">
                                <Counter end={10} />
                            </p>
                            <span className="opacity-50">Events</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}