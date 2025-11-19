import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App";
import GlobalStyles from "./styles/globalStyles";

const theme = createTheme({
  typography: {
    fontFamily: `'Montserrat', 'Inter', system-ui, Arial, sans-serif`,
  },
  components: {
     MuiTextField: {
      defaultProps: {
        size: "small",       
        fullWidth: true,     
      },
       styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            backgroundColor: "#EEF1F8",
            "& fieldset": {
              border: "none", 
            },
          },
          "& .MuiOutlinedInput-input::placeholder": {
            fontSize: "14px",
            color: "#7A7D7E",
            opacity: 1,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",       
          textTransform: "none",      
        },
        contained: {
          padding: "8px 24px",
          backgroundColor: "#5285EC", 
          color: "#fff",
          "&:hover": {
            backgroundColor: "#4173c8", 
          },
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />  
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);