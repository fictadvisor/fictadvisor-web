import { SxProps, Theme } from '@mui/material/styles';

import { TextAreaSize } from './types';

export const textArea = (size: TextAreaSize): SxProps<Theme> => ({
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
  ...(size === TextAreaSize.SMALL && {
    width: '308px',
    div: {
      padding: '12px',
      fontSize: 'body1.fontSize',
    },
  }),
  ...(size === TextAreaSize.NORMAL && {
    width: '480px',
    div: {
      padding: '16px 16px 16px 20px',
      fontSize: 'body2.fontSize',
    },
  }),
});
