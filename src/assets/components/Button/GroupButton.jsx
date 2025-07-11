import React from "react";

const GroupButton = ({ title, icon }) => {
  return (
    <button className="flex px-4 gap-2 items-center bg-[#292929] hover:bg-[#212121] transition-colors rounded-md h-14">
      <p className="text-[#AAAAAA] text-2xl">{icon}</p>
      <p className="text-white font-semibold line text-xl p-3 px-5 tracking-wider">
        {title}
      </p>
    </button>
  );
};

export default GroupButton;
