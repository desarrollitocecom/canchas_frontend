import React from 'react';
import { Button } from '@mui/material';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { useFormik } from 'formik';
import { Navigate } from 'react-router-dom';

const ForgotUserForm = () => {
    const formik = useFormik({
        initialValues: {
            phone: '',
        },
        validate: (values) => {
            const errors = {};
            if (!values.phone) {
                errors.phone = 'Requerido'
            } else if ((values.phone || "").replace(/\ /g, "").length < 11) {
                errors.phone = 'Numero de telefono invalido'
            }
            return errors;
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form
            className="flex flex-col gap-3 max-w-sm mx-auto p-4 bg-white dark:bg-neutral-900 rounded-lg"
            onSubmit={formik.handleSubmit}
        >
            <div className="flex flex-col gap-5 items-center mt-2">
                <PhoneInput
                    country={'pe'}
                    value={formik.values.phone}
                    onChange={(phone) => formik.setFieldValue('phone', phone)}
                    inputStyle={{
                        width: '100%',
                        border: formik.touched.phone && formik.errors.phone ? '1px solid red' : '1px solid #ccc',
                        borderRadius: '4px',
                        height: '56px',
                        backgroundColor: 'var(--tw-bg-opacity)',
                    }}
                    inputClass={`${
                        formik.touched.phone && formik.errors.phone ? 'animate-shake' : ''
                    } dark:bg-gray-800 dark:border-gray-700 dark:text-white`}
                    placeholder="Ingrese el número de teléfono"
                    dropdownStyle={{
                        zIndex: 100,
                        backgroundColor: 'white', 
                        color: 'black', 
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        overflowY: 'scroll',
                    }}
                    containerStyle={{ width: '100%' }}
                    buttonStyle={{
                        backgroundColor: 'transparent',
                    }}
                    aria-label="Número de teléfono"
                />
                {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-600 dark:text-red-400 text-sm mt-1">{formik.errors.phone}</p>
                )}
            </div>
            <Button
                fullWidth
                className="!capitalize"
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                    mt: 1,
                    backgroundColor: 'primary.main',
                    '&:hover': {
                        backgroundColor: 'primary.dark',
                    },
                }}
            >
                Enviar
            </Button>
        </form>
    );
}

export default ForgotUserForm