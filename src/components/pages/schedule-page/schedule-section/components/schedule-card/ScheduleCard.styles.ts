import { SxProps, Theme } from '@mui/material/styles';

export const wrapper = (
  top: string,
  height: string | number,
): SxProps<Theme> => ({
  border: '2px solid',
  borderColor: 'backgroundDark.100',

  width: {
    mobileMedium: '132px',
    mobile: '252px',
  },
  height: {
    mobileMedium: `calc(${height}px + 4px)`,
    mobile: height,
  },

  borderRadius: '6px',
  position: 'absolute',
  transform: `translateY(calc(${top} - 5px))`,
  transition: 'linear .1s all',
  left: 2,
  backgroundColor: '#1E1E1E',
});
