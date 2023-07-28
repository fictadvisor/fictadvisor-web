import { SxProps, Theme } from '@mui/material/styles';
export const page: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: {
    mobileSemiMedium: '16px 80px 50px 80px',
    mobile: '16px 40px 50px 40px',
  },
};

export const form: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  padding: { desktop: '0px 80px 50px', mobile: '0' },
};
export const divider: SxProps<Theme> = {
  borderColor: 'grey.400',
  color: 'grey.500',
};
export const breadcrumbs: SxProps<Theme> = {
  marginBottom: '24px',
  height: '20px',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
};

export const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginBottom: '40px',
  width: '100%',
};
