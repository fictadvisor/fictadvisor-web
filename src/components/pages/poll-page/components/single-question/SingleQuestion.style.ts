import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const questionNumber: SxProps<Theme> = {
  marginBottom: '16px',
  fontSize: '16px',
  color: 'white',
};

export const questionTitle: SxProps<Theme> = {
  marginBottom: '14px',
  fontSize: '20px',
  fontWeight: '700',
  color: 'white',
};

export const questionDescription: SxProps<Theme> = {
  marginBottom: '20px',
  fontSize: '14px',
  color: 'white',
  fontWeight: '500',
};
export const questionCriteria: SxProps<Theme> = {
  fontSize: '14px',
  color: theme.palette.grey[300],
  fontWeight: '300',
  marginTop: '11px',
};

export const radioGroup: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '36px',
};
