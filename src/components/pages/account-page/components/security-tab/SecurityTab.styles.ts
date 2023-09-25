import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

import theme from '@/styles/theme';

export const container: SxProps<Theme> = {
  width: '100%',
};

export const divider: SxProps<Theme> = {
  paddingBottom: '20px',
};

export const button: SxProps<Theme> = {
  padding: '12px 44.5px',

  [theme.breakpoints.down('desktopSemiMedium')]: {
    padding: '8px 29px',
  },
};

export const userInformation: SxProps<Theme> = {
  marginTop: '0px',
  width: { mobile: '40%', desktop: 'fit-content' },
  minWidth: '400px',
  div: {
    marginBottom: '16px',
  },
  [theme.breakpoints.down('mobile')]: { width: '100%', minWidth: '0' },
};

export const exitButton: SxProps<Theme> = {
  width: { mobile: '60%', desktop: 'fit-content' },
  margin: '24px 0 38px 0',
};
