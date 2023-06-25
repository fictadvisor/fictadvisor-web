import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBottom: '80px',
  maxWidth: '1200px',
};

export const title: SxProps<Theme> = {
  typography: {
    mobile: 'h6Bold',
    tablet: 'h4Bold',
  },
};

export const description: SxProps<Theme> = {
  maxWidth: '492px',
};
