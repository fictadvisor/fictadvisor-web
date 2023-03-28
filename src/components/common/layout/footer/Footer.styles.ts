import { SxProps, Theme } from '@mui/material/styles';

export const footerContainer: SxProps<Theme> = {
  display: 'grid',
  overflow: 'hidden',
  maxWidth: '100%',
  height: '300px',
  bottom: 0,
  minWidth: 'fit-content',
  gridTemplateColumns: '3fr 1fr 1fr 1fr',
  backgroundColor: 'rgba(23, 23, 23, 0.62)',
};

export const footerLogoContainer: SxProps<Theme> = {
  width: '100%',
  marginTop: '40px',
  marginLeft: '8.4%',
};

export const footerLogo: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginLeft: 'unset',
  width: '197px',
  paddingLeft: '0px',
  paddingRight: '0px',
  height: '28px',
  '& img': {
    height: '20px',
  },
};
export const signature: SxProps<Theme> = {
  marginTop: '8px',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#FFFFFF',
};
export const mainReferences: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2px',
  height: '220px',
  marginTop: '40px',
  marginLeft: '20%',
};

export const title: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'left',
  padding: '2px 12px',
  // width: '187px',
  whiteSpace: 'nowrap',
  height: '30px',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '150%',
  color: '#A3A3A3',
};

export const support: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: '40px',
  marginLeft: '15%',
  height: '106px',
  gap: '2px',
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
};
