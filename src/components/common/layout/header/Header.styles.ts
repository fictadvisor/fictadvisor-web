import { SxProps, Theme } from '@mui/material/styles';
import { alpha } from '@mui/system';

import theme from '@/styles/theme';

export const headerContainer = (isOpened: boolean): SxProps<Theme> => ({
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '64px',
  justifyContent: {
    desktopSemiMedium: 'space-around',
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
  position: {
    desktopSemiMedium: 'unset',
    mobile: 'relative',
  },
  background: isOpened
    ? theme.palette.backgroundDark[0]
    : alpha(theme.palette.gray[10], 0.62),
  backdropFilter: 'blur(8px)',
});

export const menu: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: '10px',
};

export const loginButtons: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
};

export const headerDesktopCard: SxProps<Theme> = {
  width: 'fit-content',
  justifyContent: 'center',
  maxWidth: '280px',
};

export const headerLogo: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: {
    desktopSemiMedium: '280px',
    mobile: 'fit-content',
  },
  '& img': {
    width: '197px',
    height: '20px',
    marginRight: {
      desktopSemiMedium: '16px',
      mobile: '0',
    },
  },
};

export const mobileMenu: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '16px',
  marginTight: '16px',
  gap: '8px',
};

export const shadow: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  background: theme.palette.gray[10],
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
  backgroundColor: theme.palette.backgroundDark[0],
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

export const accountButtons = mobileMenu;
