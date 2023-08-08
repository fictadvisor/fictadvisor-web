import { SxProps, Theme } from '@mui/material/styles';

export const container: SxProps<Theme> = {
  padding: { mobileMedium: '3% 20% 4% 13%', mobile: '8%' },
};

export const content: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '36px',
};
