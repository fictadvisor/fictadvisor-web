import { SxProps, Theme } from '@mui/material/styles';

import {
  EclipseSize,
  EclipseType,
} from '@/components/pages/about-page/AboutPage';

export const container: SxProps<Theme> = {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: { desktop: '0 80px 0', mobile: '0 16px 0' },
  overflow: 'hidden',
};

export const fictCard: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: { tablet: '524px', mobile: '330px' },
  height: { tablet: '344px', mobile: 'fit-content' },
  marginTop: { tablet: '160px', mobile: '400px' },
  gap: { tablet: '12px', mobile: '4px' },
  padding: { tablet: '40px', mobile: '16px' },
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
export const eclipse = (
  size: EclipseSize,
  type: EclipseType,
  opacity: number,
): SxProps<Theme> => ({
  position: 'absolute',
  borderRadius: '100%',
  filter: 'blur(60px)',
  ...(size === EclipseSize.SMALL && {
    width: '250px',
    height: '250px',
  }),
  ...(size === EclipseSize.MEDIUM && {
    width: '420px',
    height: '420px',
  }),
  ...(size === EclipseSize.LARGE && {
    width: '600px',
    height: '600px',
  }),

  ...(type === EclipseType.RED && {
    background: `rgba(222, 49, 49, ${opacity})`,
  }),
  ...(type === EclipseType.BLUE && {
    background: `rgba(48, 51, 135, ${opacity})`,
  }),
  ...(type === EclipseType.VIOLET && {
    background: `rgba(128, 48, 135, ${opacity})`,
  }),
});
