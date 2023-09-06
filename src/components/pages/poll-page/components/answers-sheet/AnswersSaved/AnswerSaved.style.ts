import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const savedWrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '12%',
  height: '100vh',
  [theme.breakpoints.down('desktop')]: {
    padding: '16px',
  },
};

export const content: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '900px',
  [theme.breakpoints.down('desktop')]: {
    maxWidth: '600px',
  },

  [theme.breakpoints.down('tablet')]: {
    maxWidth: '400px',
  },
};

export const heading: SxProps<Theme> = {
  textAlign: 'center',
  marginTop: '20px',
  marginBottom: '12px',
};

export const paragraph: SxProps<Theme> = {
  textAlign: 'center',
  marginBottom: '36px',
};

export const buttons: SxProps<Theme> = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  [theme.breakpoints.down('desktop')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export const toOtherPolls: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  marginRight: '16px',
  height: '48px',
  borderRadius: '8px',
  width: '308px',
  [theme.breakpoints.down('desktop')]: {
    width: '100%',
    marginRight: 0,
    marginBottom: '20px',
  },

  [theme.breakpoints.down('tablet')]: {
    width: '328px',
  },

  [theme.breakpoints.down('mobileSemiMedium')]: {
    width: '100%',
  },
};

export const toMain: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  height: '48px',
  borderRadius: '8px',
  width: '308px',
  [theme.breakpoints.down('desktop')]: {
    width: '100%',
  },

  [theme.breakpoints.down('tablet')]: {
    width: '328px',
  },

  [theme.breakpoints.down('mobileSemiMedium')]: {
    width: '100%',
  },
};
