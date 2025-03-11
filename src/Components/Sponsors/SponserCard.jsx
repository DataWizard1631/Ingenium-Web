import React from "react";
import { motion } from "framer-motion";
import { cn } from "./utils";

export const SponserCard = ({
  children,
  title,
  name,
  href,
  className,
  containerClassName,
  category = "default",
}) => {
  const colors = getCategoryColors(category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("relative group", containerClassName)}
    >
      <a
        href={href || "/"}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {/* Card Container */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={cn(
            "relative rounded-2xl overflow-hidden",
            "bg-gradient-to-br from-zinc-900 to-zinc-800",
            "border border-white/10 shadow-lg group-hover:shadow-xl",
            "transform transition-all duration-500"
          )}
        >
          {/* Gradient Overlay */}
          <div className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100",
            "transition-opacity duration-500",
            `bg-gradient-to-br ${colors.gradient} bg-opacity-20`
          )} />

          {/* Shine Effect */}
          <div className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-30",
            "bg-gradient-to-r from-transparent via-white to-transparent",
            "translate-x-[-100%] group-hover:translate-x-[100%]",
            "transition-transform duration-1000 ease-in-out"
          )} />

          {/* Content */}
          <div className="relative z-10">
            {children}
          </div>

          {/* Hover Effects */}
          <div className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100",
            "transition-all duration-500 pointer-events-none",
            "flex items-center justify-center bg-black/40 backdrop-blur-sm"
          )}>
            <div className={cn(
              "px-6 py-3 rounded-full",
              "bg-black/80 backdrop-blur-sm",
              "border border-white/20",
              "transform translate-y-4 group-hover:translate-y-0",
              "transition-transform duration-500",
              "flex items-center gap-2 shadow-lg"
            )}>
              <span className="text-white text-sm font-medium">Visit Website</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white transform -rotate-45 group-hover:translate-x-0.5 transition-transform"
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
        </motion.div>

        {/* Sponsor Name */}
        {/* <div className="mt-6 text-center space-y-2">
          <h3 className={cn(
            "text-xl font-semibold",
            "bg-gradient-to-r text-transparent bg-clip-text",
            colors.gradient,
            "group-hover:scale-105 transition-transform duration-500"
          )}>
            {title}
          </h3>
          <p className={cn(
            "text-sm text-white/60",
            "group-hover:text-white/90 transition-colors duration-300"
          )}>
            {colors.partnerText}
          </p>
        </div> */}
      </a>
    </motion.div>
  );
};

const getCategoryColors = (category) => {
  const colors = {
    presenting: {
      gradient: "from-violet-400 to-violet-600",
      partnerText: "Presenting Partner",
    },
    platinum: {
      gradient: "from-slate-200 to-slate-400",
      partnerText: "Platinum Partner",
    },
    gold: {
      gradient: "from-amber-400 to-amber-600",
      partnerText: "Gold Partner",
    },
    fashion: {
      gradient: "from-pink-400 to-pink-600",
      partnerText: "Fashion Partner",
    },
    automobile: {
      gradient: "from-red-400 to-red-600",
      partnerText: "Automobile Partner",
    },
    supporting: {
      gradient: "from-teal-400 to-teal-600",
      partnerText: "Supporting Partner",
    },
    default: {
      gradient: "from-white to-white/80",
      partnerText: "Partner",
    },
  };
  return colors[category] || colors.default;
};
