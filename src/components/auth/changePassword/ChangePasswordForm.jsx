import React from 'react'
import { useFormik } from 'formik'
import InputPassword from '../../general/InputPassword'
import { Button } from '@mui/material'
import { validate } from 'uuid'

const ChangePasswordForm = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.password) {
        errors.password = 'Requerido';
      } else if (values.password.length < 6) {
        errors.password = 'La contraseña debe tener al menos 6 caracteres';
      } else if (!/[A-Z]/.test(values.password)) {
        errors.password = 'La contraseña debe contener al menos una letra mayúscula';
      } else if (!/[0-9]/.test(values.password)) {
        errors.password = 'La contraseña debe contener al menos un número';
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Requerido';
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Las contraseñas no coinciden';
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  return (
    <form className='flex flex-col gap-3' onSubmit={formik.handleSubmit}>
      <div className='flex flex-col gap-5'>
        <InputPassword
          className={formik.touched.password && formik.errors.password ? 'animate-shake' : ''}
          label="Contraseña"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password || "Ingrese la nueva contraseña"}
        />
      </div>
      <div className='flex flex-col gap-5'>
        <InputPassword
          className={formik.touched.confirmPassword && formik.errors.confirmPassword ? 'animate-shake' : ''}
          label="Confirmar Contraseña"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword || "Ingrese la nueva contraseña"}
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
        Cambiar
      </Button>
    </form>
  )
}

export default ChangePasswordForm