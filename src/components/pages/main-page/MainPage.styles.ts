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
    mobile: 'column-reverse',
    tablet: 'column-reverse',
    desktop: 'row',
  },
  alignItems: {
    mobile: 'flex-end',
    tablet: 'flex-end',
    desktop: 'flex-start',
  },
};

export const headerInfo: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: {
    tablet: '100%',
    desktop: '30%',
  },
  height: {
    tablet: 'fit-content',
    desktop: 'fit-content',
  },
  position: 'relative',
  zIndex: 1,
  padding: {
    mobile: '0 10px 0 17px',
    mobileMedium: '0 40px 0 50px',
    tablet: '0 40px 0 50px',
    desktop: '202px 0 0 80px',
  },
};

export const title: SxProps<Theme> = {
  typography: {
    mobile: theme.typography.h4Bold,
    tablet: theme.typography.h2Bold,
  },
  display: 'block',
  position: 'relative',
  zIndex: 100,
  width: {
    mobileMedium: '80%',
    tablet: '100%',
    desktop: '100%',
    desktopSemiMedium: 'max-content',
    desktopLarge: 'max-content',
  },
  top: {
    mobileSemiMedium: '-24px',
    mobileMedium: '-50px',
    tablet: '-50px',
    desktop: 0,
  },
};

export const titlePar: SxProps<Theme> = {
  padding: {
    mobileSemiMedium: '0 17px 0 0',
    mobileMedium: '0 17px 0 0',
    tablet: 0,
  },
  margin: {
    mobileSemiMedium: '0 0 36px',
    mobileMedium: '0 0 44px',
    tablet: '0 0 44px',
    desktop: '50px 0 45px 0',
  },
  typography: {
    mobile: theme.typography.body1,
    tablet: theme.typography.body2,
  },
  width: {
    tablet: '100%',
    desktop: '170%',
  },
};

export const buildImage: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-end',
  position: 'relative',
  width: {
    tablet: '100%',
    desktop: '75%',
    desktopMedium: '100%',
    desktopSemiMedium: '75%',
  },
  padding: {
    desktop: '89px 0 0',
    desktopSemiMedium: 0,
  },
  right: {
    mobileSemiMedium: '-30px',
    mobileMedium: '-50px',
    tablet: '-50px',
    desktop: '-15px',
    desktopSemiMedium: '-50px',
    desktopMedium: '-15px',
    desktopLarge: '13px',
  },
  svg: {
    width: {
      mobileSemiMedium: '100%',
      mobileMedium: '80%',
      tablet: '80%',
      desktop: 'auto',
    },
    height: {
      mobileSemiMedium: 'auto',
      mobileMedium: 'auto',
      tablet: '100%',
      desktop: 'auto',
      desktopSemiMedium: 'auto',
    },
    color: theme.palette.grey['300'],
    clipPath:
      'polygon(58% -10%, 100% 30%, 100% 96%, 88% 96%, 75% 100%, 0% 90%, 2% 75%, 4% 72%, 4% 50%)',
    // clipPath: {
    //   tablet: 'none',
    //   desktopLarge:
    //     'polygon(58% -10%, 100% 30%, 100% 96%, 88% 96%, 75% 100%, 0% 90%, 2% 75%, 4% 72%, 4% 50%)',
    // },
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
  width: {
    mobileSemiMedium: 'auto',
  },
  typography: {
    mobile: theme.typography.body1Bold,
    tablet: theme.typography.buttonBold,
  },
  borderRadius: {
    mobile: '6px',
    tablet: '8px',
    desktopLarge: '8px',
  },
  padding: {
    mobileSemiMedium: '8px 16px',
    mobileMedium: '8px 16px',
    tablet: '12px 24px',
    desktopSemiMedium: '16px 32px',
    desktop: '12px 24px',
  },
};
export const buttonDesk: SxProps<Theme> = {
  width: 'max-content',
  display: {
    mobile: 'none',
    mobileMedium: 'none',
    tablet: 'none',
    desktop: 'flex',
    desktopLarge: 'flex',
  },
  gap: '20px',
};

export const buttonTab: SxProps<Theme> = {
  display: {
    mobile: 'none',
    mobileMedium: 'none',
    tablet: 'flex',
    desktop: 'none',
  },
  a: {
    margin: '0 20px 0 0',
  },
};

export const buttonMob: SxProps<Theme> = {
  typography: theme.typography.body1Bold,
  // flexWrap: 'wrap',
  gap: '14px',
  width: '100%',
  display: {
    mobileSemiMedium: 'flex',
    mobileMedium: 'flex',
    tablet: 'none',
  },
  flexDirection: {
    mobileSemiMedium: 'column',
    mobileMedium: 'row',
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
  margin: {
    mobileSemiMedium: '97px 0 40px',
    mobileMedium: '97px 0 40px',
    tablet: '97px 0 127px',
    desktopLarge: '97px 0 127px',
  },
  mobileMedium: {
    marginBottom: '40px',
  },
};

export const resourcesH3: SxProps<Theme> = {
  fontWeight: '700',
  typography: {
    mobileSemiMedium: theme.typography.h6Medium,
    mobileMedium: theme.typography.h6Medium,
    tablet: theme.typography.h3Bold,
  },
};

export const resourcesCards: SxProps<Theme> = {
  padding: {
    mobile: '32px 17px',
    tablet: '64px 0 0 0',
  },
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: {
    mobileSemiMedium: '0.5rem',
    mobileMedium: '0.5rem',
    desktop: '1rem',
    desktopLarge: '16px',
  },
  maxWidth: '1064px',
};
