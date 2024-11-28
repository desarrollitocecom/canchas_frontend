import { Button, Divider, IconButton, Menu } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import React, { useState } from 'react'
import MenuSearch from './MenuSearch';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { StaticDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const SearchPanel = () => {
    const [isActive, setIsActive] = useState(false);

    const deportes = [
        { value: 'futbol', icon: SportsSoccerIcon, label: 'Futbol' },
        { value: 'voley', icon: SportsVolleyballIcon, label: 'Voley' },
        { value: 'baloncesto', icon: SportsBasketballIcon, label: 'Baloncesto' },
    ]
    return (
        <div
            className={`relative shadow-md h-16 rounded-full flex items-center justify-center border-2 transition 
                ${isActive ? 'bg-neutral-200 shadow-lg' : ''}`}
        >
            <MenuSearch
                id={'deporte'}
                label={'Deporte'}
                placeholder={'Elige un deporte'}
                options={deportes}
                onActiveChange={setIsActive}
            />
            <div className='h-full py-[14px]'>
                <Divider orientation="vertical" />
            </div>
            <MenuSearch
                id={'fecha'}
                label={'Fecha'}
                placeholder={'Elige una fecha'}
                options={deportes}
                onActiveChange={setIsActive}
            >
                <StaticDatePicker
                    orientation="landscape"
                    minDate={dayjs(new Date())}
                    maxDate={dayjs(new Date()).add(7, 'day')}
                    localeText={{
                        toolbarTitle: 'Fecha',
                    }}
                    sx={{
                        '& .MuiDialogActions-root': {
                            display: 'none',
                        },
                    }}
                />
            </MenuSearch>
            <div className='h-full py-[14px]'>
                <Divider orientation="vertical" />
            </div>
            <MenuSearch
                id={'horario'}
                label={'Horario'}
                placeholder={'Elige un horario'}
                options={deportes}
                onActiveChange={setIsActive}
            >
            </MenuSearch>
            <IconButton
                sx={{
                    backgroundColor: '#20AC4B',
                    borderRadius: '50%',
                    position: 'absolute',
                    right: 8,
                    width: 48,
                    height: 48,
                    fontSize: 12,
                    '&:hover': {
                        backgroundColor: '#1C943E', // Color más oscuro para hover
                    },
                }}
            >
                <SearchRoundedIcon sx={{ color: 'white' }} />
            </IconButton>
        </div>
    )
}

export default SearchPanel