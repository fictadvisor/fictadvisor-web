import { SxProps } from '@mui/material/styles';
import { Theme } from '@mui/system';

export const scheduleSection: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  margin: '6px',
  width: '75%',
  overflow: 'scroll',
  height: `calc(100vh - ${100}px)`,
  position: 'relative',
};
