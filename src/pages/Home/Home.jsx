import React, { useState } from 'react'
import SearchPanel from '../../components/canchas/searchPanel/SearchPanel'
import SearchPanelMobile from '../../components/canchas/searchPanel/SearchPanelMobile'
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import Mapa from '../../components/canchas/Mapa/Mapa'
import { Button } from '@mui/material'

const Home = () => {
  const [MapView, setMapView] = useState(false)

  return (
    <>
      <div className='hidden md:block'>
        <SearchPanel />
      </div>
      <div className='flex md:hidden'>
        <SearchPanelMobile />
      </div>
      <main className={`h-full flex justify-center relative`}>
        <div className={`absolute h-full md:relative md:flex-1 w-full bg-neutral-50 dark:bg-neutral-950  transition-all ${MapView ? 'opacity-0 z-0' : 'z-10'}`}>
          lista
        </div>
        <div className={`absolute h-full md:relative md:flex-1 w-full max-w-[800px] bg-neutral-50 dark:bg-neutral-950 transition-all ${!MapView ? 'opacity-0 z-0' : 'z-10'}`}>
          <Mapa />
        </div>
        <Button
          className={`!absolute md:!hidden bottom-5 z-10 !capitalize !px-4 !py-2 ${MapView ? 'dark:!bg-neutral-700 dark:!text-white' : 'dark:!bg-neutral-300 dark:!text-neutral-900'}  !text-white !rounded-full !shadow-lg`}
          onClick={() => setMapView((prev) => !prev)}
        >
          {MapView ? (
            <span className='flex items-center gap-1 font-semibold'><MapRoundedIcon className='!size-5' />  Mapa</span>
          ) : (
            <span className='flex items-center gap-1 font-semibold'><FormatListBulletedRoundedIcon className='!size-5' />  Lista</span>
          )}
        </Button>
      </main>
    </>
  );
}

export default Home