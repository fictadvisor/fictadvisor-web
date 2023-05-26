import { SxProps, Theme } from '@mui/material/styles';

export const background = (isMobile): SxProps<Theme> => ({
  width: isMobile ? '600px' : '1200px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  canvas: {
    marginLeft: '3px',
    marginBottom: '3px',
    position: 'relative',
    zIndex: '5',
    width: isMobile ? '440px !important' : '570px !important',

    height: isMobile ? '440px !important' : '570px !important',
  },

  svg: {
    zIndex: '1',
    position: 'absolute',
    right: 0,
    width: '100%',
  },
});
