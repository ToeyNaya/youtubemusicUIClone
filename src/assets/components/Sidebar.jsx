import React from "react";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { SlHome } from "react-icons/sl";
import { IoCompassOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); // รับพาท จาก url

  return (
    <div className="hidden md:flex w-30 mt-16">
      <ul className="flex flex-col gap-4 mx-3 py-3 text-white">
        <Link to="/">
          <li
            className={`cursor-pointer flex flex-col justify-center items-center w-13 p-3 gap-2 rounded-md text-center ${
              location.pathname === "/" ? "bg-[#1D1D1D]" : "hover:bg-[#353535]"
            }`}
          >
            <SlHome className="text-2xl" />
            <p className="text-xs">หน้าแรก</p>
          </li>
        </Link>
        <Link to="/explore">
          <li
            className={`cursor-pointer flex flex-col justify-center items-center w-13 p-3 gap-2 rounded-md text-center ${
              location.pathname === "/explore" ? "bg-[#1D1D1D]" : "hover:bg-[#353535]"
            }`}
          >
            <IoCompassOutline className="text-2xl" />
            <p className="text-xs">สำรวจ</p>
          </li>
        </Link>
        <Link to="/library">
          <li
            className={`cursor-pointer flex flex-col justify-center items-center w-13 p-3 gap-2 rounded-md text-center ${
              location.pathname === "/library" ? "bg-[#1D1D1D]" : "hover:bg-[#353535]"
            }`}
          >
            <MdOutlineLibraryMusic className="text-2xl" />
            <p className="text-xs">คลังเพลง</p>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
