import { isIOS, isSafari } from 'react-device-detect';
import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';
export const mainPage: SxProps<Theme> = {
  width: '100%',
  background: "url('/images/main-page/main-background.png')",
  display: 'block',
  backgroundSize: {
    desktop: '100% 100%',
    desktopMedium: '1440px 100%',
  },
};

export const title: SxProps<Theme> = {
  typography: theme.typography.h2Bold,
  position: 'relative',
  zIndex: 100,
  width: 'max-content',
};

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
  right: '-15px',
  svg: {
    color: theme.palette.grey['300'],
    clipPath:
      'polygon(58% -10%, 100% 30%, 100% 96%, 88% 96%, 75% 100%, 0% 90%, 2% 75%, 4% 72%, 4% 50%)',
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
    desktop: 'flex',
    tablet: 'none',
    mobileMedium: 'none',
  },
};

export const buttonTab: SxProps<Theme> = {
  display: {
    desktop: 'none',
    tablet: 'flex',
    mobileMedium: 'none',
  },
};

export const buttonMob: SxProps<Theme> = {
  flexWrap: 'wrap',
  gap: '14px',
  width: '100%',
  display: {
    desktop: 'none',
    tablet: 'none',
    mobileMedium: 'flex',
  },
};

// .buttons {
//   display: flex;
//   width: fit-content;
//
// .buttons-desk {
//     display: flex;
//     gap: 20px;
//   }
//
// .buttons-tabl,
// .buttons-mob {
//     display: none;
//   }
// }
//
// .button-divider {
//   border: 1px solid $button-divider-color;
// }
//
// .resources {
// @include flex-center;
//   flex-direction: column;
//   margin: 97px 0 127px;
//
//   h3 {
//     font-weight: $font-weight-bold;
//   }
// }
//
// .resources-cards {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 16px;
//   padding-top: 64px;
//   max-width: 1064px;
// }
//
// @media only screen and (max-width: $breakpoint-desktop-semi-medium) {
// .build-image {
//     width: 75%;
//     right: -50px;
//
//     svg {
//       height: auto;
//     }
//   }
// }
//
// @media only screen and (max-width: $breakpoint-desktop) {
// .build-image {
//     right: -15px;
//   }
// }
//
// @media only screen and (max-width: $breakpoint-tablet) {
// .build-image {
//     right: -50px;
//
//     svg {
//       clip-path: none;
//     }
//   }
//
// .resources-cards {
//     gap: 0.5rem;
//   }
// }
//
// @media only screen and (max-width: $breakpoint-mobile-medium) {
// .header {
//     flex-direction: column-reverse;
//     align-items: flex-end;
//
//   .build-image {
//       width: 100%;
//     }
//
//   .title {
//       top: -24px;
//       font-size: 28px;
//       width: 100%;
//     }
//   }
//
// .header-info {
//     width: 100%;
//     padding: 0 10px 0 17px;
//
//   .header-info-content {
//       left: 17px;
//     }
//
//     p {
//       margin: 0 0 36px 0;
//       padding-right: 17px;
//       font-size: 14px;
//       line-height: 140%;
//       width: 100%;
//     }
//   }
//
// .buttons {
//     gap: 14px;
//     width: 100%;
//
//     button {
//       font-size: 14px;
//       width: auto;
//     }
//
//   .buttons-desk {
//       display: none;
//     }
//
//   .buttons-mob {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 14px;
//     }
//   }
//
// .resources {
//     margin-bottom: 40px;
//   }
//
// .resources-cards {
//     padding: 32px 17px;
//   }
//
// .resources h3 {
//     font-weight: 500;
//     font-size: 20px;
//   }
// }
//
// @media only screen and (max-width: $breakpoint-mobile) {
// .build-image {
//     right: -30px;
//   }
// }
//
// @media only screen and (min-width: $breakpoint-mobile-medium) and (max-width: $breakpoint-tablet) {
// .header {
//     flex-direction: column-reverse;
//     align-items: flex-end;
//
//   .build-image {
//       width: 100%;
//
//       svg {
//         width: 80%;
//       }
//     }
//   }
//
// .header-info {
//     width: 100%;
//     padding: 0 40px 0 50px;
//
//   .title {
//       width: 80%;
//       top: -50px;
//     }
//
//     p {
//       margin: 0 0 44px 0;
//       width: 100%;
//     }
//   }
//
// .buttons {
//   .buttons-desk {
//       display: none;
//     }
//
//   .buttons-tabl {
//       display: flex;
//       gap: 20px;
//     }
//   }
//
// .button-divider {
//     display: none;
//   }
// }
//
// @media only screen and (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
// .header-info {
//   .title {
//       width: 100%;
//     }
//   }
//
// .buttons {
//   .buttons-desk {
//       display: none;
//     }
//
//   .buttons-tabl {
//       display: flex;
//       gap: 20px;
//     }
//   }
//
// .main-page {
//     background-size: cover;
//   }
// }
