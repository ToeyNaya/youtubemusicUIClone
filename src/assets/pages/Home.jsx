import React from 'react'
import QuickPlay from '../components/content/QuickPlay'
import ChanelRecomend from '../components/content/ChanelRecomend'
import RecomendPlaylist from '../components/content/RecomendPlaylist'
import recomendAlbum from '../../../data/recomendAlbum'
import quickplaylist from '../../../data/quickplaylist'
import recomendchanel from '../../../data/recomendchanel'
import AlbumRecomendList from '../components/content/AlbumRecomendList'
import QuickPlayList from '../components/content/QuickPlayList'
import ChanelRecomendList from '../components/content/ChanelRecomendList'

const Home = () => {
  return (
    <div className='container flex flex-col gap-6 '>
            <RecomendPlaylist />
            <QuickPlayList data={quickplaylist} title={"เลือกอย่างรวดเร็ว"} morebtn={true}/>
            <AlbumRecomendList data={recomendAlbum} title={"อัลบั้มสำหรับคุณ"} morebtn={true}/>
            <ChanelRecomendList data={recomendchanel} title={"Chanel สำหรับคุณ"} morebtn={true}/>
            <div>asdasd</div>
            <div>asdasd</div>
            <div>asdasd</div>
            <div>asdasd</div>
            <div>asdasd</div>
            <div>asdasd</div>
            <div>asdasd</div>
            <div>asdasd</div>
    </div>
  )
}

export default Home