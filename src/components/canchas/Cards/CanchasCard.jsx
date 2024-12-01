import React from 'react'
import cancha from '../../../assets/prueba/Cancha.jpg'
import StarIcon from '@mui/icons-material/Star';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';

const CanchasCard = () => {
    return (
        <div className="w-full overflow-hidden cursor-pointer select-none rounded-xl">
            <div className="relative w-full rounded-lg overflow-hidden">
                <img
                    src={cancha}
                    alt="cancha"
                    className="w-full h-full object-cover object-center aspect-[5/3]"
                />
                <div className='absolute top-0 left-0 w-full h-full' style={{
                    background: 'radial-gradient(circle, transparent 80%, rgba(0,0,0,.2) 100%)'
                }} />
            </div>
            <div className="pt-3">
                <div className='flex items-center justify-between text-[15px]'>
                    <h2 className="font-semibold text-nowrap truncate max-w-full">Campo deportivo Juan Moscoso</h2>
                    <span className='flex items-center gap-1 font-normal'>
                        <StarIcon className='!size-4' />
                        4.5
                    </span>
                </div>
                <div className='flex items-center gap-1 text-neutral-500 dark:text-neutral-300'>
                    <SportsSoccerIcon className='!size-5' />
                    <SportsVolleyballIcon className='!size-5' />
                </div>
            </div>
        </div>
    )
}

export default CanchasCard