import { SxProps, Theme } from '@mui/material/styles';
import { alpha } from '@mui/system';

import palette from '@/styles/theme/constants/pallete';

export const headerContainer = (isOpened: boolean): SxProps<Theme> => ({
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '64px',
  justifyContent: 'center',
  backgroundColor: isOpened
    ? palette.backgroundDark[100]
    : alpha(palette.grey[50], 0.62),
  backdropFilter: 'blur(8px)',
});

export const loginButtons: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '16px',
  marginRight: '16px',
  gap: '16px',
};

export const registerButton: SxProps<Theme> = {
  maxWidth: '328px',
  width: '100%',
};

export const loginButton: SxProps<Theme> = {
  maxWidth: '328px',
  width: '100%',
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

export const menu: SxProps<Theme> = {
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

export const menuTab: SxProps<Theme> = {
  maxWidth: {
    mobile: '100%',
  },
};

export const iconButton: SxProps<Theme> = {
  position: 'absolute',
  right: '10px',
};

export const divider: SxProps<Theme> = {
  borderColor: 'grey.400',
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
  animation: '0.4s',
};
