

import { Button, TextField } from '@mui/material'
import React from 'react'

const InformacionUsuario = () => {
  return (
    <div className='flex flex-col h-full'>
      <h1 className='font-bold text-xl mb-5 px-5'>Informacion</h1>
      <form className='flex flex-col flex-1 w-full overflow-auto'>
        <div className='flex-1 overflow-auto px-5'>
          <div className='w-full grid grid-cols-2 gap-4'>
            <div className='col-span-2 md:col-span-1'>
              <div>
                <label htmlFor="dni" className='block mb-1 text-sm font-medium text-neutral-500 dark:text-neutral-300'>N° DNI</label>
                <TextField
                  fullWidth
                  id="dni"
                  size='small'
                  variant="outlined"
                  helperText="Ingrese su DNI"
                />
              </div>
            </div>
            <div className='col-span-2 md:col-span-2'>
              <label htmlFor="Nombre" className='block mb-1 text-sm font-medium text-neutral-500 dark:text-neutral-300'>Nombre Completo</label>
              <TextField
                disabled
                fullWidth
                id="Nombre"
                size='small'
                variant="outlined"
                helperText="Ingrese su nombre"
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
                helperText=" "
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
                helperText=" "
              />
            </div>
            <div className='col-span-2 md:col-span-1'>
              <label htmlFor="email" className='block mb-1 text-sm font-medium text-neutral-500 dark:text-neutral-300'>Correo Electrónico</label>
              <TextField
                disabled
                fullWidth
                id="email"
                size='small'
                variant="outlined"
                helperText=" "
              />
            </div>
            <div className='col-span-2 md:col-span-1'>
              <label htmlFor="celular" className='block mb-1 text-sm font-medium text-neutral-500 dark:text-neutral-300'>N° Celular</label>
              <TextField
                disabled
                fullWidth
                id="celular"
                size='small'
                variant="outlined"
                helperText=" "
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