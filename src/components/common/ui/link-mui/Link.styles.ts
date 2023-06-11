import { SxProps, Theme } from '@mui/material/styles';

import palette from '@/styles/theme/constants/pallete';
import typography from '@/styles/theme/constants/typography';

export const LinkStyles = (type): SxProps<Theme> => ({
  color: type == 'white' ? palette.grey[800] : palette.info[400],
  typography: {
    mobile: typography.body1,
    desktopSemiMedium: typography.body1,
  },
  textDecorationColor: type == 'white' ? palette.grey[800] : palette.info[400],
  '&:visited': {
    color: type == 'blue' ? palette.info[200] : null,
    textDecorationColor: type == 'blue' ? palette.info[200] : null,
  },
  '&:hover': {
    color: type == 'blue' ? palette.info[500] : null,
    textDecorationColor: type == 'blue' ? palette.info[500] : null,
  },
  '&:active': {
    color: type == 'blue' ? palette.info[700] : null,
    textDecorationColor: type == 'blue' ? palette.info[700] : null,
  },
});
