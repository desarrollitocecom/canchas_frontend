import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
            zoomControl={false}
        >
            <TileLayer
                className='invert-map'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <ZoomControl position="topright" />

            {children}
        </MapContainer>
    );
};

export default Mapa;
