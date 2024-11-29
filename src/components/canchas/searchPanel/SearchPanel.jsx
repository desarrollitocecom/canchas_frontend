import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UseUrlParamsManager from '../../../hooks/UseUrlParamsManager';
import MenuSearch from './MenuSearch';
import { setDeporte, setFecha, setTime } from '../../../redux/slices/FiltersSlice';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SportsScoreRoundedIcon from '@mui/icons-material/SportsScoreRounded';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

import { Divider, IconButton } from '@mui/material';

const SearchPanel = () => {
    const [isActivePane, setisActivePane] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const dispatch = useDispatch();
    const { addParams } = UseUrlParamsManager();
    const { deporte, fecha, time } = useSelector((state) => state.filters);

    const deportes = [
        { value: 'futbol', icon: SportsSoccerIcon, label: 'Futbol' },
        { value: 'voley', icon: SportsVolleyballIcon, label: 'Voley' },
        { value: 'baloncesto', icon: SportsBasketballIcon, label: 'Baloncesto' },
    ];

    const onClose = () => {
        setActiveMenu(null)
        setTimeout(() => {
            setisActivePane(false);
        }, 100);
    };

    const handleSearch = () => {
        const deportefilter = deporte || '';
        const fechafilter = fecha || '';
        const timefilter = time || '';
        addParams({
            deporte: deportefilter,
            fecha: fechafilter,
            time: timefilter,
        });
        onClose();
    };

    return (
        <div className={`w-full h-full flex flex-col ${isActivePane ? 'fixed top-0 left-0' : 'absolute top-0 left-0 pointer-events-none'}`}>
            <div className={`bg-white dark:bg-neutral-950 border-b dark:border-neutral-700 w-full flex justify-center transition-all
                ${isActivePane ? 'h-40 items-end pb-5 shadow-sm' : 'h-20 items-center pointer-events-auto'}
                `}>
                <div
                    className={`z-50 w-full min-w-max cursor-pointer relative shadow-md hover:shadow-neutral-300 dark:hover:shadow-black transition-all dark:shadow-black h-12 rounded-full flex items-center justify-center border dark:border-neutral-700
                        ${isActivePane ? 'max-w-max h-16' : 'max-w-lg'} ${activeMenu ? 'bg-neutral-200 dark:bg-neutral-800' : 'bg-transparent'}
                        `}
                    onClick={() => setisActivePane(true)}
                >
                    <MenuSearch
                        type="select"
                        id="deporte"
                        label="Deporte"
                        placeholder={isActivePane ? 'Elije un deporte' : "El deporte que elijas"}
                        options={deportes}
                        isOpen={activeMenu === 'deporte'}
                        isActivePane={isActivePane}
                        setActiveMenu={setActiveMenu}
                        onOpen={() => setActiveMenu((prev) => (prev === 'deporte' ? null : 'deporte'))}
                        onClose={onClose}
                        onChange={(e) => {
                            dispatch(setDeporte(e));
                        }}
                        icon={<SportsScoreRoundedIcon className='text-neutral-500 !size-4'/>}
                    />
                    <div className="h-full py-[14px]">
                        <Divider orientation="vertical" />
                    </div>
                    <MenuSearch
                        type="date"
                        id="fecha"
                        label="Fecha"
                        placeholder={isActivePane ? 'Elije una fecha' : "En cualquier fecha"}
                        options={deportes}
                        isOpen={activeMenu === 'fecha'}
                        isActivePane={isActivePane}
                        setActiveMenu={setActiveMenu}
                        onOpen={() => setActiveMenu((prev) => (prev === 'fecha' ? null : 'fecha'))}
                        onClose={onClose}
                        onChange={(e) => {
                            dispatch(setFecha(e));
                        }}
                        icon={<DateRangeRoundedIcon className='text-neutral-500 !size-4'/>}
                    />
                    <div className="h-full py-[14px]">
                        <Divider orientation="vertical" />
                    </div>
                    <MenuSearch
                        type="time"
                        id="horario"
                        label="Horario"
                        placeholder={isActivePane ? 'Elije un horario' : 'En cualquier horario'}
                        options={deportes}
                        isOpen={activeMenu === 'horario'}
                        isActivePane={isActivePane}
                        setActiveMenu={setActiveMenu}
                        onOpen={() => setActiveMenu((prev) => (prev === 'horario' ? null : 'horario'))}
                        onClose={onClose}
                        onChange={(e) => {
                            dispatch(setTime(e));
                        }}
                        icon={<AccessTimeRoundedIcon className='text-neutral-500 !size-4'/>}
                    >
                        <IconButton
                            aria-label="search"
                            sx={{
                                backgroundColor: '#20AC4B',
                                borderRadius: '50%',
                                marginRight: '8px',
                                width: !isActivePane ? 32 : 48,
                                height: !isActivePane ? 32 : 48,
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
            <div
                className={`w-full flex-1 transition-all opacity-10 ${isActivePane ? 'bg-black' : 'bg-transparent'}`}
                onClick={() => setisActivePane(false)}
            ></div>
        </div>
    )
}

export default SearchPanel