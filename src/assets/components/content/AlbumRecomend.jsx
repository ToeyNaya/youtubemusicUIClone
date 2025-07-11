import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import AlbumRecomendList from "./AlbumRecomendList";

const AlbumRecomend = () => {
  return (
    <div className="w-full] max-w-[24rem] md:max-w-[40rem] lg:max-w-[96rem]">
      <div className="flex justify-between items-center px-4">
        <h3 className="text-white text-xl md:text-2xl font-bold">
          อัลบั้มสำหรับคุณ
        </h3>
        <div className="flex gap-2 items-center text-white ">
          <button className="p-1 md:p-2 px-5 text-xs md:text-sm bg-black rounded-full text-white border border-slate-100 hover:bg-[#353535] hover:border-[#353535] transition-colors ">
            เล่นทั้งหมด
          </button>
          <button className="p-2 text-sm bg-black rounded-full text-white border border-slate-100 hover:bg-[#1C1C1C] transition-colors">
            <MdKeyboardArrowLeft className="text-xs md:text-xl" />
          </button>
          <button className="p-2 text-sm bg-black rounded-full text-white border border-slate-100 hover:bg-[#1C1C1C] transition-colors">
            <MdKeyboardArrowRight className="text-xs md:text-xl" />
          </button>
        </div>
      </div>
      <AlbumRecomendList />
    </div>
  );
};

export default AlbumRecomend;
