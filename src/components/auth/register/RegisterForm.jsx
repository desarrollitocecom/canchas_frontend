import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      dni: '',
      phone: '',
      password: '',
      confirmPassword: '',
      termsAccepted: false,
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = 'El nombre es requerido';
      }
      if (!values.lastName) {
        errors.lastName = 'Los apellidos son requeridos';
      }
      if (!values.email) {
        errors.email = 'El correo electrónico es requerido';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Correo electrónico inválido';
      }
      if (!values.dni) {
        errors.dni = 'El DNI es requerido';
      }
      if (!values.phone) {
        errors.phone = 'El número de celular es requerido';
      }
      if (!values.password) {
        errors.password = 'La contraseña es requerida';
      } else if (values.password.length < 6) {
        errors.password = 'La contraseña debe tener al menos 6 caracteres';
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Debes confirmar la contraseña';
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Las contraseñas no coinciden';
      }
      if (!values.termsAccepted) {
        errors.termsAccepted = 'Debes aceptar los términos y condiciones';
      }
      return errors;
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex flex-col items-center">
      {/* Título centrado */}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Crear una Cuenta
      </h1>

      <form className="space-y-4 w-full" onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            size="small"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            label="Apellidos"
            variant="outlined"
            fullWidth
            size="small"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            label="Correo Electrónico"
            type="email"
            variant="outlined"
            fullWidth
            size="small"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            className="col-span-2"
          />
          <TextField
            label="DNI"
            variant="outlined"
            fullWidth
            size="small"
            name="dni"
            value={formik.values.dni}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.dni && Boolean(formik.errors.dni)}
            helperText={formik.touched.dni && formik.errors.dni}
          />
          <TextField
            label="Celular"
            type="tel"
            variant="outlined"
            fullWidth
            size="small"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            label="Confirmar Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
        </div>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              name="termsAccepted"
              checked={formik.values.termsAccepted}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          }
          label={
            <span className="text-xs">
              Acepto los{' '}
              <Link
                to="/terms"
                className="font-semibold hover:underline"
              >
                Términos y Condiciones
              </Link>
            </span>
          }
        />
        {formik.touched.termsAccepted && formik.errors.termsAccepted && (
          <div className="text-red-500 text-xs">
            {formik.errors.termsAccepted}
          </div>
        )}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 text-white"
        >
          Registrarse
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
