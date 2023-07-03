import { SxProps } from '@mui/material/styles';
import { Theme } from '@mui/system';

export const content: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  position: 'relative',
  backgroundColor: 'backgroundDark.100',
  borderRadius: '8px',
  minWidth: '100px',
  padding: { mobile: '16px', tablet: '35px' },
  maxWidth: '650px',
  height: 'fit-content',
};

export const close: SxProps<Theme> = {
  position: 'absolute',
  top: '8px',
  right: '8px',
  width: '36px',
  height: '36px',
  padding: '6px',
};

export const title: SxProps<Theme> = {
  typography: 'h6Bold',
  textAlign: 'center',
};
export const description: SxProps<Theme> = {
  typography: 'body1',
};

export const button: SxProps<Theme> = {
  mt: '16px',
  width: 'min-content',
};
