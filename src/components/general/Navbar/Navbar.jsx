import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { user } = useSelector((state) => state.auth);
    const [Tab, setTab] = useState(0)
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <BottomNavigation
            showLabels
            value={Tab}
            className='border-t dark:border-neutral-700 dark:!bg-neutral-950 md:!hidden'
            onChange={(e, newValue) => {
                setTab(newValue);
            }}
            sx={{
                height: '65px',
                '& .Mui-selected': {
                    color: '#1C943E !important'
                }
            }}
        >
            <BottomNavigationAction
                label="Buscar"
                onClick={() => handleNavigate('/')}
                icon={<SearchRoundedIcon />}
            />
            <BottomNavigationAction
                label="Favoritos"
                onClick={() => handleNavigate('/favoritos')}
                icon={<FavoriteBorderRoundedIcon />}
            />
            {user ?
                (
                    <BottomNavigationAction
                        label="Perfil"
                        onClick={() => handleNavigate('/perfil')}
                        icon={<AccountCircleRoundedIcon />}
                    />
                )
                :
                (
                    <BottomNavigationAction
                        label="Iniciar sesión"
                        onClick={() => handleNavigate('/login')}
                        icon={<AccountCircleRoundedIcon />}
                    />
                )
            }
        </BottomNavigation>
    )
}

export default Navbar