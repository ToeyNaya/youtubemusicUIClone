import { useState } from "react";
import React from "react";
import { useAddPlaylist } from "../AddPlaylistContext";
import Select from "./Select";
import Dropdown from "./Dropdown";

const PopupAddPlaylist = () => {
  const { isAddPlaylistOpen, toggleAddPlaylist } = useAddPlaylist();
  const [PlaylistName, setPlaylistName] = useState("");
  const [PlaylistDesc, setPlaylistDesc] = useState("");
  const [selectedValue, setSelectedValue] = useState("");



  const handlePlaylistChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleDescChange = (event) => {
    setPlaylistDesc(event.target.value);
  };

  return (
    <>
      {isAddPlaylistOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 transition-opacity">
          <div className="bg-[#212121] p-6 rounded-lg w-[20rem] md:w-[45rem] h-[45rem] transition-opacity">
            <h2 className="text-2xl font-semibold text-white mb-10 mt-5 tracking-wider">
              เพลย์ลิสต์ใหม่
            </h2>
            <div className="flex flex-col gap-9">
              <div>
                {PlaylistName.length > 0 && (
                  <label className=" text-[#9CA3AF] transition-all duration-300 transform translate-y-6 opacity-100 animate-slide-up">
                    ชื่อเพลย์ลิสต์
                  </label>
                )}

                <input
                  type="text"
                  className=" w-full mb-4 bg-[#212121] py-2 text-white focus:outline-none border-b-2  border-b-gray-700 focus:border-b-blue-600 transition-colors"
                  placeholder="ชื่อเพลย์ลิสต์"
                  value={PlaylistName}
                  onChange={handlePlaylistChange}
                />
              </div>

              <div>
                {PlaylistDesc.length > 0 && (
                  <label className="text-[#9CA3AF] transition-all duration-300 transform translate-y-6 opacity-100 animate-slide-up">
                    คำอธิบาย
                  </label>
                )}
                <input
                  type="text"
                  className=" w-full mb-4 bg-[#212121] py-2 text-white focus:outline-none border-b-2  border-b-gray-700 focus:border-b-blue-600 transition-colors"
                  placeholder="คำอธิบาย"
                  value={PlaylistDesc}
                  onChange={handleDescChange}
                />
              </div>

              <div>
                <label className="text-[#9CA3AF]">ความเป็นส่วนตัว</label>
                <Dropdown />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={toggleAddPlaylist}
                className="hover:bg-[#353535] text-white px-4 py-2 rounded-full transition-colors"
              >
                ยกเลิก
              </button>
              <button
                onClick={toggleAddPlaylist}
                className="bg-slate-50 text-black px-4 py-2 rounded-full hover:bg-slate-300 transition-colors"
              >
                สร้าง
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupAddPlaylist;
