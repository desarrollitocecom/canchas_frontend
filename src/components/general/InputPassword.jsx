import { IconButton, InputAdornment, TextField } from '@mui/material'
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { useState } from 'react';

const InputPassword = ({...props}) => {
    const [ShowPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <TextField
            fullWidth
            variant="outlined"
            type={ShowPassword ? 'text' : 'password'}
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <LockRoundedIcon className='text-gray-400' />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={
                                    ShowPassword ? 'hide the password' : 'display the password'
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                            >
                                {ShowPassword ?
                                    <VisibilityOffRoundedIcon className='text-gray-400' />
                                    :
                                    <VisibilityRoundedIcon className='text-gray-400' />
                                }
                            </IconButton>
                        </InputAdornment>
                    )
                }
            }}
            autoComplete="new-password"
            {...props}
        />
    )
}

export default InputPassword