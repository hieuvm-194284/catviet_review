import { AppBar, Toolbar, alpha, styled, Link } from "@mui/material";
export const DRAWER_WIDTH = 50;
export const NAVBAR_HEIGHT = 52;

export const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ theme, active }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'unset',
  transition: '.5s',
  position: 'relative',
  fontSize: theme.typography.pxToRem(24),
  fontWeight: '400',
  cursor: 'pointer',
  lineHeight: '100%',
  '&:hover': {
    color: theme.palette.text.primary,
    textShadow: `1px 1px 12px ${alpha(theme.palette.text.disabled, 0.3)}`,
  },
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: '#F5F8F9',
  }));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    borderRadius: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    minHeight: `${NAVBAR_HEIGHT}px !important`,
    paddingRight: '32px !important',
  }));