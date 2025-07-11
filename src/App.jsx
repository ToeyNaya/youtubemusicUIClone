import React from "react";
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./assets/components/Navbar";
import Sidebar from "./assets/components/Sidebar";
import PopupAddPlaylist from "./assets/components/myPlaylistNav/PopupAddPlaylist.jsx";
import { AddPlaylistProvider } from "./assets/components/AddPlaylistContext.jsx";
import "bootstrap-icons/font/bootstrap-icons.css";
import AppRoutes from "./AppRoutes.jsx";
import AudioPlayer from "./assets/components/AudioPlayer"; // Import the AudioPlayer component

const history = createBrowserHistory({
  v7_startTransition: true,
});

function App() {
  return (
    <AddPlaylistProvider>
      <HistoryRouter history={history}>
        <div className="bg-black h-screen">
          <Navbar />
          <div className="flex gap-2 lg:gap-44 bg-gradient-to-b from-gray-950 to-black">
            <Sidebar />
            <div className="flex flex-col gap-16">
              <AppRoutes />
            </div>
          </div>
          <PopupAddPlaylist />
          <AudioPlayer />
        </div>
      </HistoryRouter>
    </AddPlaylistProvider>
  );
}

export default App;
