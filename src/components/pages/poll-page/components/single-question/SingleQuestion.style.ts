import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const questionNumber: SxProps<Theme> = {
  marginBottom: '16px',
  typography: theme.typography.body2,
  color: theme.palette.white.main,
};

export const questionTitle: SxProps<Theme> = {
  fontSize: '20px',
  typography: theme.typography.body1Bold,
  color: theme.palette.white.main,
};

export const questionDescription: SxProps<Theme> = {
  marginBottom: '20px',
  typography: theme.typography.body1Medium,
  color: theme.palette.grey[700],
};
export const questionCriteria: SxProps<Theme> = {
  color: theme.palette.grey[300],
  typography: theme.typography.body1,
  marginTop: '11px',
};

export const radioGroup: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '36px',
};
