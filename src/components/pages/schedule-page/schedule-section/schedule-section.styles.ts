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

export const events: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
};

export const event: SxProps<Theme> = {
  display: 'flex',
};
export const day: SxProps<Theme> = {};
