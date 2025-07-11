import React, { useRef, useState, useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const MoodAndMusic = ({ title, data, morebtn }) => {
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
    <div className="w-full] max-w-[24rem] md:max-w-[40rem] lg:max-w-[96rem]">
      <div className="flex justify-between items-center px-4">
        <h3 className="text-white text-xl md:text-2xl font-bold hover:underline hover:cursor-pointer">{title}</h3>
        <div className="flex gap-2 items-center text-white ">
          <button className="p-1 md:p-2 px-5 text-xs md:text-sm bg-black rounded-full text-white border border-slate-100 hover:bg-[#353535] hover:border-[#353535] transition-colors ">
            เล่นทั้งหมด
          </button>
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
        className="grid grid-rows-4 grid-flow-col gap-4 gap-x-10 mx-3  p-4 overflow-x-auto transition-all duration-300 no-scrollbar"
        ref={containerRef}
      >
        {data.map((playlist, index) => (
          <div
            key={index}
            className="group flex text-white relative w-48 h-14 text-wrap"
          >
            <button className={`bg-[#292929] hover:bg-[#212121] transition-colors duration-300 text-left px-4 py-1 text-white w-full rounded-md break-words line-clamp-2 overflow-hidden text-ellipsis`}
            style={{ borderLeft: `6px solid ${playlist.color}` }}
            >
              {playlist.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodAndMusic;
