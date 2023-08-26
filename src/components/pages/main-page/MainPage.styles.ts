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
  flexDirection: {
    desktop: 'row',
    tablet: 'column-reverse',
  },
  alignItems: {
    desktop: 'flex-start',
    tablet: 'flex-end',
  },
};

export const headerInfo: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: {
    desktop: '30%',
    tablet: '100%',
  },
  height: {
    desktop: 'fit-content',
    tablet: 'auto',
  },
  position: 'relative',
  zIndex: 1,
  padding: {
    desktop: '202px 0 0 80px',
    tablet: '0 40px 0 50px',
  },
};

export const title: SxProps<Theme> = {
  display: 'block',
  position: 'relative',
  zIndex: 100,
  width: {
    desktopLarge: 'max-content',
    desktopSemiMedium: 'max-content',
    desktop: '100%',
    tablet: '100%',
  },
  margin: {
    desktop: 'none',
    tablet: '0 0 50px',
  },
};

export const titlePar: SxProps<Theme> = {
  margin: {
    desktop: '50px 0 45px 0',
    tablet: '0 0 44px',
  },
  fontSize: '16px',
  lineHeight: '150%',
  width: {
    tablet: '100%',
    desktop: '170%',
  },
};

export const buildImage: SxProps<Theme> = {
  display: 'flex',
  flexDirection: {
    tablet: 'column',
    desktop: 'row',
  },
  justifyContent: 'flex-end',
  position: 'relative',
  width: {
    tablet: '100%',
    desktop: '75%',
    desktopMedium: '100%',
    desktopSemiMedium: '75%',
  },
  height: {
    desktop: '100%',
  },
  right: {
    tablet: '-50px',
    desktop: '-15px',
    desktopSemiMedium: '-50px',
    desktopMedium: '-15px',
    desktopLarge: '13px',
  },
  svg: {
    // width: {
    //   tablet: '80%',
    // },
    height: {
      desktopSemiMedium: 'auto',
    },
    color: theme.palette.grey['300'],
    clipPath: {
      tablet: 'none',
      desktopLarge:
        'polygon(58% -10%, 100% 30%, 100% 96%, 88% 96%, 75% 100%, 0% 90%, 2% 75%, 4% 72%, 4% 50%)',
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
  borderRadius: '8px',
  padding: {
    desktopSemiMedium: '16px 32px',
    desktop: '12px 24px',
  },
};
export const buttonDesk: SxProps<Theme> = {
  button: {
    typography: theme.typography.buttonBold,
    borderRadius: '8px',
    padding: {
      desktopSemiMedium: '16px 32px',
      desktop: '12px 24px',
    },
  },
  width: 'max-content',
  display: {
    desktopLarge: 'flex',
    desktop: 'flex',
    tablet: 'none',
    mobileMedium: 'none',
  },
  gap: '20px',
};

export const buttonTab: SxProps<Theme> = {
  display: {
    desktopLarge: 'none',
    desktop: 'none',
    tablet: 'flex',
    mobileMedium: 'none',
  },
  a: {
    margin: '0 10px 0 0',
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

export const buttonDivider: SxProps<Theme> = {
  border: '1px solid',
  borderColor: theme.palette.backgroundDark[400],
};

export const resources: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '97px 0 127px',
  mobileMedium: {
    marginBottom: '40px',
  },
};

export const resourcesH3: SxProps<Theme> = {
  fontWeight: '700',
  mobileMedium: {
    typography: theme.typography.h6Medium,
  },
};

export const resourcesCards: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: {
    desktopLarge: '16px',
    tablet: '1rem',
  },
  paddingTop: '64px',
  maxWidth: '1064px',
};
