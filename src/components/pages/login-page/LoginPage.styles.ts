import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const loginPage: SxProps<Theme> = {
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundSize: '100% 100%',
  padding: '0 30px',

  [theme.breakpoints.down('desktopSemiMedium')]: {
    backgroundSize: '100% 100%',
  },
};

export const loginPage__content: SxProps<Theme> = {
  zIndex: 1,
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  minHeight: '635px',
  maxWidth: '1200px',
  justifyContent: 'space-around',

  [theme.breakpoints.down('desktopSemiMedium')]: {
    maxWidth: '480px',
    width: '100%',
    alignItems: 'flex-start',
  },
};

export const divider: SxProps<Theme> = {
  height: 'inherit',
  width: '2px',
  borderColor: '#FAFAFA',

  [theme.breakpoints.down('desktopSemiMedium')]: {
    display: 'none',
  },
};
