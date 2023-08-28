import { PaletteMode } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";

/* Override ⚛️ components*/
export const getComponentStyles = (): ThemeOptions["components"] => ({
  MuiButton: {
    styleOverrides: {
      root: {},
      outlinedPrimary: {},
      containedSecondary: {},
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {},
    },
  },
});
