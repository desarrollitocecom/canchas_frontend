import React from 'react'
import cancha from '../../../assets/prueba/Cancha.jpg'
import StarIcon from '@mui/icons-material/Star';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const CanchasCard = ({ nombre, imagen, instalaciones, rating }) => {
    const renderedIcons = new Set();

    return (
        <div className="w-full overflow-hidden cursor-pointer select-none rounded-xl">
            <div className="relative w-full rounded-lg overflow-hidden">
                <img
                    src={imagen}
                    alt={nombre}
                    className="w-full h-full object-cover object-center aspect-[5/3]"
                />
                <div className='absolute top-0 left-0 w-full h-full' style={{
                    background: 'radial-gradient(circle, transparent 80%, rgba(0,0,0,.2) 100%)'
                }} />
            </div>
            <div className="pt-3">
                <div className='flex items-center justify-between text-[15px]'>
                    <h2 className="font-semibold text-nowrap truncate max-w-full">Campo deportivo {nombre}</h2>
                    <span className='flex items-center gap-1 font-normal'>
                        <StarIcon className='!size-4' />
                        {parseFloat(rating).toFixed(2)}
                    </span>
                </div>
                <div className='flex items-center gap-1 text-neutral-500 dark:text-neutral-300'>
                    {instalaciones.losaCementoMultiuso === 1 && (
                        <>
                            {!renderedIcons.has('soccer') && renderedIcons.add('soccer') && (
                                <SportsSoccerIcon className='!size-5' />
                            )}
                            {!renderedIcons.has('volleyball') && renderedIcons.add('volleyball') && (
                                <SportsVolleyballIcon className='!size-5' />
                            )}
                            {!renderedIcons.has('basketball') && renderedIcons.add('basketball') && (
                                <SportsBasketballIcon className='!size-5' />
                            )}
                        </>
                    )}
                    {instalaciones.campoGrassArtificial === 1 &&
                        !renderedIcons.has('soccer') && renderedIcons.add('soccer') && (
                            <SportsSoccerIcon className='!size-5' />
                        )}
                    {instalaciones.campoGrasNatural === 1 &&
                        !renderedIcons.has('soccer') && renderedIcons.add('soccer') && (
                            <SportsSoccerIcon className='!size-5' />
                        )}
                </div>
            </div>
        </div>
    )
}

export default CanchasCard