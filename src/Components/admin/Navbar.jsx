import React from 'react';
import { Search, Bell, UserCircle } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md px-6 py-4 fixed top-0 right-0 left-0 z-20">
      <div className="flex items-center justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
        <div className="flex items-center space-x-6">
          <button className="relative">
            <Bell className="w-6 h-6 text-gray-300" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <div className="flex items-center space-x-2">
            <UserCircle className="w-8 h-8 text-gray-300" />
            <span className="text-gray-300">Admin User</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
