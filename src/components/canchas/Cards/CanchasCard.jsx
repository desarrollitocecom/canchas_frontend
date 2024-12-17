import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Skeleton } from '@mui/material';


const CanchasCard = ({ nombre, imagenes, instalaciones, rating, isLoading }) => {
    const renderedIcons = new Set();

    if (isLoading) {
        return (
            <div className="card-canchas w-full overflow-hidden cursor-pointer select-none rounded-xl">
                <div className="relative w-full rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                    <Skeleton animation="wave" variant="rectangular" width="100%" height={200} />
                </div>
                <div className="pt-3">
                    <div className='flex items-center justify-between text-[15px]'>
                        <Skeleton animation="wave" variant="text" width="70%" height={20} />
                        <span className='flex items-center gap-1 font-normal'>
                            <Skeleton animation="wave" variant="text" width="40px" height={20} />
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Skeleton animation="wave" variant="text" width="15%" height={20} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="card-canchas w-full overflow-hidden cursor-pointer select-none rounded-xl">
            <div className="relative w-full rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                <Swiper
                    pagination={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                >
                    {imagenes.map((imagen, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={imagen}
                                alt={nombre}
                                className="w-full h-full object-cover object-center aspect-[5/3]"
                            />

                        </SwiperSlide>
                    ))}
                </Swiper>
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