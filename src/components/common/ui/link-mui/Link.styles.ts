import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';
import palette from '@/styles/theme/constants/pallete';
type LinkType = 'white' | 'blue';
export const LinkStyles = (type: LinkType): SxProps<Theme> => ({
  typography: {
    mobile: 'body1',
    desktopSemiMedium: 'body1',
  },
  ...(type === 'white' && {
    color: theme.palette.grey[800],
    textDecorationColor: theme.palette.grey[800],
    '&:visited': {
      color: theme.palette.grey[700],
      textDecorationColor: theme.palette.grey[700],
    },
    '&:hover': {
      color: palette.grey.white,
      textDecorationColor: palette.grey.white,
    },
    '&:active': {
      color: palette.grey.white,
      textDecorationColor: palette.grey.white,
    },
  }),
  ...(type === 'blue' && {
    color: theme.palette.info[400],
    textDecorationColor: theme.palette.info[400],
    '&:visited': {
      color: theme.palette.info[200],
      textDecorationColor: theme.palette.info[200],
    },
    '&:hover': {
      color: theme.palette.info[500],
      textDecorationColor: theme.palette.info[500],
    },
    '&:active': {
      color: theme.palette.info[700],
      textDecorationColor: theme.palette.info[700],
    },
  }),
});
