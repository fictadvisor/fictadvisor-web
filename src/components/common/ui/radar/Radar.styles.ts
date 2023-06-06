import { SxProps, Theme } from '@mui/material/styles';

export const background = (isMobile): SxProps<Theme> => {
  const y = isMobile ? '100%' : '1200px';

  // Calculate the canvas width based on the first width (y)
  const canvasWidth = `calc(0.76 * ${y} + 59.2px)`;

  return {
    width: y,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    canvas: {
      marginLeft: '3px',
      marginBottom: '3px',
      position: 'relative',
      zIndex: '5',
      width: `${canvasWidth} !important`,
      height: `${canvasWidth} !important`,
      maxWidth: isMobile ? '455px' : '600px', // Added maximum width
      maxHeight: isMobile ? '455px' : '600px', // Added maximum width
      boxSizing: 'border-box',
    },

    svg: {
      zIndex: '1',
      position: 'absolute',
      right: 0,
      width: '100%',
    },
  };
};
