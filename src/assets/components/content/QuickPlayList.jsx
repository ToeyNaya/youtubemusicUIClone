import React, { useRef, useState, useEffect } from "react";
import { MdPlayArrow } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const formatViewCount = (view) => {
  if (view >= 1_000_000) {
    const millionViews = view / 1_000_000;
    return `เล่น ${
      Number.isInteger(millionViews) ? millionViews : millionViews.toFixed(1)
    } ล้านครั้ง`;
  } else if (view >= 100_000) {
    const thousandViews = view / 100_000;
    return `เล่น ${
      Number.isInteger(thousandViews) ? thousandViews : thousandViews.toFixed(1)
    } แสนครั้ง`;
  } else if (view >= 10_000) {
    const thousandViews = view / 10_000;
    return `เล่น ${
      Number.isInteger(thousandViews) ? thousandViews : thousandViews.toFixed(1)
    } หมื่นครั้ง`;
  } else if (view >= 1_000) {
    const thousandViews = view / 1_000;
    return `เล่น ${
      Number.isInteger(thousandViews) ? thousandViews : thousandViews.toFixed(1)
    } พันครั้ง`;
  }
  return `เล่น ${view} ครั้ง`;
};

const QuickPlayList = ({data,title,morebtn}) => {
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
        <h3 className="text-white text-xl md:text-2xl font-bold">
          {title}
        </h3>
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
      <div className="grid grid-rows-4 grid-flow-col gap-4 gap-x-32 lg:gap-x-52 mx-3  p-4 overflow-x-auto transition-all duration-300 no-scrollbar" ref={containerRef}>
        {data.map((playlist, index) => (
          <div key={index} className="group flex space-x-4 text-white relative">
            <img
              src={playlist.cover}
              alt="Album Cover"
              className="w-16 h-16 rounded-sm group-hover:opacity-20 transition-opacity object-cover"
            />
            <div className="absolute mt-3 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <MdPlayArrow className="text-white text-4xl cursor-pointer" />
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-sm cursor-pointer max-w-52 md:max-w-60 truncate">
                {playlist.title}
              </p>
              <div className="flex gap-2">
                <p className="text-sm text-gray-400 hover:underline hover:cursor-pointer max-w-28 md:max-w-36 truncate">
                  {playlist.artist}
                </p>
                <p className="text-sm text-gray-400 truncate">
                  • {formatViewCount(playlist.view)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickPlayList;
