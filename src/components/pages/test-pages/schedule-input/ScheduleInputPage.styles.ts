import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
};

export const column: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5rem',
  width: '270px',
};

export const row: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  gap: '5rem',
};
