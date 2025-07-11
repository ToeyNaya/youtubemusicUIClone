import React from 'react';

const ListButton = ({ title }) => {
  return (
    <button className='flex px-4 gap-2 items-center bg-[#292929] hover:bg-[#212121] transition-colors rounded-lg h-9'>
      <p className='text-white whitespace-nowrap'>{title}</p>
    </button>
  );
};

export default ListButton;