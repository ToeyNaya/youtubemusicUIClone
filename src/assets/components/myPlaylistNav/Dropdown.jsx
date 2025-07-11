import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { IoMdLink } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { CiLock } from "react-icons/ci";

const Dropdown = () => {
  const options = [
    {
      value: "สาธารณะ",
      icon: <BiWorld className="text-2xl" />,
      desc: "ทุกคนสามารถค้นหาและดูได้",
    },
    {
      value: "ไม่เป็นสาธารณะ",
      icon: <IoMdLink className="text-2xl" />,
      desc: "ทุกคนที่มีลิงก์สามารถดูได้",
    },
    {
      value: "ส่วนตัว",
      icon: <CiLock className="text-2xl" />,
      desc: "คุณเท่านั้นที่สามารถดูได้",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="relative flex flex-col items-center w-full max-w-[220px] md:max-w-[340px] h-60 rounded-md">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-[#212121] border-b-[1px]  border-b-gray-700 p-4 w-full flex items-center justify-between tracking-wider text-white focus:border-b-blue-600 transition-colors"
      >
        <div className="flex items-center gap-2">
          {selectedOption.icon}
          <p className="font-normal">{selectedOption.value}</p>
          
        </div>
        {!isOpen ? (
          <IoIosArrowDown className="h-8" />
        ) : (
          <IoIosArrowUp className="h-8" />
        )}
      </button>

      {isOpen && (
        <div className="bg-[#333333] absolute top-16 py-2 w-full">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
              className={`flex w-full items-center gap-4 cursor-pointer p-2 hover:bg-[#484848] text-white ${selectedOption.value === option.value ? "bg-[#484848]" : ""}`}
            >
              {option.icon}
              <div className="flex flex-col">
                <h3 className="text-sm md:text-base">{option.value}</h3>
                <p className="text-xs md:text-sm text-[#A7C0C8]">{option.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
