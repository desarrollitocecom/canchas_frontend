export const validatePassword = (value) => {
    let error = "";
    const passwordRegex = /(?=.*[0-9])/; // Al menos un número
    if (!value) {
      error = "contraseña requerida";
    } else if (value.length < 8) {
      error = "La contraseña debe tener al menos 8 caracteres";
    } else if (!passwordRegex.test(value)) {
      error = "La contraseña debe contener al menos un número";
    }
    return error;
  };
  
  export const validateConfirmPassword = (password, value) => {
    let error = "";
    if (!value) {
      error = "confirmar contraseña";
    } else if (password !== value) {
      error = "Las contraseñas no coinciden";
    }
    return error;
  };