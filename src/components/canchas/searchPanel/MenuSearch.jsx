import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const MenuSearch = ({ id, label, placeholder, options, onActiveChange, children }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [SelectedOption, setSelectedOption] = useState(null)

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

    return (
        <>
            <div
                className={`h-full rounded-full !min-w-64 px-8 py-[14px] hover:bg-neutral-200 cursor-pointer relative  
                    ${isOpen ? '!bg-white' : ''}`}
                style={{
                    boxShadow: isOpen ? '0 3px 12px 0 rgb(0 0 0 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.08)' : 'none',
                }}
                onClick={handleClick}
                aria-controls={open ? id : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                <div className='h-full flex flex-col justify-center'>
                    <label htmlFor={id} className='text-xs font-[500]'>{label}</label>
                    {SelectedOption ?
                        <p className='text-sm font-medium'>{SelectedOption.label}</p>
                        :
                        <p className='text-sm font-light'>{placeholder}</p>
                    }
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
                                <CloseRoundedIcon className='!size-5' />
                            </IconButton>
                        )
                    }
                </div>
            </div >
            {options.length > 0 && (
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
                        children ? (
                            children
                        ) : (
                            options.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    onClick={() => handleSelectOption(option)}
                                    className="!text-sm !py-3 gap-2 !bg-transparent hover:!bg-neutral-100"
                                >
                                    {option.icon && (
                                        <option.icon className="!text-[#1C943E] !size-5" />
                                    )}
                                    {option.label}
                                </MenuItem>
                            ))
                        )
                    }
                </Menu>
            )}

        </>
    )
}

export default MenuSearch