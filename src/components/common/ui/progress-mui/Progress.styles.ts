import { SxProps, Theme } from '@mui/material/styles';

export const progressFront: SxProps<Theme> = {
  position: 'relative',
  '.MuiCircularProgress-svg': {
    strokeLinecap: 'round',
  },
};

export const progressBack: SxProps<Theme> = {
  color: 'backgroundDark.300',
  position: 'absolute',
  left: 0,
};
