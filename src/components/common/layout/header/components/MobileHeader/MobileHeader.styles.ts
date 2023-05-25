import { SxProps, Theme } from '@mui/material/styles';
import { alpha } from '@mui/system';

import palette from '@/styles/theme/constants/pallete';

export const headerContainer = (isOpened: boolean): SxProps<Theme> => ({
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '64px',
  justifyContent: {
    desktopSemiMedium: 'space-between',
    mobile: 'center',
  },
  paddingLeft: {
    desktopSemiMedium: '80px',
    mobile: '0',
  },
  paddingRight: {
    desktopSemiMedium: '80px',
    mobile: '0',
  },

  backgroundColor: isOpened
    ? palette.backgroundDark[100]
    : alpha(palette.grey[50], 0.62),
  backdropFilter: 'blur(8px)',
});

export const menu: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: 'fit-content',
  gap: '28px',
};

export const loginButtons: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
};

export const headerDesktopCard: SxProps<Theme> = {
  width: 'fit-content',
};

export const headerLogo: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '197px',
  '& img': {
    height: '20px',
  },
};

export const mobileMenu: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '16px',
  marginRight: '16px',
  gap: '8px',
};

export const shadow: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  backgroundColor: 'backgroundDark.100',
  opacity: 0.6,
};

export const mobileButton: SxProps<Theme> = {
  position: {
    desktopSemiMedium: 'unset',
    mobile: 'absolute',
  },
  right: {
    desktopSemiMedium: 'unset',
    mobile: '10px',
  },
};

export const drop: SxProps<Theme> = {
  display: 'flex',
  height: 'fit-content',
  width: '100%',
  position: 'absolute',
  paddingTop: '8px',
  paddingBottom: '16px',
  backgroundColor: 'backgroundDark.100',
  gap: '16px',
  flexDirection: 'column',
  animationDuration: '0.4s',
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

export const button: SxProps<Theme> = {
  typography: 'body1Medium',
};

export const accountButtons = mobileMenu;
