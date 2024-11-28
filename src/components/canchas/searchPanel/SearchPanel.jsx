import { Button, Divider, IconButton, Menu } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React, { useState } from 'react'
import MenuSearch from './MenuSearch';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { useDispatch, useSelector } from 'react-redux';
import { setDeporte, setFecha, setTime } from '../../../redux/slices/FiltersSlice';
import UseUrlParamsManager from '../../../hooks/UseUrlParamsManager';

const SearchPanel = () => {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
    const { addParams } = UseUrlParamsManager();
    const { deporte, fecha, time } = useSelector((state) => state.filters);

    const deportes = [
        { value: 'futbol', icon: SportsSoccerIcon, label: 'Futbol' },
        { value: 'voley', icon: SportsVolleyballIcon, label: 'Voley' },
        { value: 'baloncesto', icon: SportsBasketballIcon, label: 'Baloncesto' },
    ]

    const handleSearch = () => {
        console.log(deporte, fecha, time);

        const deportefilter = deporte || ''
        const fechafilter = fecha || ''
        const timefilter = time || ''
        addParams({
            deporte: deportefilter,
            fecha: fechafilter,
            time: timefilter
        });

    };
    return (
        <div
            className={`relative shadow-md hover:shadow-neutral-300 transition-[box-shadow] duration-300 dark:shadow-black h-12 rounded-full flex items-center justify-center border dark:border-neutral-800 
                ${isActive ? 'bg-neutral-200 dark:bg-neutral-900 shadow-lg' : ''}`}
        >
            <MenuSearch
                type={'select'}
                id={'deporte'}
                label={'Deporte'}
                placeholder={'El deporte que elijas'}
                options={deportes}
                onActiveChange={setIsActive}
                onChange={(e) => {
                    dispatch(setDeporte(e));
                }}
            />
            <div className='h-full py-[14px]'>
                <Divider orientation="vertical" />
            </div>
            <MenuSearch
                type={'date'}
                id={'fecha'}
                label={'Fecha'}
                placeholder={'En cualquier fecha'}
                options={deportes}
                onActiveChange={setIsActive}
                onChange={(e) => {
                    dispatch(setFecha(e));
                }}
            />
            <div className='h-full py-[14px]'>
                <Divider orientation="vertical" />
            </div>
            <MenuSearch
                type={'time'}
                id={'horario'}
                label={'Horario'}
                placeholder={'Cualquier horario'}
                options={deportes}
                onActiveChange={setIsActive}
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
                        width: isActive ? 48 : 32,
                        height: isActive ? 48 : 32,
                        fontSize: 12,
                        '&:hover': {
                            backgroundColor: '#1C943E', // Color más oscuro para hover
                        },
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleSearch()
                    }}
                >
                    <SearchRoundedIcon sx={{
                        color: 'white',
                        fontSize: isActive ? 32 : 20
                    }} />
                </IconButton>
            </MenuSearch>

        </div>
    )
}

export default SearchPanel