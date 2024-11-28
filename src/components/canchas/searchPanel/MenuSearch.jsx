import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { StaticDatePicker, StaticTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

const MenuSearch = ({ children, type, id, label, placeholder, options, onActiveChange, onChange }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [SelectedOption, setSelectedOption] = useState(null)
    const { darkMode } = useSelector((state) => state.theme);

    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => {
        onActiveChange(true)
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        onActiveChange(false)
        setAnchorEl(null);
    };
    const handleSelectOption = (option) => {
        setSelectedOption(option);
        handleClose();
    };

    useEffect(() => {
        SelectedOption ? 
            onChange(SelectedOption.value)
            :
            onChange(null)

    }, [SelectedOption])
    

    return (
        <>
            <div
                className={`flex items-center h-full rounded-full hover:dark:bg-neutral-800 cursor-pointer relative overflow-hidden min-w-32
                    ${isOpen ? '!bg-white dark:!bg-neutral-700' : ''}`}
                style={{
                    boxShadow: isOpen ? darkMode ?
                        '0 3px 12px 0 rgb(0 0 0 / 1), 0 1px 2px 0 rgb(0 0 0 / 1)'
                        :
                        '0 3px 12px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.08)'
                        :
                        'none',
                }}
                onClick={handleClick}
                role='button'
                aria-label={label}
                aria-controls={open ? id : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                tabIndex="0"
            >
                <div className='h-full w-full flex justify-between items-center relative min-w-32'>
                    <div className='flex flex-col px-8 py-[14px] text-ellipsis text-nowrap min-w-32'>
                        <label htmlFor={id} className='text-xs font-[500]'>{isOpen ? label : ''}</label>
                        {SelectedOption ?
                            <p className='text-sm font-medium'>{SelectedOption.label}</p>
                            :
                            <p className={`text-sm ${isOpen ? 'font-light' : 'font-medium'}`}>{placeholder}</p>
                        }
                    </div>
                    {
                        SelectedOption && isOpen && (
                            <IconButton
                                className='!absolute right-4 z-50'
                                size='small'
                                onClick={(e) => {
                                    e.stopPropagation(); // Evita que el clic en el IconButton cierre el menú
                                    handleSelectOption(null)   // Cierra el menú al hacer clic en el IconButton
                                }}
                            >
                                <CloseRoundedIcon className='!size-4' />
                            </IconButton>
                        )
                    }
                </div>
                {children}
            </div >
            <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
                id={id}
                transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                className='!z-10'
                sx={{
                    '& .MuiPaper-root': {
                        minWidth: 250,
                        borderRadius: '20px',
                        boxShadow: '0 3px 12px 0 rgb(0 0 0 / 0.15);',
                        marginTop: '12px',
                    },
                }}
            >
                {
                    type === 'select' ? (
                        options.length > 0 && options.map((option) => (
                            <MenuItem
                                key={option.value}
                                onClick={() => {
                                    handleSelectOption(option)
                                }}
                                className="!text-sm !py-3 gap-2 !bg-transparent hover:!bg-neutral-100 hover:dark:!bg-neutral-700"
                            >
                                {option.icon && (
                                    <option.icon className="!text-[#1C943E] !size-5" />
                                )}
                                {option.label}
                            </MenuItem>
                        ))
                    ) :
                        type === 'date' ? (
                            <div className='px-4'>
                                <StaticDatePicker
                                    orientation="landscape"
                                    minDate={dayjs(new Date())}
                                    maxDate={dayjs(new Date()).add(7, 'day')}
                                    onChange={(date) => {
                                        const formattedLabel = date.format('ddd DD/MM');
                                        const formattedDate = date.format('YYYY-MM-DD');

                                        setSelectedOption({
                                            value: formattedDate,
                                            label: formattedLabel.charAt(0).toUpperCase() + formattedLabel.slice(1),
                                        })
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
                            </div>

                        )
                            :
                            type === 'time' ? (
                                <div className='px-4'>
                                    <StaticTimePicker
                                        orientation="landscape"
                                        ampm
                                        className='!bg-transparent'
                                        minutesStep={60}
                                        minTime={dayjs().hour(8).minute(0)}
                                        maxTime={dayjs().hour(23).minute(0)}
                                        views={['hours', 'minutes']}
                                        view='hours'
                                        onChange={(time) => {
                                            const timeFormat = time.format('HH:mm')
                                            setSelectedOption({
                                                value: timeFormat,
                                                label: time.format('HH:mm[hrs]'),
                                            })
                                        }}
                                        localeText={{
                                            toolbarTitle: 'Hora',

                                        }}
                                        sx={{
                                            '& .MuiDialogActions-root': {
                                                display: 'none',
                                            },
                                        }}
                                    />
                                </div>
                            ) : null
                }
            </Menu>

        </>
    )
}

export default MenuSearch