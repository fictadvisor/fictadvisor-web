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

  [theme.breakpoints.down('desktopSemiMedium')]: {
    display: 'none',
  },
};

export const telegramButton: SxProps<Theme> = {
  margin: '32px 0',
  borderRadius: '8px',
  gap: '10px',

  [theme.breakpoints.down('mobileMedium')]: {
    display: 'none',
  },
};

export const mobileTelegramButton: SxProps<Theme> = {
  display: 'none',
  margin: '0 0 16px 0',
  typography: theme.typography.body2Bold,
  whiteSpace: 'normal',
  borderRadius: '8px',
  gap: '10px',

  [theme.breakpoints.down('mobileMedium')]: {
    display: 'flex',
  },
};

export const registerMobileButton: SxProps<Theme> = {
  width: 'fit-content',
  display: 'none',
  borderRadius: '6px',
  padding: '8px 16px',

  [theme.breakpoints.down('desktopSemiMedium')]: {
    display: 'flex',
  },
};

export const comebackButton: SxProps<Theme> = {
  marginTop: '24px',
  marginBottom: '40px',
  typography: theme.typography.body1,
  gap: '10px',
};

export const divider: SxProps<Theme> = {
  width: '100%',
  '&::before': {
    borderColor: theme.palette.grey[800],
  },
  '&::after': {
    borderColor: theme.palette.grey[800],
  },
};

export const narrowScreenText: SxProps<Theme> = {
  display: 'none',
  margin: '28px 0 14px 0',
  typography: theme.typography.body2Medium,
  color: theme.palette.grey[600],

  [theme.breakpoints.down('desktopSemiMedium')]: {
    display: 'flex',
  },
};
