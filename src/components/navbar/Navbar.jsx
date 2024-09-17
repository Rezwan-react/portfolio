import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { FaUserGraduate, FaBars } from "react-icons/fa";
import { PiBrainLight, PiBriefcase } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import './Navbar.css'; // You'll handle custom styling here if needed

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="bg-[#1A2238] text-white fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center py-5 px-6 md:px-12">
          <div className="text-3xl font-bold">Portfolio</div>

          {/* Hamburger Icon (Visible on Small Screens) */}
          <FaBars 
            onClick={toggleMenu} 
            className="text-white text-3xl md:hidden cursor-pointer hover:text-gray-400 transition-all duration-300"
          />
          
          {/* Full Menu for Larger Screens */}
          <ul className="hidden md:flex gap-6 text-[18px] font-medium font-Poppins items-center">
            <a href="#home" className="flex items-center gap-2 px-4 py-2 hover:bg-[#3B82F6] hover:rounded-lg transition duration-300">
              Home
              <IoHomeOutline className="text-2xl" />
            </a>

            <a href="#about" className="flex items-center gap-2 px-4 py-2 hover:bg-[#3B82F6] hover:rounded-lg transition duration-300">
              About
              <FaUserGraduate className="text-2xl" />
            </a>

            <a href="#skills" className="flex items-center gap-2 px-4 py-2 hover:bg-[#3B82F6] hover:rounded-lg transition duration-300">
              Skills
              <PiBrainLight className="text-2xl" />
            </a>

            <a href="#portfolio" className="flex items-center gap-2 px-4 py-2 hover:bg-[#3B82F6] hover:rounded-lg transition duration-300">
              Portfolio
              <PiBriefcase className="text-2xl" />
            </a>

            <a href="#contact" className="flex items-center gap-2 px-4 py-2 hover:bg-[#3B82F6] hover:rounded-lg transition duration-300">
              Contact
              <IoIosMail className="text-2xl" />
            </a>
          </ul>
        </div>

        {/* Dropdown Menu for Mobile Screens */}
        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-[#1A2238] transition-all duration-500`}>
          <ul className="flex flex-col items-center gap-4 text-[18px] font-medium font-Poppins p-6">
            <a href="#home" className="w-full text-center py-2 hover:bg-[#3B82F6] hover:rounded-lg transition duration-300">
              Home
              <IoHomeOutline className="inline text-2xl ml-2" />
            </a>

            <a href="#about" className="w-full text-center py-2 hover:bg-[#3B82F6] hover:rounded-lg transition duration-300">
              About
              <FaUserGraduate className="inline text-2xl ml-2" />
            </a>

            <a href="#skills" className="w-full text-center py-2 hover:bg-[#3B82F6] hover:rounded-lg transition duration-300">
              Skills
              <PiBrainLight className="inline text-2xl ml-2" />
            </a>

            <a href="#portfolio" className="w-full text-center py-2 hover:bg-[#3B82F6] hover:rounded-lg transition duration-300">
              Portfolio
              <PiBriefcase className="inline text-2xl ml-2" />
            </a>

            <a href="#contact" className="w-full text-center py-2 hover:bg-[#3B82F6] hover:rounded-lg transition duration-300">
              Contact
              <IoIosMail className="inline text-2xl ml-2" />
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
