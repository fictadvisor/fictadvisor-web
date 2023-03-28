import { SxProps, Theme } from '@mui/material/styles';

export const footerContainer: SxProps<Theme> = {
  display: 'grid',
  overflow: 'hidden',
  maxWidth: '100%',
  minWidth: 'fit-content',
  bottom: 0,
  backgroundColor: 'rgba(23, 23, 23, 0.62)',
  height: {
    desktop: '300px',
    mobile: '286px',
  },
  gridTemplateRows: {
    desktop: '',
    mobile: '4rem auto 74px',
  },
  gridTemplateColumns: {
    desktop: '3fr 1fr 1fr 1fr',
    mobile: 'auto',
  },
};

export const footerLogoContainer: SxProps<Theme> = {
  width: '100%',
  marginTop: {
    desktop: '40px',
    mobile: '10px',
  },
  marginLeft: {
    desktop: '8.4%',
    mobile: '50%',
  },
  display: {
    desktop: 'unset',
    mobile: 'flex',
  },
  flexDirection: {
    desktop: 'unset',
    mobile: 'column',
  },
  justifyContent: {
    desktop: 'unset',
    mobile: 'center',
  },
  alignItems: {
    desktop: 'unset',
    mobile: 'center',
  },
  marginBottom: {
    desktop: 'unset',
    mobile: '15px',
  },
};

export const footerLogo: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginLeft: 'unset',
  width: {
    desktop: '197px',
    mobile: '155px',
  },
  paddingLeft: '0px',
  paddingRight: '0px',
  height: {
    desktop: '28px',
    mobile: 'fit-content',
  },
  '& img': {
    height: '20px',
  },

  gridRowStart: {
    desktop: 'unset',
    mobile: 3,
  },
  gridColumnStart: {
    desktop: 'unset',
    mobile: 1,
  },
  gridRowEnd: {
    desktop: 'unset',
    mobile: 4,
  },
  gridColumnEnd: {
    desktop: 'unset',
    mobile: 3,
  },
  marginTop: {
    desktop: 'unset',
    mobile: '10px',
  },
};
export const signature: SxProps<Theme> = {
  marginTop: '8px',
  fontWeight: 400,
  fontSize: {
    desktop: '16px',
    mobile: '11px',
  },
  lineHeight: {
    desktop: '24px',
    mobile: '17.6px',
  },
  color: '#FFFFFF',
};
export const mainReferences: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2px',
  height: {
    desktop: '220px',
    mobile: '204px',
  },
  marginTop: {
    desktop: '40px',
    mobile: '8px',
  },
  marginLeft: {
    desktop: '20%',
    mobile: '5%',
  },

  gridRowStart: {
    desktop: 'unset',
    mobile: 1,
  },
  gridColumnStart: {
    desktop: 'unset',
    mobile: 1,
  },
  gridRowEnd: {
    desktop: 'unset',
    mobile: 3,
  },
  gridColumnEnd: {
    desktop: 'unset',
    mobile: 2,
  },
  width: {
    desktop: 'unset',
    mobile: 'fit-content',
  },
};

export const title: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'left',
  // width: '187px',
  whiteSpace: 'nowrap',
  width: { desktop: 'unset', mobile: 'fit-content' },
  height: {
    desktop: '30px',
    mobile: '20px',
  },
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '150%',
  color: '#A3A3A3',
  padding: {
    desktop: '2px 12px',
    mobile: '2px 8px',
  },
};

export const support: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: {
    desktop: '40px',
    mobile: '8px',
  },
  marginLeft: {
    desktop: '15%',
    mobile: '2%',
  },
  height: {
    desktop: '106px',
    mobile: '144px',
  },
  gap: '2px',
  gridRowStart: {
    mobile: 1,
  },
  gridColumnStart: {
    mobile: 2,
  },
  gridRowEnd: {
    mobile: 2,
  },
  gridColumnEnd: {
    mobile: 3,
  },
  width: { mobile: 'fit-content' },
};
export const socialMedia: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'flex-start',
  // flexDirection: 'column',
  marginTop: '40px',
  height: 'fit-content',
  gap: '4px',
};

export const socialButtons: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: 'fit-content',
  gap: '2px',
  '@media screen and (max-width: 768px)': {
    flexDirection: 'row',
    alignItems: 'center',
    width: 'fit-content',
    gap: '4px',
  },
};
