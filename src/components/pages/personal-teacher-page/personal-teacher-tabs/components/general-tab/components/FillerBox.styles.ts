import { SxProps, Theme } from '@mui/material/styles';

export const filler = (width: string): SxProps<Theme> => ({
  width,
  height: '0',
});
