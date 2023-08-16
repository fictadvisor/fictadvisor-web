import { SxProps, Theme } from '@mui/material/styles';

export const container: SxProps<Theme> = {
  dislpay: 'flex',
  width: '100%',
  flexDirection: 'column',
  padding: { desktop: '0 80px 0', mobile: '0 16px 0' },
  overflow: 'hidden',
};

export const fictCard: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '524px',
  width: '100%',
  height: { desktop: '344px', mobile: 'fit-content' },
  justifyContent: 'center',
  marginLeft: { desktop: '80px', mobile: '0' },
  position: { desktop: 'absolute', mobile: 'relative' },
  marginTop: { desktop: '216px', mobile: '400px' },
  gap: { desktop: '12px', mobile: '4px' },
  padding: { desktop: '40px', mobile: '16px' },
  background: 'rgba(30, 30, 30, 0.35)',
  border: '1px solid #A3A3A3',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  zIndex: 1,
};
export const cathedraCard: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: { desktop: '24px 20px 16px', mobile: '24px 16px 16px' },
  background: 'rgba(30, 30, 30, 0.35)',
  border: '1px solid #A3A3A3',
  backdropFilter: 'blur(10px)',
  overflow: 'hidden',
  borderRadius: '16px',
};

export const specialtyTextCard: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: { desktop: '20px', mobile: '16px' },
  padding: { desktop: '30px', mobile: '16px' },
  borderRadius: '12px',
  background: '#1E1E1E',
};

export const studentTextCard: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  borderRadius: '12px',
  background: '#151515',
  alignItems: 'flex-start',
  padding: '20px',
};
