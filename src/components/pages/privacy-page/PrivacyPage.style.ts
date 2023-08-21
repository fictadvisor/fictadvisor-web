import { SxProps, Theme } from '@mui/material/styles';
export const privacyContent: SxProps<Theme> = {
  padding: {
    desktopLarge: '3% 20% 4% 13%',
    mobileMedium: '8%',
  },
};

export const h1Content: SxProps<Theme> = {
  fontWeight: 700,
  fontSize: '28px',
  marginBottom: '3%',
};

export const h6Content: SxProps<Theme> = {
  fontWeight: 700,
  fontSize: '20px',
  marginBottom: '1%',
};

export const privacyList: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '36px',
};
