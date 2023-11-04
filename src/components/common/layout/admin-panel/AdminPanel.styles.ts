import { SxProps, Theme } from '@mui/material/styles';
import { alpha } from '@mui/system';

import theme from '@/styles/theme';

export const drawer: SxProps<Theme> = {
  '& .MuiDrawer-paper': {
    width: '240px',
    position: 'static',
    marginLeft: '-228px',
    backgroundColor: alpha(theme.palette.grey[50], 0.62),
  },
};
