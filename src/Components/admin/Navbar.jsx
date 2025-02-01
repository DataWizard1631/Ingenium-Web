import React from "react";
import { Search, Bell, UserCircle } from "lucide-react";
import TrueFocus from "./BlurrText";

export const Navbar = () => {
  return (
    <nav className="bg-colPink shadow-md px-6 py-4 fixed top-0 right-0 left-0 z-20">
      <div className="flex items-center justify-around w-full px-60">
        <div className="w-32 pt-4 sm:w-40 md:w-48 lg:w-56 xl:w-64">
          <img
            src="/Logos/Ing_White_2025.png"
            alt="Ingenium Logo"
            className="w-fit h-16"
          />
        </div>
        <div>
          <TrueFocus sentence="Admin Dashboard" />
        </div>
      </div>
    </nav>
  );
};
