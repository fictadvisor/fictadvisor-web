import { SxProps, Theme } from '@mui/material/styles';

export const footerContainer: SxProps<Theme> = {
  display: {
    desktop: 'flex',
    mobile: 'grid',
  },
  overflow: 'hidden',
  maxWidth: '100%',
  minWidth: 'fit-content',
  position: {
    desktop: 'unset',
    mobile: 'relative',
  },
  bottom: 0,
  backgroundColor: 'rgba(23, 23, 23, 0.62)',
  height: {
    desktop: '300px',
    mobile: '286px',
  },
};

export const footerLogoContainer: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: {
    desktop: '40px',
    mobile: '10px',
  },
  marginLeft: {
    desktop: '5%',
  },
  bottom: 0,
  position: {
    desktop: 'unset',
    mobile: 'absolute',
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
  },
  paddingLeft: '0px',
  paddingRight: '0px',
  height: {
    desktop: '28px',
    mobile: '22',
  },
  '& img': {
    height: '20px',
  },
  marginTop: {
    desktop: 'unset',
    mobile: '10px',
  },
};
export const signature: SxProps<Theme> = {
  marginTop: '8px',
  fontWeight: 400,
  color: '#FFFFFF',
  fontSize: {
    desktop: '16px',
    mobile: '11px',
  },
  lineHeight: {
    desktop: '24px',
    mobile: '17.6px',
  },
};
export const title: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'left',
  whiteSpace: 'nowrap',
  lineHeight: '150%',
  color: '#A3A3A3',
  width: {
    desktop: 'unset',
    mobile: 'fit-content',
  },
  height: {
    desktop: '30px',
    mobile: '20px',
  },
  fontWeight: 400,
  fontSize: {
    desktop: '16px',
    mobile: '11px',
  },
  padding: {
    desktop: '2px 12px',
    mobile: '2px 8px',
  },
};

export const mainReferences: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2px',
  width: {
    desktop: 'unset',
    mobile: 'fit-content',
  },
  height: {
    desktop: '220px',
    mobile: '204px',
  },
  marginTop: {
    desktop: '40px',
    mobile: '8px',
  },
  marginLeft: {
    mobile: '16px',
  },
  marginRight: {
    desktop: '7%',
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
};

export const support: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2px',
  width: 'fit-content',
  gridRowStart: 1,
  gridColumnStart: 2,
  gridRowEnd: 2,
  gridColumnEnd: 3,
  marginTop: {
    desktop: '40px',
    mobile: '8px',
  },
  marginRight: {
    desktop: '7%',
  },
  marginLeft: {
    desktop: 'unset',
    mobile: '10%',
  },
  height: {
    desktop: '144px',
    mobile: '106px',
  },
};
export const socialMedia: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  width: 'fit-content',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '4px',
  gridRowStart: 2,
  gridColumnStart: 2,
  gridRowEnd: 3,
  gridColumnEnd: 3,
  height: {
    desktop: 'fit-content',
    mobile: '60px',
  },
  marginTop: {
    desktop: '40px',
    mobile: '0px',
  },
  marginBottom: {
    desktop: '0px',
    mobile: '100px',
  },
  marginRight: {
    desktop: '11%',
  },
  marginLeft: {
    desktop: 'unset',
    mobile: '5%',
  },
};

export const socialButtons: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  height: 'fit-content',
  flexDirection: {
    desktop: 'column',
    mobile: 'row',
  },
  alignItems: {
    desktop: 'flex-start',
    mobile: 'center',
  },
  gap: {
    desktop: '2px',
    mobile: '4px',
  },
  width: {
    desktop: 'unset',
    mobile: 'fit-content',
  },
};
