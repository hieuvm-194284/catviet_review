
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const GradientButton = styled(Button)(({ theme }) => ({
  background: 'var(--gradient, linear-gradient(0deg, #64994D 0%, #028042 100%))',
  borderRadius: '4px',
  textTransform: "uppercase",
}));

GradientButton.defaultProps = {
  variant: 'contained',
};
