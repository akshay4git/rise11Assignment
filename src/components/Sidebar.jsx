import React, { useState } from "react";
import Hamburger from "@mui/icons-material/Menu"
import { useScrollTrigger } from "@mui/material";
import Icon1 from '@mui/icons-material/Speed'
import Icon2 from '@mui/icons-material/BusinessCenter'
import Icon3 from '@mui/icons-material/StackedLineChart'
import Icon4 from '@mui/icons-material/CalendarMonth'
import Icon5 from '@mui/icons-material/Description'
import Icon6 from '@mui/icons-material/PanToolAlt'

const Sidebar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
  return (
    <main>
        <div className="h-screen w-64 hidden lg:flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center justify-center py-6 text-2xl font-bold">
        <p>Jur</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow">
        <ul className="mt-6 space-y-2">
          <li>
            <a
              href="#dashboard"
              className="flex items-center gap-3 px-4 py-2 hover:bg-blue-200 transition rounded"
            >
             <Icon1/> Dashboard
            </a>
          </li>
          <li>
            <a
              href="#my-cases"
              className="flex items-center gap-3 px-4 py-2 hover:bg-blue-200 transition rounded"
            >
             <Icon2/> My Cases
            </a>
          </li>
          <li>
            <a
              href="#activities"
              className="flex items-center gap-3 px-4 py-2 hover:bg-blue-200 transition rounded"
            >
             <Icon3/> Activities
            </a>
          </li>
          <li>
            <a
              href="#calendar"
              className="flex items-center gap-3 px-4 py-2 hover:bg-blue-200 transition rounded"
            >
              <Icon4/>Calendar
            </a>
          </li>
          <li>
            <a
              href="#files"
              className="flex items-center gap-3 px-4 py-2 hover:bg-blue-200 transition rounded"
            >
              <Icon5/>Files
            </a>
          </li>
          <li>
            <a
              href="#open-dispute"
              className="flex items-center gap-3 px-4 py-2 hover:bg-blue-200 transition rounded"
            >
              <Icon6/>Open a Dispute
            </a>
          </li>
        </ul>
      </nav>

      {/* Call to Action Section */}
      <div className="p-4 border-t border-blue-400">
        <div className="bg-blue-300 p-4 rounded-md text-center">
          <p className="font-medium">Get Justice on every Claim</p>
          <div className="mt-2">
            <button className="bg-white text-blue-400 px-4 py-2 rounded hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>

    <button className="lg:hidden block h-8" onClick={() => setIsMenuOpen(!isMenuOpen)}><Hamburger/></button>

    <section className={`absolute lg:hidden w-full min-h-screen bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}>
    <ul className="mt-6 space-y-2">
          <li>
            <a
              href="#dashboard"
              className="flex items-center gap-3 px-4 py-2 hover:bg-blue-200 transition rounded"
            >
             <Icon1/> Dashboard
            </a>
          </li>
          <li>
            <a
              href="#my-cases"
              className="flex items-center gap-3 px-4 py-2 hover:bg-blue-200 transition rounded"
            >
             <Icon2/> My Cases
            </a>
          </li>
          <li>
            <a
              href="#activities"
              className="flex items-center gap-3 px-4 py-2 hover:bg-blue-200 transition rounded"
            >
             <Icon3/> Activities
            </a>
          </li>
          <li>
            <a
              href="#calendar"
              className="flex items-center gap-3 px-4 py-2 hover:bg-blue-200 transition rounded"
            >
              <Icon4/>Calendar
            </a>
          </li>
          <li>
            <a
              href="#files"
              className="flex items-center gap-3 px-4 py-2 hover:bg-blue-200 transition rounded"
            >
              <Icon5/>Files
            </a>
          </li>
          <li>
            <a
              href="#open-dispute"
              className="flex items-center gap-3 px-4 py-2 hover:bg-blue-200 transition rounded"
            >
              <Icon6/>Open a Dispute
            </a>
          </li>
        </ul>
    </section>
    </main>
  );
};

export default Sidebar;