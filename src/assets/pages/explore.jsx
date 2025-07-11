import React from "react";
import GroupButton from "../components/Button/GroupButton";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";

import quickplaylist from "../../../data/quickplaylist";
import QuickPlayList from "../components/content/QuickPlayList";

import recomendAlbum from "../../../data/recomendAlbum";
import AlbumRecomendList from "../components/content/AlbumRecomendList";

import MoodAndMusic from "../components/content/MoodAndMusic";
import moodandmusic from "../../../data/MoodAndMusic";

const group = [
  { title: "มาใหม่", icon: <MdOutlineLibraryMusic /> },
  { title: "อันดับ", icon: <HiOutlineArrowTrendingUp /> },
  { title: "อารมณ์และแนวเพลง", icon: <CiFaceSmile /> },
];

const explore = () => {
  return (
    <div className="flex flex-col gap-14 mt-5">
      <div className="grid lg:grid-cols-3 mx-4 mt-20 lg:gap-x-7 gap-y-3 lg:gap-y-0 w-[22rem] md:w-[40rem] lg:w-[96rem]">
        {group.map((group, index) => (
          <GroupButton key={index} title={group.title} icon={group.icon} />
        ))}
      </div>
      <AlbumRecomendList data={recomendAlbum} title={"อัลบั้มและซิงเกิลใหม่"} morebtn={true} />
      <MoodAndMusic data={moodandmusic} title={"อารมณ์และแนวเพลง"} morebtn={null}  />
      <QuickPlayList data={quickplaylist} title={"เพลงยอดนิยม"} morebtn={true} />
    </div>
  );
};

export default explore;
