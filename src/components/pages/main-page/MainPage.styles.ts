import { isIOS, isSafari } from 'react-device-detect';
import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const mainPageContent: SxProps<Theme> = {
  zIndex: 1,
  maxWidth: '1700px',
  margin: 'auto',
};

export const header: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
};

export const headerInfo: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '30%',
  height: 'fit-content',
  position: 'relative',
  zIndex: 1,
  padding: '202px 0 0 80px',
};

export const title: SxProps<Theme> = {
  typography: theme.typography.h2Bold,
  position: 'relative',
  zIndex: 100,
  width: 'max-content',
};

export const titlePar: SxProps<Theme> = {
  margin: '50px 0 45px 0',
  fontSize: '16px',
  lineHeight: '150%',
  width: '170%',
};

export const buildImage: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'relative',
  width: {
    desktopSemiMedium: '75%',
  },
  right: {
    desktopLarge: 0,
    desktop: '-15px',
    tablet: '-50px',
  },
  svg: {
    height: {
      desktopSemiMedium: 'auto',
    },
    color: theme.palette.grey['300'],
    clipPath: {
      desktopLarge:
        'polygon(58% -10%, 100% 30%, 100% 96%, 88% 96%, 75% 100%, 0% 90%, 2% 75%, 4% 72%, 4% 50%)',
      tablet: 'none',
    },
    transition: 'color 225ms cubic-bezier(0.37, 0, 0.63, 1)',
    ...((!isSafari || !isIOS) && {
      '&:hover': {
        color: theme.palette.white.main,
        filter: 'url("#filter_neon")',
      },
    }),
  },
};

export const buttons: SxProps<Theme> = {
  typography: theme.typography.buttonBold,
  display: 'flex',
  width: 'fit-content',
  gap: '20px',
};

export const buttonDesk: SxProps<Theme> = {
  display: {
    desktopLarge: 'flex',
    tablet: 'none',
    mobileMedium: 'none',
  },
};

export const buttonTab: SxProps<Theme> = {
  display: {
    desktopLarge: 'none',
    tablet: 'flex',
    mobileMedium: 'none',
  },
};

export const buttonMob: SxProps<Theme> = {
  flexWrap: 'wrap',
  gap: '14px',
  width: '100%',
  display: {
    desktopLarge: 'none',
    tablet: 'none',
    mobileMedium: 'flex',
  },
};

export const resources: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '97px 0 127px',
  h3: {
    fontWeight: 700,
  },
};

export const resourcesCards: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: {
    desktopLarge: '16px',
    tablet: '0.5rem',
  },
  paddingTop: '64px',
  maxWidth: '1064px',
};
