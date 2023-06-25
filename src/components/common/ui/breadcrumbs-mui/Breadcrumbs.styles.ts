import { SxProps, Theme } from '@mui/system';

import palette from '@/styles/theme/constants/pallete/palette';
import typography from '@/styles/theme/constants/typography/typography';

export const homeIcon: SxProps<Theme> = {
  width: '14px',
  height: '14px',
  transform: 'translateY(-1px)',
};

export const breadcrumb: SxProps<Theme> = {
  li: {
    '&:last-child': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      flex: 1,
    },
  },
  a: {
    fontSize: typography.body1,
    gap: '4px',
    display: 'flex',
    alignItems: 'center',
    color: palette.grey[700],
    span: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  },
};

export const arrow: SxProps<Theme> = {
  width: '12px',
  height: '12px',
  display: 'flex',
};
