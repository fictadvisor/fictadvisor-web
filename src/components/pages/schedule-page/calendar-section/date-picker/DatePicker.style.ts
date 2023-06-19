import { SxProps, Theme } from '@mui/material/styles';

export const picker: SxProps<Theme> = {
  '& .MuiButtonBase-root': {
    color: 'grey.white',
    // backgroundColor: 'grey.white',
  },
  '& .MuiPickersDay-dayOutsideMonth': {
    color: 'grey.200',
  },
  '& .MuiTypography-root ': {
    color: 'grey.400',
  },
};
