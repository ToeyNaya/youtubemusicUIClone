import React, { useState } from "react";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import { IoPauseOutline } from "react-icons/io5";
import { FaCaretUp } from "react-icons/fa";
import { TbArrowsShuffle } from "react-icons/tb";
import { RxLoop } from "react-icons/rx";
import { RxSpeakerLoud } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";

import FormatViewCount from "./Functions/FormatViewCount";

const dataPlay = [
  {
    title: "ถ้าเธอรักฉันจริง",
    artist: "ทรี แมน ดาวน์",
    view: 250000,
    cover: "https://i.scdn.co/image/ab67616d0000b27363be91ff3ab88d6e570bb684",
  },
];

const AudioPlayer = () => {
  const [Playing, setPlaying] = useState(true);
  const firstSong = dataPlay[0];

  const togglePlay = () => {
    setPlaying(!Playing);
  };

  return (
    <div className="fixed group bottom-0 left-0 h-16 w-full bg-[#212121] text-white p-4 flex items-center justify-between space-x-4 z-50">
      {/* Progress bar */}
      <div className="w-1/2 h-0.5 bg-red-600 absolute top-0 left-0">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity w-4 h-4 bg-red-600 rounded-full absolute -top-1.5 left-full"></span>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-4">
        {/* Previous button */}
        <button>
          <MdSkipPrevious className="text-2xl" />
        </button>

        {/* Play / Pause button */}
        {Playing ? (
          <button onClick={togglePlay}>
            <IoMdPlay className="text-4xl" />
          </button>
        ) : (
          <button onClick={togglePlay}>
            <IoPauseOutline className="text-4xl" />
          </button>
        )}

        {/* Next button */}
        <button>
          <MdSkipNext className="text-2xl" />
        </button>

        {/* Current time and duration */}
        <div className="text-sm">1:56 / 4:15</div>
      </div>

      {/* Song info */}
      <div className="flex items-center space-x-4">
        <img
          src={firstSong.cover}
          alt="Album Cover"
          className="w-12 h-12 rounded-sm"
        />
        <div className="flex flex-col gap-1">
          <div className="">{firstSong.title}</div>
          <div className="text-gray-400 text-sm flex gap-2">
            <p>{firstSong.artist}</p> •{" "}
            <FormatViewCount view={firstSong.view} />
          </div>
        </div>

        {/* Like and Dislike buttons */}
        <div className="flex items-center gap-4 text-2xl text-[#909090]">
          <AiOutlineDislike className="rounded-full hover:bg-[#4D4D4D] w-10 h-auto p-2 cursor-pointer" />
          <AiOutlineLike className="rounded-full hover:bg-[#4D4D4D] w-10 h-auto p-2 cursor-pointer" />
          <HiOutlineDotsVertical className="rounded-full hover:bg-[#4D4D4D] w-10 h-auto p-2 cursor-pointer" />
        </div>
      </div>

      {/* Other controls */}
      <div className="flex items-center space-x-4 gap-2">
        <RxSpeakerLoud className="text-xl text-[#909090]" />
        <RxLoop className="text-xl text-[#909090]" />
        <TbArrowsShuffle className="text-xl text-[#909090]" />
        <FaCaretUp className="text-3xl" />
      </div>
    </div>
  );
};

export default AudioPlayer;
