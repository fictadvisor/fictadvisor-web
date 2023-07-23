import { SxProps } from '@mui/material/styles';
import { Theme } from '@mui/system';

export const card: SxProps<Theme> = {
  width: {
    mobile: '104px',
    tablet: '200px',
  },
  height: {
    mobile: '112px',
    tablet: '200px',
  },
  background: 'rgba(38, 38, 38, 0.26)',
  border: '1px solid #4A4A4A',
  boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.11)',
  borderRadius: '8px',
};

export const cardContent: SxProps<Theme> = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  gap: {
    mobile: '8px',
    tablet: '16px',
  },
  padding: {
    mobile: '4px 6px',
  },
  img: {
    width: {
      mobile: '48px',
      tablet: '96px',
    },
    height: {
      mobile: '48px',
      tablet: '96px',
    },
    borderRadius: '50%',
  },
};
export const text: SxProps<Theme> = {
  typography: {
    mobile: 'body1Medium',
    tablet: 'h6Medium',
  },
};
