import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const loginFormBlock: SxProps<Theme> = {
  width: '480px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

export const loginHeader: SxProps<Theme> = {
  textAlign: 'center',
  fontSize: '36px',
  fontWeight: 700,
  lineHeight: '128%',

  [theme.breakpoints.down('desktopSemiMedium')]: {
    display: 'none',
  },
};

export const divider: SxProps<Theme> = {
  width: '100%',
  '&::before': {
    borderColor: '#FAFAFA',
  },
  '&::after': {
    borderColor: '#FAFAFA',
  },
};

export const mobileText: SxProps<Theme> = {
  fontSize: '16px',
  lineHeight: '1.5',
  fontWeight: 500,
  display: 'none',
  margin: '28px 0 14px 0',
  color: '#D4D4D4',

  [theme.breakpoints.down('desktopSemiMedium')]: {
    display: 'flex',
  },
};

