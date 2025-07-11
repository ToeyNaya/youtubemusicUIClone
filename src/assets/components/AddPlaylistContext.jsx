import React, { createContext, useContext, useState } from "react";

// สร้าง context
const AddPlaylistContext = createContext();

// สร้าง provider เพื่อให้ context ใช้งานได้ในแอป
export const AddPlaylistProvider = ({ children }) => {
  const [isAddPlaylistOpen, setIsAddPlaylistOpen] = useState(false);

  const toggleAddPlaylist = () => {
    setIsAddPlaylistOpen((prev) => !prev);
  };

  return (
    <AddPlaylistContext.Provider value={{ isAddPlaylistOpen, toggleAddPlaylist }}>
      {children}
    </AddPlaylistContext.Provider>
  );
};

// Hook สำหรับใช้งาน context
export const useAddPlaylist = () => {
  return useContext(AddPlaylistContext);
};
