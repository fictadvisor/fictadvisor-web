import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export const content: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
};

export const textContent: SxProps<Theme> = {
  display: 'flex',
  gap: '8px',
  '& h4': {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '116%',
    marginBottom: '24px',
  },
};

export const progress: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
