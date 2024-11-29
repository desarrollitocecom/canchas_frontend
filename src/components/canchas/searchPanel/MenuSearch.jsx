import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { StaticDatePicker, StaticTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
const MenuSearch = ({
    children,
    type,
    id,
    label,
    placeholder,
    options,
    isOpen,
    isActivePane,
    setActiveMenu,
    onOpen,
    onClose,
    onChange,
    icon
}) => {
    const [SelectedOption, setSelectedOption] = useState(null);
    const anchorElRef = useRef(null)
    const { darkMode } = useSelector((state) => state.theme);

    const handleClick = (event) => {
        setTimeout(() => {
            onOpen();
        }, 100);
    };

    const handleClose = () => {
        onClose(); // Notifica al componente principal que este menú se cierra
    };

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setActiveMenu(null);
    };

    useEffect(() => {
        SelectedOption ? onChange(SelectedOption.value) : onChange(null);
    }, [SelectedOption]);

    return (
        <>
            <div
                ref={anchorElRef}
                className={`flex flex-1 ${children ? 'min-w-36' : ''} items-center h-full rounded-full cursor-pointer relative overflow-hidden text-ellipsis z-50 ${isOpen ? '!bg-white dark:!bg-neutral-700' : ''} ${isActivePane ? 'min-w-52' : ''}`}
                style={{
                    boxShadow: isOpen
                        ? darkMode
                            ? '0 3px 12px 0 rgb(0 0 0 / 1), 0 1px 2px 0 rgb(0 0 0 / 1)'
                            : '0 3px 12px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.08)'
                        : 'none',
                }}
                onClick={handleClick}
                role="button"
                aria-label={label}
                aria-controls={isOpen ? id : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                tabIndex="0"
            >
                <div className="h-full flex flex-1 justify-between items-center relative overflow-hidden text-ellipsis">
                    <div className={`flex flex-col px-5 lg:px-8 py-[14px] overflow-hidden text-ellipsis text-nowrap `}>
                        <label htmlFor={id} className="text-xs font-[500]">{isActivePane ? label : ''}</label>
                        {SelectedOption ? (
                            <div className="flex items-center gap-1 flex-nowrap">
                                {!isActivePane && icon}
                                <p className='text-sm font-medium overflow-hidden text-ellipsis whitespace-nowrap'>{SelectedOption.label}</p>
                            </div>
                        //     <p >
                        //     {!isActivePane && icon} {SelectedOption.label}
                        // </p>
                        ) : (
                            <p className={`text-sm overflow-hidden text-ellipsis ${isOpen ? 'font-light' : 'font-medium text-xs'}`}>{placeholder}</p>
                        )}
                    </div>
                    {SelectedOption && isOpen && (
                        <IconButton
                            className="!absolute right-3 z-50"
                            size="small"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedOption(null);
                            }}
                        >
                            <CloseRoundedIcon className="!size-4" />
                        </IconButton>
                    )}
                </div>
                {children}
            </div>
            <Menu
                key={id}
                anchorEl={anchorElRef.current} // Adjust if required
                open={isOpen}
                onClose={handleClose}
                id={id}
                transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                className='!z-10'
                disablePortal
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
    );
};

export default MenuSearch;

