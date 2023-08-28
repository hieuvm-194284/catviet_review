import { PaletteMode } from "@mui/material";
import { ThemeOptions, createTheme } from "@mui/material/styles";

const { typography, breakpoints } = createTheme({
  typography: { fontSize: 14 },
});

const LANG_MAPPING: Record<string, string> = {
  en: "SFUIText",
  vn: "SFUIText",
};

/* Override ⚛️ typo*/
export const getTypoStyles = (lang: string): ThemeOptions["typography"] => ({
  fontSize: 16,
  fontFamily: [LANG_MAPPING[lang] ?? "SFUIText",
  'Arial',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',].join(","),
  h1: {
    fontWeight: 700,
    fontSize: typography.pxToRem(18),
    lineHeight: typography.pxToRem(18),
  },
  h2: {
    fontWeight: 700,
    fontSize: typography.pxToRem(24),
    lineHeight: typography.pxToRem(32),
  },
  h3: {
    fontWeight: 400,
    fontSize: typography.pxToRem(18),
    lineHeight: typography.pxToRem(32),
  },
  h4: {
    fontWeight: 500,
    fontSize: typography.pxToRem(16),
    lineHeight: typography.pxToRem(24),
  },
  h5: {
    fontWeight: 400,
    fontSize: typography.pxToRem(16),
    lineHeight: typography.pxToRem(24),
  },
  h6: {
    fontWeight: 400,
    fontSize: typography.pxToRem(14),
    lineHeight: typography.pxToRem(16),
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: typography.pxToRem(20),
    lineHeight: typography.pxToRem(24),
  },
  subtitle2: {
    fontWeight: 600,
    fontSize: typography.pxToRem(14),
    lineHeight: typography.pxToRem(28),
  },
  body1: {
    fontSize: typography.pxToRem(16),
    lineHeight: typography.pxToRem(30),
    fontWeight: 400,
  },
  body2: {
    fontSize: typography.pxToRem(16),
    lineHeight: typography.pxToRem(26),
    fontWeight: 400,
  },
  button: {
    fontSize: typography.pxToRem(14),
    lineHeight: typography.pxToRem(16),
    fontWeight: 700,
  },
  caption: {
    fontWeight: 600,
    fontSize: typography.pxToRem(28),
    lineHeight: typography.pxToRem(32),
  },
  overline: {
    fontSize: typography.pxToRem(16),
    fontWeight: 400,
    textTransform: "uppercase",
  },
});
