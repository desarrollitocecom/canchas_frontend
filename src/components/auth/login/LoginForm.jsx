import React from 'react'
import { Button, InputAdornment, TextField } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import InputPassword from '../../general/InputPassword';

const LoginForm = () => {
    return (
        <form className='flex flex-col gap-3'>
            <div className='flex flex-col gap-5'>
                <TextField
                    fullWidth
                    variant="outlined"
                    label="Correo electronico"
                    name="username"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailRoundedIcon className='text-gray-400' />
                                </InputAdornment>
                            )
                        }
                    }}
                    // value={values.username || ''}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={touched.username && Boolean(errors.username)}
                    helperText={"Ingrese el Correo electronico"}
                />
                <InputPassword 
                    name="password"
                    label="Contraseña"
                    // value={values.password || ''}
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // error={touched.password && Boolean(errors.password)}
                    // helperText={touched.password && errors.password}
                    helperText={"Ingrese el Correo electronico"}
                />
            </div>
            <Button
                fullWidth
                className='!capitalize'
                variant="contained"
                color="primary"
                type="submit"
                // disabled={isSubmitting}
                sx={{ mt: 1 }}
            >
                Iniciar sesión
            </Button>
        </form>
    )
}

export default LoginForm