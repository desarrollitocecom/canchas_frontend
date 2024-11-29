import { Button, Divider, IconButton } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React, { useState } from 'react';
import MenuSearch from './MenuSearch';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { useDispatch, useSelector } from 'react-redux';
import { setDeporte, setFecha, setTime } from '../../../redux/slices/FiltersSlice';
import UseUrlParamsManager from '../../../hooks/UseUrlParamsManager';

const SearchPanel = () => {
    const dispatch = useDispatch();
    const { addParams } = UseUrlParamsManager();
    const { deporte, fecha, time } = useSelector((state) => state.filters);

    // Estado único para controlar el menú activo
    const [activeMenu, setActiveMenu] = useState(null);

    const deportes = [
        { value: 'futbol', icon: SportsSoccerIcon, label: 'Futbol' },
        { value: 'voley', icon: SportsVolleyballIcon, label: 'Voley' },
        { value: 'baloncesto', icon: SportsBasketballIcon, label: 'Baloncesto' },
    ];

    const handleSearch = () => {
        console.log(deporte, fecha, time);
        const deportefilter = deporte || '';
        const fechafilter = fecha || '';
        const timefilter = time || '';
        addParams({
            deporte: deportefilter,
            fecha: fechafilter,
            time: timefilter,
        });
    };

    return (
        <div className="relative flex justify-center">
            <div
                className={`relative shadow-md hover:shadow-neutral-300 dark:hover:shadow-black transition-[box-shadow] duration-300 dark:shadow-black h-12 rounded-full flex items-center justify-center border dark:border-neutral-700`}
            >
                <MenuSearch
                    type="select"
                    id="deporte"
                    label="Deporte"
                    placeholder="El deporte que elijas"
                    options={deportes}
                    isOpen={activeMenu === 'deporte'}
                    onOpen={() => setActiveMenu('deporte')}
                    onClose={() => setActiveMenu(null)}
                    onChange={(e) => {
                        dispatch(setDeporte(e));
                    }}
                />
                <div className="h-full py-[14px]">
                    <Divider orientation="vertical" />
                </div>
                <MenuSearch
                    type="date"
                    id="fecha"
                    label="Fecha"
                    placeholder="En cualquier fecha"
                    options={deportes}
                    isOpen={activeMenu === 'fecha'}
                    onOpen={() => setActiveMenu('fecha')}
                    onClose={() => setActiveMenu(null)}
                    onChange={(e) => {
                        dispatch(setFecha(e));
                    }}
                />
                <div className="h-full py-[14px]">
                    <Divider orientation="vertical" />
                </div>
                <MenuSearch
                    type="time"
                    id="horario"
                    label="Horario"
                    placeholder="Cualquier horario"
                    options={deportes}
                    isOpen={activeMenu === 'horario'}
                    onOpen={() => setActiveMenu('horario')}
                    onClose={() => setActiveMenu(null)}
                    onChange={(e) => {
                        dispatch(setTime(e));
                    }}
                >
                    <IconButton
                        aria-label="search"
                        sx={{
                            backgroundColor: '#20AC4B',
                            borderRadius: '50%',
                            marginRight: '8px',
                            width: 32,
                            height: 32,
                            fontSize: 12,
                            '&:hover': {
                                backgroundColor: '#1C943E',
                            },
                        }}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleSearch();
                        }}
                    >
                        <SearchRoundedIcon sx={{ color: 'white', fontSize: 20 }} />
                    </IconButton>
                </MenuSearch>
            </div>
        </div>
    );
};

export default SearchPanel;
