import { SxProps, Theme } from '@mui/material/styles';

export const headerContainer: SxProps<Theme> = {
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '64px',
  justifyContent: {
    desktop: 'space-around',
    mobile: 'center',
  },
  paddingLeft: {
    desktop: '80px',
    mobile: '0',
  },
  paddingRight: {
    desktop: '80px',
    mobile: '0',
  },
  position: {
    desktop: 'unset',
    mobile: 'relative',
  },
  backgroundColor: 'rgba(23, 23, 23, 0.63)',
  backdropFilter: 'blur(8px)',
};

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
  width: '280px',
  '& img': {
    width: '197px',
    height: '20px',
    marginRight: {
      desktop: '16px',
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
  backgroundColor: 'rgba(23, 23, 23, 0.65)',
};

export const mobileButton: SxProps<Theme> = {
  position: {
    desktop: 'unset',
    mobile: 'absolute',
  },
  right: {
    desktop: 'unset',
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
  backgroundColor: '#1e1e1e',
  gap: '16px',
  flexDirection: 'column',
  animationDuration: '0.4s',
};

export const accountButtons = mobileMenu;
