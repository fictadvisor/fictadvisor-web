import { SxProps } from '@mui/material/styles';
import { Theme } from '@mui/system';

export const schedulePage: SxProps<Theme> = {
  display: 'flex',
  flexDirection: { mobile: 'column', tablet: 'row' },
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  mt: '16px',
  mb: '74px',
  ml: '16px',
  mr: '16px',
};
