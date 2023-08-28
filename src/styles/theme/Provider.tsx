import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import { baseTheme } from "./themes";
import { CustomThemeProviderProps } from "./types";

function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  const themeScheme = useMemo(() => {
    return baseTheme();
  }, []);

  return (
    <>
      <ThemeProvider theme={themeScheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
}

export default CustomThemeProvider;
