import { SxProps, Theme } from '@mui/material/styles';

export const picker: SxProps<Theme> = {
  color: 'white.main',
  '& .MuiMonthCalendar-root, &': {
    width: '280px',
  },
  height: '280px',
  '& .MuiButtonBase-root': {
    color: 'white.main',
    '&.MuiPickersDay-dayOutsideMonth': {
      color: 'grey.400',
    },
  },
  '& .MuiTypography-root': {
    color: 'grey.400',
  },
};
