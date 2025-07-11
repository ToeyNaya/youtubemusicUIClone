import React, { useRef, useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

const formatFollowerCount = (follower) => {
  if (follower >= 1_000_000) {
    const millionViews = follower / 1_000_000;
    return `ผู้ติดตาม ${
      Number.isInteger(millionViews)
        ? millionViews
        : parseFloat(millionViews.toFixed(2))
    } ล้าน คน`;
  } else if (follower >= 100_000) {
    const hundredThousandViews = follower / 100_000;
    return `ผู้ติดตาม ${
      Number.isInteger(hundredThousandViews)
        ? hundredThousandViews
        : parseFloat(hundredThousandViews.toFixed(2))
    } แสน คน`;
  } else if (follower >= 10_000) {
    const tenThousandViews = follower / 10_000;
    return `ผู้ติดตาม ${
      Number.isInteger(tenThousandViews)
        ? tenThousandViews
        : parseFloat(tenThousandViews.toFixed(2))
    } หมื่น คน`;
  } else if (follower >= 1_000) {
    const thousandViews = follower / 1_000;
    return `ผู้ติดตาม ${
      Number.isInteger(thousandViews)
        ? thousandViews
        : parseFloat(thousandViews.toFixed(2))
    } พัน คน`;
  }
  return `ผู้ติดตาม ${follower} คน`;
};

const ChanelRecomendList = ({data,title,morebtn}) => {

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
      <div className="flex gap-4 lg:gap-10 mx-2 overflow-auto mt-4 no-scrollbar " ref={containerRef}>
        {data.map((recomendchanel, index) => (
          <div
            key={index}
            className="relative flex flex-col gap-3 md:min-w-[10rem] p-2 flex-shrink-0 items-center"
          >
            <img
              src={recomendchanel.cover}
              alt=""
              className="w-28 h-28 md:w-40 md:h-40 lg:w-56 lg:h-56 object-cover rounded-full cursor-pointer"
            />
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-white font-medium text-base cursor-pointer hover:underline truncate">
                {recomendchanel.title}
              </p>
              <p className="text-[#959595] text-sm truncate">
                {formatFollowerCount(recomendchanel.follower)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChanelRecomendList;
