import { SxProps, Theme } from '@mui/material/styles';

export const divider: SxProps<Theme> = {
  borderColor: 'grey.400',
  color: 'grey.500',
};

export const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};
