import React, { useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import iconUrl from '../../../assets/icons/marker-cancha.webp'

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
            {data?.map((cancha, index) => (
                <Marker
                    key={index}
                    position={cancha.geolocalizacion}
                    icon={customIcon}
                >
                    <Popup>
                        <div className='shadow-lg bg-white'>
                            asdasd
                        </div>
                    </Popup>
                </Marker>
            ))}
        </>
    );
};

export default MarkerCancha;
