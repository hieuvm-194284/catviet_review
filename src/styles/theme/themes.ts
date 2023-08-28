import { createTheme } from "@mui/material/styles";

import { getComponentStyles } from "./themeComponents";
import { getPaletteStyles } from "./themePalette";
import { getTypoStyles } from "./themeTypo";

export const baseTheme = (language = "en") => {
  return createTheme({
    shape: {
      borderRadius: 0,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1536,
        xl: 1920,
      },
    },
    typography: getTypoStyles(language),
    components: getComponentStyles(),
    palette: getPaletteStyles(),
  });
};
