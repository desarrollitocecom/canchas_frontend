import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FormHelperText } from "@mui/material";

const PhoneInputField = ({ value, onChange, error, touched, onBlur, placeholder = "" }) => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const darkModeStyles = {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    border: touched && error
      ? "1px solid #ff6f6f"
      : "1px solid rgba(255, 255, 255, 0.23)",
  };

  const lightModeStyles = {
    backgroundColor: "#fff",
    color: "#000",
    border: touched && error
      ? "1px solid #d32f2f"
      : "1px solid rgba(0, 0, 0, 0.23)",
  };

  return (
    <div className="flex flex-col gap-1">
      <PhoneInput
        country={"pe"}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        inputStyle={{
          width: "100%",
          borderRadius: "4px",
          height: "40px",
          paddingLeft: "48px",
          fontSize: "14px",
          backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
          color: isDarkMode ? "#fff" : "#000",
          border: touched && error
            ? `1px solid ${isDarkMode ? "#ff6f6f" : "#d32f2f"}`
            : `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.23)" : "rgba(0, 0, 0, 0.23)"}`,
        }}
        containerStyle={{ width: "100%" }}
        buttonStyle={{
          border: "none",
          backgroundColor: "transparent",
          width: "40px",
        }}
        dropdownStyle={{
          zIndex: 100,
          backgroundColor: isDarkMode ? "#2d2d2d" : "#fff",
          color: isDarkMode ? "#fff" : "#000",
          border: isDarkMode ? "1px solid #404040" : "1px solid #ccc",
          borderRadius: "4px",
          // Desactiva el hover cambiando el fondo a transparente
          "& .country:hover": {
            backgroundColor: "transparent",
            color: isDarkMode ? "#fff" : "#000",
          },
        }}
        containerClasses={`
          [&_.country-list_.country:hover]:bg-transparent 
          [&_.country-list_.country:hover]:text-current
          [&_.selected-flag:hover]:bg-transparent
        `}
        inputClass={`${touched && error ? "animate-shake" : ""} 
          hover:border-blue-500 focus:border-blue-500 
          dark:hover:border-blue-400 dark:focus:border-blue-400`}
        placeholder={placeholder}
      />
      {touched && error && (
        <FormHelperText
          error
          sx={{
            marginLeft: '1rem',
            color: isDarkMode ? "#ff6f6f" : "#d32f2f"
          }}
        >
          {error}
        </FormHelperText>
      )}
    </div>
  );
};

export default PhoneInputField;
