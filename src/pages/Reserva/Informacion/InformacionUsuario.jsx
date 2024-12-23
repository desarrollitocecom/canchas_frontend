

import { Button, CircularProgress, FormHelperText, InputAdornment, TextField } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveStep } from '../../../redux/slices/ReservaSlice';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import PhoneInputField from '../../../components/general/PhoneInputField';
// import PhoneInput from 'react-phone-input-2';

const InformacionUsuario = () => {
  const navigate = useNavigate()
  const TimeoutRef = useRef(null)
  const [isLoading, setisLoading] = useState(false)

  const HandleSearchDNI = (e) => {
    formik.setFieldValue('dni', e.target.value)
    if (TimeoutRef.current) {
      clearTimeout(TimeoutRef.current)
    }

    TimeoutRef.current = setTimeout(() => {
      if (e.target.value.length === 8) {
        setisLoading(true)
        setTimeout(() => {
          setisLoading(false)
        }, 2000);
      }
    }, 800);

  }

  const nextStep = () => {
    const path = window.location.pathname
    navigate(path + '/horarios')
  }

  const formik = useFormik({
    initialValues: {
      dni: '',
      nombreCompleto: '',
      direccion: '',
      ubigeo: '',
      email: '',
      celular: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.dni) {
        errors.dni = "DNI requerido";
      } else if (!/^[0-9]{8}$/.test(values.dni)) {
        errors.dni = "DNI inválido";
      }

      // if (!values.nombreCompleto) {
      //   errors.nombreCompleto = "Nombre requerido";
      // }

      // if (!values.direccion) {
      //   errors.direccion = "Direccion requerida";
      // }

      // if (!values.ubigeo) {
      //   errors.ubigeo = "Ubigeo requerido";
      // }

      if (!values.email) {
        errors.email = "Email requerido";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Correo electronico invalido";
      }

      if (!values.celular) {
        errors.celular = "Celular requerido";
      } else if (values.celular.replace(/\s/g, "").length < 11) {
        errors.celular = "Celular inválido";
      }


      return errors
    },
    onSubmit: (values) => {
      console.log(values)
      nextStep()
    }
  })


  return (
    <div className='flex flex-col h-full'>
      <h1 className='font-bold text-xl mb-5 px-5'>Informacion</h1>
      <form onSubmit={formik.handleSubmit} className='flex flex-col flex-1 w-full overflow-auto'>
        <div className='flex-1 overflow-auto px-5'>
          <div className='w-full grid grid-cols-2 gap-4 pb-3'>
            <div className={`col-span-2 md:col-span-1 ${formik.touched.dni && formik.errors.dni ? 'animate-shake' : ''}`}>
              <label htmlFor="dni" className='block mb-1 text-sm font-medium text-neutral-500 dark:text-neutral-300'>N° DNI</label>
              <TextField
                fullWidth
                autoFocus
                id="dni"
                size='small'
                variant="outlined"
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        {!isLoading ?
                          <SearchIcon />
                          :
                          <CircularProgress size={20} />
                        }
                      </InputAdornment>
                    )
                  }
                }}
                onChange={HandleSearchDNI}
                onBlur={formik.handleBlur}
                value={formik.values.dni}
                name='dni'
                error={formik.touched.dni && Boolean(formik.errors.dni)}
                helperText={formik.touched.dni && formik.errors.dni || "Ingrese su DNI"}
              />
            </div>
            <div className='col-span-2 md:col-span-2'>
              <label htmlFor="Nombre" className='block mb-1 text-sm font-medium text-neutral-500 dark:text-neutral-300'>Nombre Completo</label>
              <TextField
                disabled
                fullWidth
                id="Nombre"
                size='small'
                variant="outlined"
                value={formik.values.nombreCompleto}
                name='nombreCompleto'
                onChange={formik.handleChange}
                helperText=""
              // onBlur={formik.handleBlur}
              // error={formik.touched.nombreCompleto && Boolean(formik.errors.nombreCompleto)}
              // helperText={formik.touched.nombreCompleto && formik.errors.nombreCompleto || " "}

              />
            </div>
            <div className='col-span-2 md:col-span-1'>
              <label htmlFor="Dirección" className='block mb-1 text-sm font-medium text-neutral-500 dark:text-neutral-300'>Dirección</label>
              <TextField
                disabled
                fullWidth
                id="Dirección"
                size='small'
                variant="outlined"
                value={formik.values.direccion}
                name='direccion'
                onChange={formik.handleChange}
                helperText=""
              // onBlur={formik.handleBlur}
              // error={formik.touched.direccion && Boolean(formik.errors.direccion)}
              // helperText={formik.touched.direccion && formik.errors.direccion || " "}
              />
            </div>
            <div className='col-span-2 md:col-span-1'>
              <label htmlFor="Ubigeo" className='block mb-1 text-sm font-medium text-neutral-500 dark:text-neutral-300'>Ubigeo</label>
              <TextField
                disabled
                fullWidth
                id="Ubigeo"
                size='small'
                variant="outlined"
                value={formik.values.ubigeo}
                name='ubigeo'
                onChange={formik.handleChange}
                helperText=""
              // onBlur={formik.handleBlur}
              // error={formik.touched.ubigeo && Boolean(formik.errors.ubigeo)}
              // helperText={formik.touched.ubigeo && formik.errors.ubigeo || " "}
              />
            </div>
            <div className={`col-span-2 md:col-span-1 ${formik.touched.email && formik.errors.email ? 'animate-shake' : ''}`}>
              <label htmlFor="email" className='block mb-1 text-sm font-medium text-neutral-500 dark:text-neutral-300'>Correo Electrónico</label>
              <TextField
                fullWidth
                id="email"
                size='small'
                variant="outlined"
                value={formik.values.email}
                name='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email || " "}
              />
            </div>
            <div className={`col-span-2 md:col-span-1 ${formik.touched.celular && formik.errors.celular ? 'animate-shake' : ''}`}>
              <label htmlFor="celular" className='block mb-1 text-sm font-medium text-neutral-500 dark:text-neutral-300'>N° Celular</label>
              <PhoneInputField
                value={formik.values.celular}
                onChange={(phone) => formik.setFieldValue("celular", phone)}
                error={formik.errors.celular}
                helperText={formik.touched.celular && formik.errors.celular || " "}
                onBlur={formik.handleBlur}
                name='celular'
                touched={formik.touched.celular}
              />
            </div>
          </div>
        </div>
        <div className='px-5 flex justify-end'>
          <Button
            variant="contained"
            color="primary"
            size="small"
            type='submit'
            className='!capitalize'
          >
            Siguiente
          </Button>
        </div>
      </form>
    </div>
  )
}

export default InformacionUsuario