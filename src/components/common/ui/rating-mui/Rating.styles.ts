import { SxProps, Theme } from '@mui/material/styles';

export const rating: SxProps<Theme> = {
  width: 'fit-content0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  typography: 'body1Bold',
};

export const ratingStars: SxProps<Theme> = {
  paddingBottom: '8px',
};
