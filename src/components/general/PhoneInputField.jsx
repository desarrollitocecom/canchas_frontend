import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FormHelperText } from "@mui/material";

const PhoneInputField = ({ value, onChange, error, touched, onBlur, placeholder = "" }) => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  // Color rojo consistente con el diseño
  const errorColor = "#ff0000";

  const customStyles = `
    .react-tel-input .country-list {
      background-color: ${isDarkMode ? '#2d2d2d' : '#fff'} !important;
      color: ${isDarkMode ? '#fff' : '#000'} !important;
    }
    
    .react-tel-input .country-list .country:hover {
      background-color: ${isDarkMode ? '#404040' : '#f0f0f0'} !important;
    }
    
    .react-tel-input .country-list .country.highlight {
      background-color: ${isDarkMode ? '#404040' : '#f0f0f0'} !important;
    }
    
    .react-tel-input .country-list .country {
      color: ${isDarkMode ? '#fff' : '#000'} !important;
    }
    
    .react-tel-input .selected-flag:hover,
    .react-tel-input .selected-flag:focus,
    .react-tel-input .selected-flag.open {
      background-color: ${isDarkMode ? '#404040' : '#f0f0f0'} !important;
    }
  `;

  return (
    <div className="flex flex-col gap-1">
      <style>{customStyles}</style>
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
            ? `1px solid ${errorColor}`
            : `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.23)" : "rgba(0, 0, 0, 0.23)"}`,
        }}
        containerStyle={{ width: "100%" }}
        buttonStyle={{
          border: "none",
          backgroundColor: "transparent",
          width: "40px",
        }}
        inputClass={`${touched && error ? "animate-shake" : ""}
          hover:border-blue-500 focus:border-blue-500
          dark:hover:border-blue-400 dark:focus:border-blue-400
        `}
        placeholder={placeholder}
      />
      {touched && error && (
        <FormHelperText
          error
          sx={{
            marginLeft: '1rem',
            color: errorColor
          }}
        >
          {error}
        </FormHelperText>
      )}
    </div>
  );
};

export default PhoneInputField;