import { SxProps, Theme } from '@mui/material/styles';

export const form: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '5px',
};

export const input: SxProps<Theme> = {
  width: '344px',
};

export const divider: SxProps<Theme> = {
  borderColor: 'backgroundDark.600',
  height: '46px',
};
