import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  gap: '12px',
  paddingLeft: '71px',
};

export const month: SxProps<Theme> = {
  typography: 'h4Medium',
};

export const week: SxProps<Theme> = {
  typography: 'body1Bold',
};

export const button: SxProps<Theme> = {
  padding: '6px',
};
