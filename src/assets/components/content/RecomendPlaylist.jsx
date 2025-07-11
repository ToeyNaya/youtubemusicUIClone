import React from 'react'
import recomendplaylist from '../../../../data/recomendPlaylist'

const RecomendPlaylist = () => {
  return (
    <div className='mt-28 mx-4 lg:mx-0 '>
        <ul className='flex gap-3 text-white w-full max-w-[21rem] md:max-w-[38rem] lg:max-w-[95rem] overflow-auto no-scrollbar'>
            {recomendplaylist.map((recomend,index) => (
                <li className='flex items-center justify-center cursor-pointer text-xs md:text-sm bg-[#232526] hover:bg-[#353535] transition-colors p-2 px-2 md:px-4 rounded-lg min-w-[6rem] h-[2rem] md:h-auto text-nowrap' key={index}>{recomend.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default RecomendPlaylist