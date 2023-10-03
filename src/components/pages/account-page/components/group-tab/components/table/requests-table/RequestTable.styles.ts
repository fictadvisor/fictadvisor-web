import { SxProps } from '@mui/material/styles';
import { Theme } from '@mui/system';

import theme from '@/styles/theme';

export const fixSized: SxProps<Theme> = {
  width: 'fit-content',
};
export const lastColumn: SxProps<Theme> = {
  justifyContent: 'flex-end',
  gap: '8px',
  '& button': {
    color: theme.palette.white.main,
  },
};

export const divider: SxProps<Theme> = {
  mt: '24px',
  pb: '20px',
  typography: theme.typography.body1,
};

export const fullName: SxProps<Theme> = {
  typography: theme.typography.body2Bold,
};

export const email: SxProps<Theme> = {
  typography: theme.typography.body2Medium,
};
