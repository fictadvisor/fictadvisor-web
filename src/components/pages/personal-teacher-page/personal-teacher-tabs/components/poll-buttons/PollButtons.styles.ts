import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: {
    mobile: 'flex-start',
    tablet: 'center',
  },
  gap: '32px',
  padding: '16px',
  margin: '50px 0',
};

export const button: SxProps<Theme> = {
  width: 'fit-content',
};
