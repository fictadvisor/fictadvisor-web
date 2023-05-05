import { SxProps, Theme } from '@mui/material/styles';

export const button = (size): SxProps<Theme> => ({
  ...(size === 'large' && {
    padding: '6px',
  }),
  ...(size === 'normal' && {
    padding: '4px',
  }),
  '&:hover': {
    backgroundColor: 'backgroundDark.300',
  },
  '&:focus': {
    backgroundColor: 'backgroundDark.400',
    borderColor: 'transparent',
  },
  '&:active': {
    backgroundColor: 'backgroundDark.400',
  },
});

export const iconStyles = (size): SxProps<Theme> => ({
  ...(size === 'large' && {
    width: '24px',
    height: '24px',
  }),
  ...(size === 'normal' && {
    width: '20px',
    height: '20px',
  }),
});
