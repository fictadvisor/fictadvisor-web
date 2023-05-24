import { SxProps, Theme } from '@mui/material';

export const authenticationButtons: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
};

export const registerButton: SxProps<Theme> = {
  width: {
    desktopSemiMedium: 'unset',
    mobile: '192px',
  },
};

export const loginButton: SxProps<Theme> = {
  width: {
    desktopSemiMedium: 'unset',
    mobile: '120px',
  },
};
