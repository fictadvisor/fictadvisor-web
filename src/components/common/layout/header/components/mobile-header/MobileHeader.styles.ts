import { SxProps, Theme } from '@mui/material/styles';
import { alpha } from '@mui/system';

import palette from '@/styles/theme/constants/pallete';

export const headerContainer = (isOpened: boolean): SxProps<Theme> => ({
  // overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // width: '100%',
  height: '64px',

  backgroundColor: isOpened
    ? palette.backgroundDark[100]
    : alpha(palette.grey[50], 0.62),
  backdropFilter: 'blur(8px)',
  boxShadow: 'unset',
});

export const headerLogo: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
};

export const menu: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '16px',
  marginRight: '16px',
  gap: '8px',
  paddingBottom: '16px',
  paddingTop: '8px',
};

export const shadow: SxProps<Theme> = {
  width: '100vh',
  height: '100vh',
  position: 'fixed',
  backgroundColor: 'backgroundDark.100',
  opacity: 0.6,
  zIndex: 0,
};

export const menuTab: SxProps<Theme> = {
  maxWidth: {
    mobile: '100%',
  },
};

export const iconButton: SxProps<Theme> = {
  position: 'absolute',
  right: '10px',
};

export const divider = (isLoggined): SxProps<Theme> => ({
  marginTop: isLoggined ? '12px' : '24px',
  marginBottom: '12px',
  borderColor: 'grey.400',
});

export const drawer: SxProps<Theme> = {
  height: 'fit-content',
  '.MuiDrawer-paper': {
    backgroundColor: 'backgroundDark.100',
    marginTop: '64px',
    color: 'unset',
    boxShadow: 'unset',
  },
};

export const drop: SxProps<Theme> = {
  display: 'flex',
  height: 'fit-content',
  width: '100%',
  position: 'absolute',
  paddingTop: '16px',
  paddingBottom: '16px',
  backgroundColor: 'backgroundDark.100',
  gap: '16px',
  flexDirection: 'column',
  animation: '0.4s',
};
