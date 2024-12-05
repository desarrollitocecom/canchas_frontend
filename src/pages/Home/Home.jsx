import React, { useEffect, useState } from 'react'
import SearchPanel from '../../components/canchas/searchPanel/SearchPanel'
import SearchPanelMobile from '../../components/canchas/searchPanel/SearchPanelMobile'
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import Mapa from '../../components/canchas/Mapa/Mapa'
import { Button } from '@mui/material'
import CanchasCard from '../../components/canchas/Cards/CanchasCard';
import { CANCHAS } from '../../helpers/Constants';
import MarkerCancha from '../../components/canchas/Marker/MarkerCancha';

const Home = () => {
  const [MapView, setMapView] = useState(false)
  const [loadingStates, setLoadingStates] = useState(
    Array(CANCHAS.length).fill(true)
  );

  useEffect(() => {
    CANCHAS.forEach((_, index) => {
      const delay = 2000 + index * 50; // El primero espera 2 segundos, los demás 200ms adicionales
      setTimeout(() => {
        setLoadingStates((prevStates) => {
          const newStates = [...prevStates];
          newStates[index] = false; // Marcar cancha como cargada
          return newStates;
        });
      }, delay);
    });
  }, []);
  

  return (
    <>
      <div className='hidden md:block z-[2]'>
        <SearchPanel />
      </div>
      <div className='flex md:hidden z-[2]'>
        <SearchPanelMobile />
      </div>
      <main className={`h-full max-h-full flex justify-center relative`}>
        <div className={`absolute h-full md:relative md:flex-1 w-full bg-neutral-50 dark:bg-neutral-950 transition-all ${MapView ? 'opacity-0 md:opacity-100 z-0' : 'z-[1]'}`}>
          <div className='w-full h-full overflow-auto'>
            <div className="w-full overflow-auto grid p-6 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-x-6 gap-y-[40px]">
            {CANCHAS.map((cancha, index) => (
                <CanchasCard
                  key={index}
                  nombre={cancha.nombreCentro}
                  imagenes={cancha.imagenes}
                  instalaciones={cancha.instalaciones}
                  rating={cancha.rating}
                  isLoading={loadingStates[index]}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={`absolute h-full md:relative md:flex-1 w-full max-w-[800px] bg-neutral-50 dark:bg-neutral-950 transition-all ${!MapView ? 'opacity-0 md:opacity-100 z-0' : 'z-[1]'}`}>
          <Mapa zoom={12}>
              <MarkerCancha data={CANCHAS}/>
          </Mapa>
        </div>
        <Button
          className={`!absolute md:!hidden bottom-5 z-[1] !capitalize h-10 w-24  !bg-[#20AC4B] !text-white !rounded-full !shadow-lg dark:!shadow-neutral-800/50`}
          onClick={() => setMapView((prev) => !prev)}
        >
          {!MapView ? (
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