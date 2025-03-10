import React, { useState } from 'react';
import { cn } from './utils';

const categories = [
  { id: 'all', label: 'All', color: 'from-zinc-200 via-zinc-400 to-zinc-300' },
  { id: 'title', label: 'Title', color: 'from-rose-500 via-pink-500 to-purple-600' },
  { id: 'presenting', label: 'Presenting', color: 'from-violet-400 to-violet-600' },
  { id: 'platinum', label: 'Platinum', color: 'from-slate-200 to-slate-400' },
  { id: 'gold', label: 'Gold', color: 'from-amber-400 to-amber-600' },
  { id: 'fashion', label: 'Fashion', color: 'from-pink-400 to-pink-600' },
  { id: 'automobile', label: 'Automobile', color: 'from-red-400 to-red-600' },
];

export const SponsorCategorySelector = ({ activeCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeItem = categories.find(cat => cat.id === activeCategory);

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden sm:flex justify-center mb-16">
        <div className="flex items-center gap-4 p-2 bg-zinc-900/50 backdrop-blur-sm rounded-full border border-white/10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-gradient-to-r shadow-lg scale-105 text-white " + category.color
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Version - Dropdown */}
      <div className="sm:hidden relative mb-8 px-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full flex items-center justify-between px-4 py-3 rounded-xl",
            "bg-zinc-900/50 backdrop-blur-sm border border-white/10",
            "text-white font-medium transition-all duration-300",
            activeCategory === 'all' && "bg-gradient-to-r from-zinc-900/50 to-zinc-800/50"
          )}
        >
          <div className="flex items-center gap-2">
            <div className={cn(
              "w-2 h-2 rounded-full",
              `bg-gradient-to-r ${activeItem?.color}`
            )} />
            <span>{activeItem?.label || 'Select Category'}</span>
          </div>
          <svg
            className={cn(
              "w-5 h-5 transition-transform duration-200",
              isOpen ? "rotate-180" : ""
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
          <div className="absolute z-50 w-full mt-2 py-2 bg-zinc-900/95 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  onCategoryChange(category.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-2 px-4 py-3 transition-all duration-200",
                  activeCategory === category.id
                    ? cn(
                        "bg-gradient-to-r text-white",
                        category.id === 'all' ? "from-zinc-800 to-zinc-900" : "bg-white/10"
                      )
                    : "text-white/60 hover:bg-white/5 hover:text-white"
                )}
              >
                <div className={cn(
                  "w-2 h-2 rounded-full",
                  `bg-gradient-to-r ${category.color}`
                )} />
                {category.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}; 