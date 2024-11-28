import { Avatar, Button, Divider, Menu, MenuItem } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MenuUser = () => {
    const { user } = useSelector((state) => state.auth);

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const userName = user
        ? `${user.nombres.split(' ')[0]} ${user.apellidos.split(' ')[0]}`
        : 'User';
    const userImage = user?.foto || null;

    return (
        <div className={`flex justify-between items-center border h-[48px] w-[86px] rounded-full overflow-hidden hover:shadow-md transition-all duration-300 ${open && 'shadow-md'}`}>
            <Button
                onClick={handleClick}
                className='flex justify-between items-center gap-3 !px-2 !pl-[14px] w-full h-full hover:bg-transparent'
                color='inherit'
                aria-controls={'account-menu'}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : 'false'}
            >
                <MenuRoundedIcon className='!text-neutral-500 !size-5' />
                <Avatar
                    className=' !bg-neutral-500'
                    alt={userName}
                    sx={{
                        width: 30, height: 30, fontSize: 16,
                    }}
                    src={userImage}
                />
            </Button>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                className='mt-2 py-1'
                sx={{
                    '& .MuiPaper-root': {
                        minWidth: 243,
                        borderRadius: 2,
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)'
                    }
                }}
            >
                {user ? [
                    <Link to="/profile" key="profile" className='flex items-center gap-2'>
                        <MenuItem className='!text-sm !py-3 w-full'>
                            Mi Perfil
                        </MenuItem>
                    </Link>,
                    <Divider key="divider" />,
                    <MenuItem
                        key="logout"
                        className='!text-sm !py-3 w-full'
                    >
                        Cerrar Sesión
                    </MenuItem>
                ] : [
                    <Link to="/register" key="register" className='flex items-center gap-2'>
                        <MenuItem className='!text-sm !py-3 w-full'>
                            Registrarse
                        </MenuItem>
                    </Link>,
                    <Link to="/login" key="login" className='flex items-center gap-2'>
                        <MenuItem className='!text-sm !py-3 w-full'>
                            Inicia Sesión
                        </MenuItem>
                    </Link>
                ]}

            </Menu>
        </div >
    )
}

export default MenuUser