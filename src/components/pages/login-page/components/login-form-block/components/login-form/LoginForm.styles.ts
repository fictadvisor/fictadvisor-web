import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const passwordLink: SxProps<Theme> = {
  marginBottom: '36px',
  alignSelf: 'flex-start',
};

export const loginButton: SxProps<Theme> = {
  borderRadius: '8px',

  [theme.breakpoints.down('mobileMedium')]: {
    padding: '12px 24px',
  },
};
