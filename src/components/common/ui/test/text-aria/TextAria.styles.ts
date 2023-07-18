import { SxProps, Theme } from '@mui/material/styles';

import { TextAriaSize } from './types';

export const textAria = (size: TextAriaSize): SxProps<Theme> => ({
  backgroundColor: 'backgroundDark.200',
  borderRadius: '8px',
  '& div': {
    color: 'grey.500',
  },
  '&:hover': {
    div: {
      color: 'grey.700',
    },
  },
  ...(size === TextAriaSize.SMALL && {
    width: '308px',
    div: {
      padding: '12px',
      fontSize: 'body1.fontSize',
    },
  }),
  ...(size === TextAriaSize.NORMAL && {
    width: '480px',
    div: {
      padding: '16px 16px 16px 20px',
      fontSize: 'body2.fontSize',
    },
  }),
});
