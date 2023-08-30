import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

import theme from '@/styles/theme';

export const container: SxProps<Theme> = {
  width: '100%',
};

export const buttonContainer: SxProps<Theme> = {
  width: '20%',
  marginBottom: '54px',
  marginTop: '30px',
  [theme.breakpoints.down('desktopSemiMedium')]: {
    display: 'block',
    marginBottom: '10%',
  },
};
export const button: SxProps<Theme> = {
  padding: '12px 44.5px',

  [theme.breakpoints.down('desktopSemiMedium')]: {
    padding: '8px 29px',
  },
};
export const inputForm: SxProps<Theme> = {
  marginTop: '30px',
  width: '40%',
  minWidth: '400px',
  [theme.breakpoints.down('mobile')]: { width: '100%', minWidth: '0' },
};
export const input: SxProps<Theme> = {
  marginTop: '18px',
};
export const confirmButton: SxProps<Theme> = {
  width: '60%',
  margin: '16px 0 30px 0',
  [theme.breakpoints.down('desktopSemiMedium')]: {
    width: '50%',
    display: 'block',
  },
};
export const changePasswordButton: SxProps<Theme> = {
  fontSize: '16px',
  [theme.breakpoints.down('desktopSemiMedium')]: {
    fontSize: '14px',
  },
};
export const userInformation: SxProps<Theme> = {
  marginTop: '30px',
  width: '40%',
  minWidth: '400px',
  div: {
    marginBottom: '30px',
  },
  [theme.breakpoints.down('mobile')]: { width: '100%', minWidth: '0' },
};
