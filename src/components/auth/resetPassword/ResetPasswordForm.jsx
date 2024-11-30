import React from 'react';
import { Button, InputAdornment, TextField } from '@mui/material';
import { useFormik } from 'formik';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const ResetPasswordForm = () => {
    const formik = useFormik({
        initialValues: {
            correo: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.correo) {
                errors.correo = 'Requerido'
            } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo) ) {
                errors.correo = 'Correo electronico invalido';
            }
            return errors;
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

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
    );
};

export default ResetPasswordForm;
