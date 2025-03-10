import React from 'react';
import { cn } from './utils';

const categories = [
  { id: 'all', label: 'All', color: 'from-white to-white/80' },
  { id: 'title', label: 'Title', color: 'from-rose-500 via-pink-500 to-purple-600' },
  { id: 'presenting', label: 'Presenting', color: 'from-violet-400 to-violet-600' },
  { id: 'platinum', label: 'Platinum', color: 'from-slate-200 to-slate-400' },
  { id: 'gold', label: 'Gold', color: 'from-amber-400 to-amber-600' },
  { id: 'fashion', label: 'Fashion', color: 'from-pink-400 to-pink-600' },
  { id: 'automobile', label: 'Automobile', color: 'from-red-400 to-red-600' },
];

export const SponsorCategorySelector = ({ activeCategory, onCategoryChange }) => {
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

      {/* Mobile Version */}
      <div className="sm:hidden overflow-x-auto pb-4 mb-8 scrollbar-hide">
        <div className="flex gap-3 px-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300",
                activeCategory === category.id
                  ? "bg-gradient-to-r shadow-lg scale-105 text-white " + category.color
                  : "text-white/60 border border-white/10 hover:text-white hover:bg-white/5"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}; 