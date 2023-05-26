import { SxProps, Theme } from '@mui/material/styles';

export const chartContainer: SxProps<Theme> = {
  position: 'relative',
  height: {
    mobile: '255px',
    desktopSemiMedium: '314px',
  },
  width: '100%',
  maxWidth: '404px',
  minWidth: '328px',
  border: '1px solid rgba(64, 64, 64)',
  borderRadius: '8px',
  padding: '10px',
  backgroundColor: 'rgb(33,33,33)',
};

export const yTitle: SxProps<Theme> = {
  fontSize: '16',
  position: 'absolute',
  top: '54%',
  left: '-40px',
  transform: 'rotate(-90deg)',
  color: 'rgb(116, 116, 116)',
  fontWeight: '500',
};
