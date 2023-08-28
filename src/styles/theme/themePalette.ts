import { PaletteMode } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

/* Override ⚛️ palette*/
export const getPaletteStyles = (): ThemeOptions["palette"] => ({
  mode: "light",
  primary: {
    light: "#2F281E",
    dark: "#2D69A0",
    main: "#2F281E",
    contrastText: "#FFFFFF",
  },
  secondary: {
    light: "#11223F",
    dark: "#6C2DCB",
    main: "#11223F",
    contrastText: "#FFFFFF",
  },
  text: {
    primary: "#000000",
    secondary: "#18893A",
  },
  error: {
    main: "#B16F5C",
    contrastText: "#FFFFFF",
  },
  warning: {
    main: "#D6B557",
    contrastText: "#FFFFFF",
  },
  success: {
    main: "#6FA176",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#FFFFFF",
    paper: "#FFFFFF",
  },
});
