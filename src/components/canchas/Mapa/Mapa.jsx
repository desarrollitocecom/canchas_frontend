import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapUpdater = ({ position, zoom }) => {
    const map = useMap();

    useEffect(() => {
        if (map) {
            map.flyTo(position, zoom);
        }
    }, [position, zoom, map]);

    return null;
};

const Mapa = ({
    position = [-11.989988, -77.007206],
    zoom = 13,
    children,
}) => {
    return (
        <MapContainer
            center={position}
            zoom={zoom}
            style={{ height: '100%', width: '100%' }}
            className="select-none"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapUpdater position={position} zoom={zoom} />
            {children}
        </MapContainer>
    );
};

export default Mapa;
