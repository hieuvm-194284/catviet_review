import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GradientTypo = styled(Typography, {
  shouldForwardProp: (props) => props !== 'type',
})<{ type?: 'primary' | 'secondary' }>(({ type = 'secondary' }) => ({
  background:
    type === 'secondary'
      ? 'linear-gradient(90deg, #2D69A0 0%, #6C2DCB54 100%)'
      : 'linear-gradient(90deg, #2D69A0 0%, #6C2DCB54 100%)',
  webkitBackgroundClip: 'text',
  webkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  fontWeight: 700,
}));
