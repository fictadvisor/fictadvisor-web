import { SxProps, Theme } from '@mui/material/styles';

export const backdrop: SxProps<Theme> = {
  zIndex: theme => theme.zIndex.drawer + 1,
};
export const box: SxProps<Theme> = {
  minHeight: '232px',
  maxWidth: '420px',
  p: '16px',
  backgroundColor: 'backgroundDark.200',
  borderRadius: '8px 8px 0px 0px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
};
export const title: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& .MuiTypography-root': {
    typography: 'h6Bold',
  },
};

export const footer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '16px',
  '& .MuiButton-root': {
    width: 'fit-content',
  },
};
