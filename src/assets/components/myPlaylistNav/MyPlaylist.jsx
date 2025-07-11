import React from "react";
import playlistData from "../../../../data/playlistData ";
import { FaPlay } from "react-icons/fa";
import { IoIosPlayCircle } from "react-icons/io";

const MyPlaylist = () => {
  return (
    <div>
      <div className="flex flex-col mt-2 px-3 h-auto max-h-96 overflow-y-auto ">
        {playlistData.map((playlist, index) => (
          <div
            key={index}
            className="group relative w-full flex flex-col gap-y-1 p-3 rounded-md cursor-pointer bg-black hover:bg-[#353535] text-white"
          >
             <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-0 group-hover:opacity-100">
              <IoIosPlayCircle className="text-white text-3xl" />
            </div>
            <p className="text-sm font-semibold">{playlist.title}</p>
            <p className="text-xs text-gray-400">{playlist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlaylist;
