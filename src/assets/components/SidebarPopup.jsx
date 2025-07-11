import React from "react";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { SlHome } from "react-icons/sl";
import { IoCompassOutline } from "react-icons/io5";
import PlaylistNav from "./myPlaylistNav/PlaylistNav";
import { Link, useLocation } from "react-router-dom";

const SidebarPopup = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-black text-white z-20 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex gap-4 lg:gap-6 items-center px-5 lg:px-7 mt-4">
        <i
          className="bi bi-list text-white text-3xl cursor-pointer"
          onClick={toggleSidebar}
        ></i>
        <Link to="/">
          <img
            className="cursor-pointer"
            src="https://music.youtube.com/img/ringo2/on_platform_logo_dark.svg"
            alt="Logo"
          />
        </Link>
      </div>
      <ul className="flex flex-col px-3 mt-4">
        <Link to="/">
          <li
            className={`w-full h-12 p-5 rounded-md cursor-pointer flex items-center gap-8 ${
              location.pathname === "/" ? "bg-[#1D1D1D]" : "hover:bg-[#353535]"
            }`}
          >
            <SlHome className="text-2xl" /> <p className="text-base">หน้าแรก</p>
          </li>
        </Link>
        <Link to="/explore">
        <li
            className={`w-full h-12 p-5 rounded-md cursor-pointer flex items-center gap-8 ${
              location.pathname === "/explore" ? "bg-[#1D1D1D]" : "hover:bg-[#353535]"
            }`}
          >
            <IoCompassOutline className="text-2xl" />
            <p className="text-base">สำรวจ</p>
          </li>
        </Link>
        <Link to="/library">
        <li
            className={`w-full h-12 p-5 rounded-md cursor-pointer flex items-center gap-8 ${
              location.pathname === "/library" ? "bg-[#1D1D1D]" : "hover:bg-[#353535]"
            }`}
          >
            <MdOutlineLibraryMusic className="text-2xl" />
            <p className="text-base">คลังเพลง</p>
          </li>
        </Link>
      </ul>
      <hr className="w-[80%] mx-auto mt-10"></hr>
      <PlaylistNav />
    </div>
  );
};

export default SidebarPopup;
