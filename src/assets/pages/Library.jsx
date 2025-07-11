import React from "react";
import playlistData from "../../../data/playlistData ";
import ListButton from "../components/Button/ListButton";

const listData = [
  { title: "เพลย์ลิสต์" },
  { title: "เพลง" },
  { title: "อัลบั้ม" },
  { title: "ศิลปิน" },
  { title: "พอดแคสต์" },
];

const Library = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24">
      <div className="flex gap-9 mb-3">
        <p className="text-white text-xl mb-2 border-b-2">คลังเพลง</p>
      </div>
      <div className="flex gap-5 overflow-x-auto my-4 w-full sm:w-full max-w-[18rem] sm:max-w-full">
        {listData.map((data, index) => (
          <ListButton key={index} title={data.title} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 mt-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {playlistData.map((playlist, index) => (
          <div
            key={index}
            className="group flex flex-col gap-y-2 text-white w-full max-w-28 md:max-w-full"
          >
            <img
              src={playlist.cover}
              className="object-cover rounded-md w-full h-auto group-hover:opacity-80 cursor-pointer"
              alt={playlist.title}
            />
            <p className="mt-2 font-base truncate cursor-pointer hover:underline">
              {playlist.title}
            </p>
            <p className="text-gray-400 truncate cursor-pointer hover:underline">
              {playlist.description}
            </p>
            <p className="text-gray-400 truncate">{playlist.amount} แทร็ก</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
