import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  '.MuiDialog-paper': {
    maxWidth: '652px',
    padding: '0 94px 30px 94px',
    backgroundColor: 'backgroundDark.100',
  },
};

export const avatarWrapper: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
};

export const avatar: SxProps<Theme> = {
  width: '200px',
  height: '200px',
};
