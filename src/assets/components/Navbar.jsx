import React, { useEffect, useState } from "react";
import Sidebar from "./SidebarPopup";
import { FaChromecast } from "react-icons/fa";
import { RiCastLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ toggleAddPlaylist }) => {
  const [modal, setModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSearch = () => {
    setModal((prev) => !prev);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    setSidebarOpen(false);
  },[location.pathname]);

  return (
    <div className=" bg-black flex justify-between w-screen h-16 items-center px-6 lg:px-7 fixed z-10">
      {/* Left Section */}
      <div className="flex gap-10 lg:gap-28 items-center">
        <div className="flex gap-4 lg:gap-6 md:ml-1 lg:ml-2 items-center">
          <i
            className="bi bi-list text-white text-3xl cursor-pointer"
            onClick={toggleSidebar}
          ></i>
          <a href="/">
            <img
              className="cursor-pointer"
              src="https://music.youtube.com/img/ringo2/on_platform_logo_dark.svg"
              alt="Logo"
            />
          </a>
        </div>

        {/* Search Input for Desktop */}
        <div className="hidden lg:flex items-center rounded-md h-10 text-white w-[30rem] relative">
          <div className="absolute left-4 cursor-pointer">
            <i className="bi bi-search text-gray-400"></i>
          </div>
          <input
            className="bg-white bg-opacity-15 rounded-md h-10 pl-12 pr-4 text-white w-full text-sm outline-none"
            type="text"
            placeholder="ค้นหาเพลง อัลบั้ม ศิลปิน พอดแคสต์"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5 md:gap-8 lg:mr-20">
        {/* Search Icon for Mobile */}
        <button onClick={toggleSearch} className="lg:hidden">
          <i className="bi bi-search text-white text-2xl cursor-pointer"></i>
        </button>

        {/* Other Icons */}
        <FaChromecast className="text-white text-3xl cursor-pointer" />
        <a href="/playlist">
          <img
            className="rounded-full w-10"
            src="https://i.pinimg.com/enabled_lo/564x/f4/db/bb/f4dbbb90dab0ce1af8bb7f689c44caf2.jpg"
            alt="Profile"
          />
        </a>
      </div>

      {/* Search Modal for Mobile */}
      {modal && (
        <div className="fixed top-3 left-0 right-0 px-5 bg-black z-10 md:w-3/5 md:left-44">
          <div className="flex items-center gap-3 h-10 rounded-md">
            <div className="absolute left-7 cursor-pointer">
              <button onClick={toggleSearch}>
                <i className="bi bi-arrow-left text-white text-xl"></i>
              </button>
            </div>
            <input
              className="w-full bg-white bg-opacity-15 rounded-md h-10 px-7 pl-10 text-white text-sm outline-none"
              type="text"
              placeholder="ค้นหาเพลง อัลบั้ม ศิลปิน พอดแคสต์"
            />
          </div>
        </div>
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;
