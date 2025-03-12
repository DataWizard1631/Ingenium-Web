import React, { useState } from "react";
import { cn } from "./utils";

const categories = [
  { 
    id: "all", 
    label: "All", 
    color: "from-zinc-200 via-zinc-400 to-zinc-300",
    hoverColor: "hover:from-zinc-300 hover:via-zinc-500 hover:to-zinc-400"
  },
  {
    id: "title",
    label: "Title",
    color: "from-rose-500 via-pink-500 to-purple-600",
    hoverColor: "hover:from-rose-600 hover:via-pink-600 hover:to-purple-700"
  },
  { 
    id: "platinum", 
    label: "Platinum", 
    color: "from-slate-200 to-slate-400",
    hoverColor: "hover:from-slate-300 hover:to-slate-500"
  },
  { 
    id: "gold", 
    label: "Gold", 
    color: "from-amber-400 to-amber-600",
    hoverColor: "hover:from-amber-500 hover:to-amber-700"
  },
  { 
    id: "fashion", 
    label: "Fashion", 
    color: "from-pink-400 to-pink-600",
    hoverColor: "hover:from-pink-500 hover:to-pink-700"
  },
  { 
    id: "supporting", 
    label: "Supporting", 
    color: "from-teal-400 to-teal-600",
    hoverColor: "hover:from-teal-500 hover:to-teal-700"
  }
];

export const SponsorCategorySelector = ({ activeCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeItem = categories.find((cat) => cat.id === activeCategory);

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden sm:flex justify-center mb-16">
        <div className="flex items-center gap-4 p-2.5 bg-zinc-900/50 backdrop-blur-sm rounded-full border border-white/10 shadow-lg font-[ModernAge]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-500",
                "hover:shadow-lg transform hover:-translate-y-0.5",
                activeCategory === category.id
                  ? cn(
                      "bg-gradient-to-r shadow-lg scale-105 text-white",
                      category.color,
                      "animate-gradient"
                    )
                  : cn(
                      "text-white/70 hover:text-white bg-gradient-to-r",
                      "opacity-80 hover:opacity-100",
                      category.color,
                      category.hoverColor,
                      "bg-clip-text hover:bg-clip-border"
                    )
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Version - Dropdown */}
      <div className="sm:hidden relative mb-8 px-4 font-[ModernAge]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between px-5 py-4 rounded-xl",
            "backdrop-blur-sm border shadow-lg transition-all duration-300",
            activeCategory === "all"
              ? "bg-gradient-to-r from-zinc-900/90 to-zinc-800/90 border-zinc-700/30"
              : cn(
                  "bg-gradient-to-r border-white/10",
                  activeItem?.color || "from-zinc-900/90 to-zinc-800/90"
                )
          )}
        >
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "w-2 md:w-3 h-2 md:h-3 rounded-full shadow-lg",
                `bg-white`
              )}
            />
            <span className="text-white font-medium text-lg">
              {activeItem?.label || "Select Category"}
            </span>
          </div>
          <svg
            className={cn(
              "w-6 h-6 transition-transform duration-300",
              isOpen ? "rotate-180" : "",
              "text-white/70"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-50 w-[90%] mt-2 py-2 bg-zinc-900/95 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl font-[ModernAge]">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-5 py-4",
                  "transition-all duration-300 hover:bg-white/5",
                  activeCategory === category.id
                    ? cn(
                        "bg-gradient-to-r text-white",
                        category.color,
                        "shadow-md"
                      )
                    : "text-white/70 hover:text-white"
                )}
              >
                <div
                  className={cn(
                    "w-3 h-3 rounded-full shadow-md",
                    `bg-gradient-to-r ${category.color}`
                  )}
                />
                <span className="text-lg">{category.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
