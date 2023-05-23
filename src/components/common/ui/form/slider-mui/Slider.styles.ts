import { SxProps, Theme } from '@mui/material/styles';

export const slider = (size: 'small' | 'medium'): SxProps<Theme> => ({
  color: 'backgroundDark.300',
  height: size === 'medium' ? '12px' : '8px',

  '& .MuiSlider-track': {
    border: 'none',
    color: 'primary.300',
  },

  '& .MuiSlider-mark': {
    marginTop: '20px',
    height: '5px',
    width: '1px',
    color: 'grey.700',
  },

  '& .MuiSlider-markLabel': {
    color: 'grey.700',
    fontSize: size === 'medium' ? '16px' : '14px',
    marginTop: '15px',
  },

  '& .MuiSlider-thumb': {
    width: size === 'medium' ? '24px' : '20px',
    height: size === 'medium' ? '24px' : '20px',
    backgroundColor: 'primary.300',

    '&:hover, &.Mui-focusVisible, &.Mui-active': {
      boxShadow: 'none',
    },
  },
});
