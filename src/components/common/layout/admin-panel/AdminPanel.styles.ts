import { SxProps, Theme } from '@mui/material/styles';
import { alpha } from '@mui/system';

import theme from '@/styles/theme';

export const drawer: SxProps<Theme> = {
  '& .MuiDrawer-paper': {
    width: '240px',
    border: 'none',
    backgroundColor: alpha(theme.palette.grey[50], 0.62),
  },
};

export const tabList: SxProps<Theme> = {
  color: 'grey.800',
  padding: '8px 16px',
  '.MuiTabs-flexContainer': {
    flexDirection: 'column',
    gap: '6px',
  },
};

export const tab: SxProps<Theme> = {
  backgroundColor: 'backgroundDark.100',
  border: {
    mobile: 'none',
    desktopSemiMedium: 'none',
  },
  maxWidth: {
    mobile: '208px',
    desktopSemiMedium: '208px',
  },
  padding: {
    mobile: '8px 16px',
    desktopSemiMedium: '8px 16px',
  },
  '&:hover, &.Mui-selected': {
    backgroundColor: 'backgroundDark.200',
    border: {
      mobile: 'none',
      desktopSemiMedium: 'none',
    },
  },
};

export const pollPartHeader: SxProps<Theme> = {
  typography: 'body2Medium',
  padding: '4px 0 0',
};
