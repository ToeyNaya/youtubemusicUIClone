// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Playlist from "./assets/pages/Playlist";
import Explore from "./assets/pages/explore";
import Library from "./assets/pages/library";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/playlist" element={<Playlist />} />
    <Route path="/explore" element={<Explore />} />
    <Route path="/library" element={<Library />} />
  </Routes>
);

export default AppRoutes;
