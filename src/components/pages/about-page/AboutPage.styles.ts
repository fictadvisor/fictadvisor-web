import { SxProps, Theme } from '@mui/material/styles';

export const container: SxProps<Theme> = {
  dislpay: 'flex',
  width: '100%',
  flexDirection: 'column',
  paddingLeft: '80px',
  paddingRight: '80px',
  overflow: 'hidden',
  gap: '140px',
};

export const section: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexGrow: 1,
};

export const fictCard: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  width: '524px',
  height: '344px',
  marginLeft: '80px',
  position: 'absolute',
  marginTop: '216px',
  gap: { desktop: '12px', mobile: '4px' },
  padding: '40px',
  background: 'rgba(30, 30, 30, 0.35)',
  border: '1px solid #A3A3A3',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  zIndex: 1,
};
export const cathedraCard: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  height: '324px',
  padding: '24px 20px 16px',
  flex: '1 1 0',
  width: '0',
  background: 'rgba(30, 30, 30, 0.35)',
  border: '1px solid #A3A3A3',
  backdropFilter: 'blur(10px)',
  overflow: 'hidden',
  borderRadius: '16px',
};

export const specialtyTextCard: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  borderRadius: '12px',
  background: '#1E1E1E',
  alignItems: 'flex-start',
  padding: '30px',
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
