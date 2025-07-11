import React from "react";

const Select = ({ options = [], value, onChange, className = "" }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`
        block
        w-1/2
        border-gray-300
        bg-[#212121]
        text-white
        shadow-sm
       focus:ring-[#484848]
        text-sm
        md:text-lg
        focus:outline-none
        ${className}
      `}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          <p className="text-xl">
          {option.value}
          </p>
        </option>
      ))}
    </select>
  );
};

export default Select;
