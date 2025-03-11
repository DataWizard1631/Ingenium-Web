import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "./utils";

export const TitleSponserCard = ({
  children,
  title,
  name,
  href,
  className,
  containerClassName
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div className="relative">
      {/* Desktop Version with Pin Effect */}
      <a
        className={cn(
          "relative group/pin z-50 cursor-pointer min-h-[400px] sm:min-h-[500px] hidden sm:block",
          containerClassName
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        href={href || "/"}
      >
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0deg)",
          }}
          className="w-full absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            style={{
              transform: transform,
            }}
            className="w-full absolute left-1/2 top-1/2 flex flex-col sm:flex-row rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-gradient-to-br from-zinc-900 to-zinc-800 group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
          >
            {/* Image Section  */}
            <div className="w-full sm:w-1/3 h-48 sm:h-full bg-black">
              {children}
            </div>

            {/* Content Section*/}
            <div className="w-full sm:w-2/3 p-4 sm:p-8 bg-gradient-to-l from-black/90 via-black/70 to-transparent backdrop-blur-sm flex flex-col justify-between">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-xl sm:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 font-primaryFont">
                    {name || "Pyramid Overseas Education Consultants"}
                  </h2>
                  <p className="text-lg sm:text-xl xl:text-2xl text-colPink font-semibold font-secFont1">
                    Empowering Global Careers Since 2003
                  </p>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-secFont1">
                  Pyramid Overseas Education Consultants, a trusted name in overseas education, is proud to be the Title Sponsor of Ingenium 2024. With over two decades of expertise, we have been guiding students towards achieving their dreams of studying abroad in countries like the USA, UK, Canada, Australia, New Zealand, France, Germany, Ireland, Dubai and beyond.
                </p>
              </div>

              {/* Website Link */}
              <div className="mt-4 sm:mt-6 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-white/10 gap-2 sm:gap-4">
                <span className="text-colPink text-sm sm:text-base font-secFont1">
                  For more Visit our site:
                </span>
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-colPink transition-colors duration-300 font-secFont1 text-sm sm:text-base break-all sm:break-normal"
                >
                  {href?.replace('https://', '').replace('http://', '')}
                </a>
              </div>
            </div>
          </div>
        </div>
        <PinPerspective title={title} href={href} />
      </a>

      {/* Mobile Version */}
      <div className="block sm:hidden">
        <div className="rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-gradient-to-br from-zinc-900 to-zinc-800 overflow-hidden">
          {/* Image Section */}
          <div className="w-full h-48 bg-black">
            {children}
          </div>

          {/* Content Section */}
          <div className="p-4 bg-gradient-to-b from-black/90 via-black/70 to-transparent">
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold text-white mb-2 font-primaryFont">
                  {name || "Pyramid Overseas Education Consultants"}
                </h2>
                <p className="text-lg text-colPink font-semibold font-secFont1">
                  Empowering Global Careers Since 2003
                </p>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed font-secFont1">
                Pyramid Overseas Education Consultants, a trusted name in overseas education, is proud to be the Title Sponsor of Ingenium 2024.
              </p>

              <a
                href={href || "/"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-colPink/10 text-colPink border border-colPink/20 hover:bg-colPink/20 transition-colors w-full justify-center"
              >
                Visit Website
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transform -rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PinPerspective = ({ title, href }) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex flex-col items-center justify-center">
          <div
            className="relative flex items-center gap-2 z-10 rounded-full bg-zinc-950 py-1.5 px-4 ring-1 ring-colPink/10"
          >
            <span className="relative z-20 text-white text-sm font-medium inline-block">
              Visit My Website
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transform -rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-colPink translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-colPink translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-colPink translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-colPink translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};