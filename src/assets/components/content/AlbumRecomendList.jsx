import React, { useRef, useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";

const AlbumRecomendList = ({ data, title, morebtn }) => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount =
        direction === "right" ? container.offsetWidth : -container.offsetWidth;
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const handleScrollStateChange = () => {
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(
          container.scrollLeft < container.scrollWidth - container.offsetWidth
        );
      };

      container.addEventListener("scroll", handleScrollStateChange);
      handleScrollStateChange();

      return () => {
        container.removeEventListener("scroll", handleScrollStateChange);
      };
    }
  }, []);

  return (
    <div className="w-full max-w-[24rem] md:max-w-[40rem] lg:max-w-[96rem]">
      <div className="flex justify-between items-center px-4">
        <h3 className="text-white text-xl md:text-2xl font-bold">{title}</h3>
        <div className="flex gap-2 items-center text-white ">
          {morebtn ? (
            <button className="p-1 md:p-2 px-5 text-xs md:text-sm bg-black rounded-full text-white border border-slate-100 hover:bg-[#353535] hover:border-[#353535] transition-colors ">
              เล่นทั้งหมด
            </button>
          ) : null}

          <button
            className={`p-2 text-sm bg-black rounded-full text-white border border-slate-100 hover:bg-[#1C1C1C] transition-colors ${
              !canScrollLeft ? "opacity-30 " : ""
            }`}
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
          >
            <MdKeyboardArrowLeft className="text-xs md:text-xl" />
          </button>
          <button
            className={`p-2 text-sm bg-black rounded-full text-white border border-slate-100 hover:bg-[#1C1C1C] transition-colors ${
              !canScrollRight ? "opacity-30 " : ""
            }`}
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
          >
            <MdKeyboardArrowRight className="text-xs md:text-xl" />
          </button>
        </div>
      </div>
      <div
        className="flex gap-4 mx-2 overflow-auto mt-4 no-scrollbar"
        ref={containerRef}
      >
        {data.map((album, index) => (
          <div
            key={index}
            className="relative flex flex-col gap-3 md:min-w-[10rem] p-2 flex-shrink-0 group"
          >
            <img
              src={album.cover}
              alt=""
              className="w-full max-w-32 md:max-w-36 lg:max-w-60 rounded-sm group-hover:opacity-30 transition-opacity"
            />
            <div className="absolute right-2 mt-3 flex flex-col items-center gap-8 md:gap-12 lg:gap-32 opacity-0 group-hover:opacity-100">
              <button className="rounded-full hover:bg-[#37717A] p-2">
                <HiOutlineDotsVertical className="text-white text-lg" />
              </button>
              <button className="rounded-full mr-5 bg-black opacity-60 hover:opacity-100 hover:scale-110 transition-transform duration-300 cursor-pointer flex items-center justify-center">
                <IoIosPlay className=" text-white text-4xl lg:text-5xl p-2" />
              </button>
            </div>
            <div className="flex flex-col gap-y-3 w-full max-w-32 md:max-w-36 lg:max-w-60">
              <p className="text-white font-semibold text-base cursor-pointer hover:underline truncate">
                {album.title}
              </p>
              <p className="text-[#959595] text-sm cursor-pointer hover:underline truncate">
                {album.artist}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumRecomendList;
