import React, { useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import iconUrl from '../../../assets/icons/marker-cancha.webp'
import StarIcon from '@mui/icons-material/Star';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

const MarkerCancha = ({ data }) => {
    const map = useMap();

    useEffect(() => {
        if (data?.length > 0) {
            const bounds = data.map(cancha => cancha.geolocalizacion);
            map.flyToBounds(bounds);
        }
    }, [data, map]);

    const customIcon = L.icon({
        iconUrl, // URL del ícono personalizado
        iconSize: [25, 34], // Tamaño del ícono
        iconAnchor: [16, 32], // Punto de anclaje del ícono
        popupAnchor: [0, -32], // Punto de anclaje para los popups
        shadowSize: [45, 40], // Tamaño de la sombra
        shadowAnchor: [17, 40], // Punto de anclaje de la sombra
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });

    return (
        <>
            {data?.map((cancha, index) => {
                const renderedIcons = new Set();

                return (
                    <Marker
                        key={index}
                        position={cancha.geolocalizacion}
                        icon={customIcon}
                    >
                        <Popup
                            className='canchas-popup'
                        >
                            <div className='cursor-pointer'>
                                <div className='w-80 h-auto max-w-full aspect-[5/3] bg-black'>
                                    <img
                                        className='h-full w-full object-cover'
                                        src={cancha.imagenes[0]}
                                        alt={"imagen" + cancha.nombreCentro}
                                    />
                                </div>
                                <div className="py-3 px-4 dark:text-white flex flex-col gap-[2px]">
                                    <div className='flex items-center justify-between text-[15px]'>
                                        <h2 className="font-semibold text-nowrap truncate max-w-full">Campo deportivo {cancha.nombreCentro}</h2>
                                        <span className='flex items-center gap-1 font-normal'>
                                            <StarIcon className='!size-4' />
                                            {parseFloat(cancha.rating).toFixed(2)}
                                        </span>
                                    </div>
                                    <div className='flex items-center gap-1 text-neutral-500 dark:text-neutral-300'>
                                        {cancha.instalaciones.losaCementoMultiuso === 1 && (
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
                                        {cancha.instalaciones.campoGrassArtificial === 1 &&
                                            !renderedIcons.has('soccer') && renderedIcons.add('soccer') && (
                                                <SportsSoccerIcon className='!size-5' />
                                            )}
                                        {cancha.instalaciones.campoGrasNatural === 1 &&
                                            !renderedIcons.has('soccer') && renderedIcons.add('soccer') && (
                                                <SportsSoccerIcon className='!size-5' />
                                            )}
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                )
            })}
        </>
    );
};

export default MarkerCancha;
