import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
    const position = [-11.989988, -77.007206    ];
    return (
        <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }} className='select-none'>
            <TileLayer
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default Mapa