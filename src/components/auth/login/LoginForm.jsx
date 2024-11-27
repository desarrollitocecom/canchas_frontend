import React, { useEffect } from 'react'
import { Button, InputAdornment, TextField } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import InputPassword from '../../general/InputPassword';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../redux/slices/AuthSlice';
import { useFormik } from 'formik';

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'El correo es requerido';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Correo electronico invalido';
            }
            if (!values.password) {
                errors.password = 'La contraseña es requerida';
            } else if (values.password.length < 6) {
                errors.password = 'La contraseña debe tener al menos 6 caracteres';
            }
            return errors;
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })


    return (
        <form className='flex flex-col gap-3' onSubmit={formik.handleSubmit}>
            <div className='flex flex-col gap-5'>
                <TextField
                    fullWidth
                    className={formik.touched.email && formik.errors.email ? 'animate-shake' : ''}
                    variant="outlined"
                    label="Correo electronico"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email || "Ingrese el Correo electronico"}
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailRoundedIcon className='text-gray-400' />
                                </InputAdornment>
                            )
                        }
                    }}
                />
                <InputPassword
                    className={formik.touched.password && formik.errors.password ? 'animate-shake' : ''}
                    label="Contraseña"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password || "Ingrese la contraseña"}
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