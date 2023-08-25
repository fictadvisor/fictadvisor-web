import { SxProps, Theme } from '@mui/material/styles';

export const wrapper = (
  top: string,
  height: string | number,
): SxProps<Theme> => ({
  border: '2px solid',
  borderColor: 'backgroundDark.100',
  position: 'absolute',
  width: {
    mobileMedium: '132px',
    mobile: '252px',
  },
  height: {
    mobileMedium: `calc(${height}px + 4px)`,
    mobile: height,
  },

  borderRadius: '6px',
  top: `calc(${top} - 5px)`,
  backgroundColor: '#1E1E1E',
});
