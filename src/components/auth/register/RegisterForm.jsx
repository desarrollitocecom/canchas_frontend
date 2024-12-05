import React from "react";
import { TextField, Button, InputAdornment, Checkbox, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import InputPassword from '../../general/InputPassword';
import { useFormik } from "formik";
import { FormHelperText } from "@mui/material";
import { validatePassword, validateConfirmPassword } from "../register/passwordValidation";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dni: "",
      phone: "",
      password: "",
      confirmPassword: "",
      termsAccepted: false,
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "nombre requerido";
      }
      if (!values.lastName) {
        errors.lastName = "apellidos requeridos";
      }
      if (!values.email) {
        errors.email = "correo electrónico requerido";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Correo electrónico inválido";
      }
      if (!values.dni) {
        errors.dni = "DNI requerido";
      }
      if (!values.phone) {
        errors.phone = "celular requerido";
      } else if (values.phone.replace(/\s/g, "").length < 11) {
        errors.phone = "Número de teléfono inválido";
      }
      // Validación de contraseña
      const passwordError = validatePassword(values.password);
      if (passwordError) {
        errors.password = passwordError;
      }
      // Validación de confirmación de contraseña
      const confirmPasswordError = validateConfirmPassword(
        values.password,
        values.confirmPassword
      );
      if (confirmPasswordError) {
        errors.confirmPassword = confirmPasswordError;
      }
      if (!values.termsAccepted) {
        errors.termsAccepted = "Debes aceptar los términos y condiciones";
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
        <div className="grid grid-cols-2 gap-5">
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
            className={formik.touched.firstName && formik.errors.firstName ? 'animate-shake' : ''}
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
            className={formik.touched.lastName && formik.errors.lastName ? 'animate-shake' : ''}
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
            className={`col-span-2 ${formik.touched.firstName && formik.errors.firstName ? 'animate-shake' : ''}`}

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
            className={formik.touched.dni && formik.errors.dni ? 'animate-shake' : ''}
          />
          {/* Campo de teléfono */}
          <div className="flex flex-col gap-1">
            <PhoneInput
              country={"pe"}
              value={formik.values.phone}
              onChange={(phone) => formik.setFieldValue("phone", phone)}
              inputStyle={{
                width: "100%",
                border: formik.touched.phone && formik.errors.phone
                  ? "1px solid #d32f2f" // Rojo para errores
                  : window.matchMedia("(prefers-color-scheme: dark)").matches // Detecta si está en modo oscuro
                    ? "1px solid rgba(255, 255, 255, 0.23)" // Gris tenue para modo oscuro
                    : "1px solid rgba(0, 0, 0, 0.23)", // Gris tenue para modo claro
                borderRadius: "4px",
                height: "40px",
                backgroundColor: "var(--tw-bg-opacity)",
                color: "var(--tw-text-opacity)",
                fontSize: "14px",
                paddingLeft: "48px",
                paddingRight: "8px",
                transition: "border-color 0.3s",
              }}
              containerStyle={{ width: "100%" }}
              buttonStyle={{
                border: "none",
                backgroundColor: "transparent",
                padding: "0",
                margin: "0",
                width: "40px", // Asegura un ancho adecuado para la bandera
              }}
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
              inputClass={`${formik.touched.phone && formik.errors.phone ? "animate-shake" : ""
                } dark:bg-gray-800 dark:border-gray-500 dark:text-white`}
              placeholder="Número de teléfono"
            />
            {formik.touched.phone && formik.errors.phone && (
              <FormHelperText style={{ color: "#d32f2f", marginTop: "2px" }}>
                {formik.errors.phone}
              </FormHelperText>
            )}
          </div>
          <InputPassword
            label="Contraseña"
            name="password"
            size="small"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            className={formik.touched.password && formik.errors.password ? 'animate-shake' : ''}
          />

          <InputPassword
            label="Confirmar Contraseña"
            name="confirmPassword"
            size="small"
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
            className={formik.touched.confirmPassword && formik.errors.confirmPassword ? 'animate-shake' : ''}
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
              Acepto los{" "}
              <a
                href="/docs/terminos-y-condiciones.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 hover:underline"
              >
                Términos y Condiciones
              </a>
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
