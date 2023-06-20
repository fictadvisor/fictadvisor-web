import { SxProps, Theme } from '@mui/material/styles';

export const card: SxProps<Theme> = {
  position: 'sticky',
  top: '88px',
  border: '1px solid #404040',
  boxShadow:
    '1px 1px 3px rgba(10, 10, 10, 0.09), 2px 4px 16px rgba(13, 13, 13, 0.13)',
  borderRadius: '4px',
  backgroundColor: 'backgroundDark',
  display: {
    desktop: 'none',
    desktopSemiMedium: 'flex',
  },
  flexDirection: 'column',
  gap: '20px',
  p: '32px',
  minWidth: '524px',
  width: '524px',
  height: 'fit-content',
};

export const top: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: '160px 1fr',
  gridTemplateRows: '160px',
  gap: '32px',
};

export const info: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
};

export const image: SxProps<Theme> = {
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  borderRadius: '50%',
};

export const title: SxProps<Theme> = {
  fontSize: '24px',
};

export const rating: SxProps<Theme> = {
  marginTop: '10px',
};

export const tags: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: '25px',
  gap: '8px',
};

export const contacts: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',
};
