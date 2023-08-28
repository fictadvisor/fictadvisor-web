import { SxProps, Theme } from '@mui/material';

export const container = {
  width: { mobile: '100%', tablet: '528px' },
  padding: '36px 36px 36px 28px',
  boxShadow: '0px 4px 50px 10px rgba(0, 0, 0, 0.25)',
  position: 'fixed',
  zIndex: 3,
  backgroundColor: 'backgroundDark.100',
  top: '64px',
  right: '0',
  display: 'flex',
  flexFlow: 'column nowrap',
};

export const row: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '8px',
  '&>*:nth-child(1)': {
    minWidth: '96px',
    pr: '8px',
  },
};

export const titleContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px!important',
};

export const teachersContainer: SxProps<Theme> = {
  display: 'flex',
  flexFlow: 'column nowrap',
};

export const infoContainer: SxProps<Theme> = {
  '& .MuiTabs-flexContainer': {
    gap: '8px',
  },

  '& button': {
    p: '8px 16px',
    width: 'fit-content',
    height: 'fit-content',
  },
};
