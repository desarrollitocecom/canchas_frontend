import React, { useEffect, useState } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuMobile from './MenuMobile';
import { resetFiltros, setDeporte, setFecha, setTime } from '../../../redux/slices/FiltersSlice';
import { Button, MenuItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { StaticDatePicker, StaticTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import UseUrlParamsManager from '../../../hooks/UseUrlParamsManager';

const SearchPanelMobile = () => {
    const dispatch = useDispatch();
    const [isActivePane, setisActivePane] = useState(false);
    const [activeMenu, setActiveMenu] = useState('deporte');
    const { deporte, fecha, time } = useSelector((state) => state.filters);
    const { addParams } = UseUrlParamsManager();

    useEffect(() => {
        if (isActivePane) {
            setActiveMenu('deporte');
        }
    }, [isActivePane]);

    const onClose = () => {
        setActiveMenu(null)
        setisActivePane(false);
    }

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


    const deportes = [
        { value: 'futbol', label: 'Futbol' },
        { value: 'voley', label: 'Voley' },
        { value: 'baloncesto', label: 'Baloncesto' },
    ];

    return (
        <div className={`w-full h-full flex flex-col ${isActivePane ? 'fixed top-0 left-0  z-50' : 'absolute top-0 left-0 pointer-events-none'}`}>
            <div className={`bg-white dark:bg-neutral-950 border-b dark:border-neutral-700 w-full flex justify-center transition-all h-20 items-center`}>
                <div className='w-full max-w-[90%] flex justify-end'>
                    <div
                        className={`flex flex-1 z-50 px-4 w-full overflow-hidden max-w-full items-center justify-start cursor-pointer pointer-events-auto relative shadow-md hover:shadow-neutral-300 dark:hover:shadow-black transition-all dark:shadow-black rounded-full border dark:border-neutral-700 h-14`}
                        onClick={() => setisActivePane(true)}
                    >
                        <div className='w-full flex gap-3'>
                            <div className='flex items-center'>
                                <SearchRoundedIcon className='!text-neutral-600 dark:!text-neutral-100 !size-7 ' />
                            </div>
                            <div className='text-ellipsis overflow-hidden'>
                                <div className='text-neutral-500 dark:text-neutral-300 font-bold text-xs'>¿En dónde quieres jugar?</div>
                                <div className='flex gap-1 items-center text-nowrap text-ellipsis overflow-hidden'>
                                    <span className='overflow-hidden text-ellipsis text-neutral-500 dark:text-neutral-400 text-xs'>Cualquier lugar de SJL • Cualquier fecha • Cualquier hora</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id='searchPanelMobile'
                className={`bg-neutral-100 dark:bg-neutral-950 fixed flex flex-col top-0 left-0 w-full h-full z-50 transition-all select-none ${isActivePane ? 'pointer-events-auto' : ' opacity-0'}`}>
                <div className={`px-5 pt-3 flex items-center  ${isActivePane ? 'animate-fadeDown' : ''}`}>
                    <div className='w-[34px] h-[34px] flex items-center justify-center border dark:border-neutral-700 shadow-sm bg-white dark:bg-neutral-900 rounded-full cursor-pointer' onClick={onClose}>
                        <CloseRoundedIcon className='!size-4' />
                    </div>
                    <div className='flex-grow text-center font-semibold'>
                        <h3>Filtros</h3>
                    </div>
                </div>
                <div id='searchPanelMobileContent' className={`w-full overflow-y-auto min-h-[500px] flex flex-col flex-1 ${isActivePane ? 'animate-fadeDown' : ''}`}
                    onClick={(e) => {
                        if (e.target.id === 'searchPanelMobileContent') {
                            setActiveMenu(null);
                        }

                    }}
                >
                    <div className='px-4 py-4 flex flex-col gap-3'>
                        <div>
                            <MenuMobile
                                value={deporte}
                                label='Deporte'
                                labelExpanded='¿Que deporte quieres jugar?'
                                isOpen={activeMenu === 'deporte'}
                                height={'h-[200px]'}
                                onOpen={() => setActiveMenu((prev) => (prev === 'deporte' ? null : 'deporte'))}
                            >
                                {deportes.length > 0 && deportes.map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        onClick={() => {
                                            setActiveMenu('fecha');
                                            dispatch(setDeporte(option.value));
                                        }}
                                        className="w-full !text-sm !py-3 gap-2 !bg-transparent hover:!bg-neutral-100 hover:dark:!bg-neutral-700"
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </MenuMobile>
                        </div>

                        <div>
                            <MenuMobile
                                value={fecha ? dayjs(fecha).format('DD MMM.') : ''}
                                label='Fecha'
                                labelExpanded='¿Cuándo quieres jugar?'
                                isOpen={activeMenu === 'fecha'}
                                height={'h-[200px]'}
                                onOpen={() => setActiveMenu((prev) => (prev === 'fecha' ? null : 'fecha'))}
                            >
                                <StaticDatePicker
                                    orientation="portrait"
                                    minDate={dayjs(new Date())}
                                    maxDate={dayjs(new Date()).add(7, 'day')}
                                    onChange={(date) => {
                                        const formattedDate = date.format('YYYY-MM-DD');
                                        setActiveMenu('time');
                                        dispatch(setFecha(formattedDate));
                                    }}
                                    localeText={{
                                        toolbarTitle: 'Fecha',
                                    }}
                                    className='!bg-transparent'
                                    sx={{
                                        '& .MuiDialogActions-root': {
                                            display: 'none',
                                        },
                                    }}
                                />
                            </MenuMobile>
                        </div>

                        <div>
                            <MenuMobile
                                value={time ? dayjs(time, "HH:mm").format('hh:mm A') : ''}
                                label='Hora'
                                labelExpanded='¿A que hora quieres jugar?'
                                isOpen={activeMenu === 'time'}
                                height={'h-[200px]'}
                                onOpen={() => setActiveMenu((prev) => (prev === 'time' ? null : 'time'))}
                            >
                                <StaticTimePicker
                                    orientation="portrait"
                                    ampm
                                    ampmInClock
                                    className='!bg-transparent'
                                    minutesStep={60}
                                    minTime={dayjs().hour(8).minute(0)}
                                    maxTime={dayjs().hour(23).minute(0)}
                                    views={['hours', 'minutes']}
                                    view='hours'
                                    onChange={(time) => {
                                        const timeFormat = time.format('HH:mm')
                                        dispatch(setTime(timeFormat));

                                    }}
                                    localeText={{
                                        toolbarTitle: 'Hora',

                                    }}
                                    sx={{
                                        '& .MuiPickersArrowSwitcher-root': {
                                            display: 'none',
                                        },
                                        '& .MuiDialogActions-root': {
                                            display: 'none',
                                        },
                                    }}
                                />
                            </MenuMobile>
                        </div>
                    </div>
                </div>
                <div className={`flex items-center justify-between p-4 px-7 ${isActivePane ? 'animate-fadeUp' : ''}`}>
                    <Button className='!capitalize' color='inherit' size='medium' onClick={() => {
                        setActiveMenu('deporte');
                        dispatch(resetFiltros());
                    }}>
                        Limpiar todo
                    </Button>
                    <Button className='!capitalize !rounded-lg flex gap-1 !font-semibold' size='large' variant='contained'
                        onClick={handleSearch}
                        sx={{
                            backgroundColor: '#1C943E',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#167A30', 
                            },
                        }}
                    >
                        <SearchRoundedIcon className='!size-6' />
                        Buscar
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SearchPanelMobile