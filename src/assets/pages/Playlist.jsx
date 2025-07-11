import React from "react";
import quickplaylist from "../../../data/quickplaylist";

const PlayIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className="w-12 h-12"
  >
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const Playlist = () => {
  return (
    <div className="mt-24 min-h-screen p-8">
      <div className="flex gap-8">
        {/* Left Section - The Hit List */}
        <div className="w-80">
          <div className="fixed w-80">
            <div className="relative group cursor-pointer">
              <img 
                src="https://lh3.googleusercontent.com/K43loRqzvaNZanFMCmLES1cXxjwNqmprFwePaieq8BhYZnKAwacGzape4pytjTEoWVRmpaPgkAV-aw=w544-h544-l90-rj"
                alt="The Hit List"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <PlayIcon />
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-blue-500 text-white text-sm py-1 px-3 inline-block rounded">
                UNITED STATES
              </div>
              <h1 className="text-white text-2xl font-bold mt-2">THE HIT LIST</h1>
              <p className="text-gray-400 mt-1">บ้านหลังใหม่ของเพลงที่ฮิตที่สุดในปัจจุบัน</p>
            </div>
          </div>
        </div>

        {/* Right Section - Playlist */}
        <div className="flex-1 ml-80">
          <ul className="space-y-4">
            {quickplaylist.map((song, index) => (
              <li key={index} className="group flex items-center gap-4 p-2 rounded hover:bg-white/10 transition-colors">
                <img 
                  src={song.cover}
                  alt={song.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-white font-medium">{song.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {song.artist} • เล่น {song.view} ล้าน ครั้ง •
                  </p>
                </div>
                <span className="text-gray-400">{song.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Playlist;