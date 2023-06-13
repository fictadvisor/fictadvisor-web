import { SxProps, Theme } from '@mui/material/styles';

export const tabList: SxProps<Theme> = {
  paddingTop: '24px',
  '.MuiTabs-flexContainer': {
    overflow: 'scroll',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      width: '0',
      height: '0',
    },
  },
  width: '100%',
};

export const tabPanelList: SxProps<Theme> = {
  paddingBottom: {
    mobile: '38px',
    desktop: '50px',
  },
};
