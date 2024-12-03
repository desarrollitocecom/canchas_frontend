import React, { useRef } from 'react';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const OtpForm = () => {

    const inputRefs = useRef([]);

    const formik = useFormik({
        initialValues: {
            otp1: '',
            otp2: '',
            otp3: '',
            otp4: '',
        },
        validateOnChange: false, // Desactiva la validación al escribir
        validateOnBlur: false,  // Desactiva la validación al desenfocar

        validate: (values) => {
            const errors = {};
            if (!values.otp1 || !values.otp2 || !values.otp3 || !values.otp4) {
                errors.otp = 'El campo OTP no esta completo';
            }
            return errors;
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleInputChange = (e, index) => {
        const { value } = e.target;
        if (/^\d?$/.test(value)) {
            formik.setFieldValue(`otp${index + 1}`, value);
            if (value && index < 3) {
                inputRefs.current[index + 1]?.focus(); 
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !formik.values[`otp${index + 1}`] && index > 0) {
            inputRefs.current[index - 1]?.focus(); // Mueve el foco al anterior input si está vacío
        }
    };

    return (
        <form
            className="flex flex-col items-center gap-4 max-w-sm mx-auto "
            onSubmit={formik.handleSubmit}
        >
            <div
                className="flex gap-4 justify-center items-center"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {['otp1', 'otp2', 'otp3', 'otp4'].map((field, index) => (
                    <TextField
                        key={index}
                        inputRef={(el) => (inputRefs.current[index] = el)}
                        className={formik.touched[field] && formik.errors.otp ? 'animate-shake' : ''}
                        name={field}
                        value={formik.values[field]}
                        onChange={(e) => handleInputChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        onBlur={formik.handleBlur}
                        error={formik.touched[field] && Boolean(formik.errors.otp)}
                        helperText={formik.touched[field] && formik.errors[field]}
                        slotProps={{
                            input: {
                                style: {
                                    fontSize: '1.5rem',
                                    width: '3.5rem',
                                    height: '3.5rem',
                                    borderRadius: '0.5rem',
                                },
                            }

                        }}
                        sx={{
                            width: '3.5rem',
                            height: '3.5rem',
                            borderRadius: '0.5rem',
                            '& .MuiInputBase-input': {
                                textAlign: 'center',                               
                            },
                        }}
                        variant="outlined"
                    />
                ))}
            </div>
            <p className="text-red-600 text-xs font-semibold">{formik.errors.otp}</p>


            <div className="flex gap-4 justify-center">
            <Link to="/change-password">

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="!capitalize"
                    >
                    Verificar
                </Button>
                    </Link>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    className="!capitalize"
                    onClick={() => alert('OTP reenviado')}
                >
                    Reenviar OTP
                </Button>
            </div>
        </form>
    );
};

export default OtpForm;
