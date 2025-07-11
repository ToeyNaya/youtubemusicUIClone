import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import MyPlaylist from "./MyPlaylist";
import { useAddPlaylist } from "../AddPlaylistContext";


const PlaylistNav = () => {
  const { isAddPlaylistOpen, toggleAddPlaylist } = useAddPlaylist();
  return (
    <div>
      <div className="flex justify-center mt-6">
        <button onClick={toggleAddPlaylist} className="flex justify-center items-center gap-2 text-white bg-[#1D1D1D] hover:bg-[#353535] p-2  rounded-3xl w-52">
          <AiOutlinePlus className="text-2xl" />
          <p className="text-sm">เพลย์ลิสต์ใหม่</p>
        </button>
      </div>
      <MyPlaylist />
    </div>
  );
};

export default PlaylistNav;
