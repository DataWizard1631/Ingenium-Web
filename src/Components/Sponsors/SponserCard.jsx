import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "./utils";

export const SponserCard = ({
  children,
  title,
  name,
  href,
  className,
  containerClassName,
  category = "default"
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
    <a
      className={cn(
        "relative group/pin z-50 cursor-pointer",
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
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
        >
          <div className={cn(" relative z-50 ", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} name={name} href={href} category={category} />
    </a>
  );
};

const getCategoryColors = (category) => {
  const colors = {
    presenting: {
      ring: "ring-violet-500/20",
      glow: "to-violet-500",
      stroke: "stroke-violet-400",
      dot: "bg-violet-500"
    },
    platinum: {
      ring: "ring-slate-400/20",
      glow: "to-slate-400",
      stroke: "stroke-slate-300",
      dot: "bg-slate-400"
    },
    gold: {
      ring: "ring-amber-500/20",
      glow: "to-amber-500",
      stroke: "stroke-amber-400",
      dot: "bg-amber-500"
    },
    fashion: {
      ring: "ring-pink-500/20",
      glow: "to-pink-500",
      stroke: "stroke-pink-400",
      dot: "bg-pink-500"
    },
    automobile: {
      ring: "ring-red-500/20",
      glow: "to-red-500",
      stroke: "stroke-red-400",
      dot: "bg-red-500"
    },
    default: {
      ring: "ring-white/10",
      glow: "to-cyan-500",
      stroke: "stroke-white",
      dot: "bg-cyan-500"
    }
  };
  return colors[category] || colors.default;
};

export const PinPerspective = ({ title, name, href, category = "default" }) => {
  const colors = getCategoryColors(category);
  
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex flex-col items-center justify-center">
          <div className={cn("relative flex items-center gap-2 z-10 rounded-full bg-zinc-950 py-1.5 px-4", colors.ring)}>
            <span className="relative z-20 text-white text-sm font-medium inline-block">
              Visit My Website
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={cn("h-4 w-4 transform -rotate-45", colors.stroke)}
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
          {name && (
            <div className="mt-2 text-sm text-white/80 font-medium">
              {name}
            </div>
          )}
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
          <motion.div className={cn("absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent", colors.glow, "translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]")} />
          <motion.div className={cn("absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent", colors.glow, "translate-y-[14px] w-px h-20 group-hover/pin:h-40")} />
          <motion.div className={cn("absolute right-1/2 translate-x-[1.5px] bottom-1/2", colors.dot, "translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]")} />
          <motion.div className={cn("absolute right-1/2 translate-x-[0.5px] bottom-1/2", colors.dot, "translate-y-[14px] w-[2px] h-[2px] rounded-full z-40")} />
        </>
      </div>
    </motion.div>
  );
};