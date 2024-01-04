import { SxProps, Theme } from '@mui/material/styles';

export const header: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const editName: SxProps<Theme> = {
  width: '657px',
  p: '16px',
  borderBottom: '1px solid',
  borderColor: 'backgroundDark.400',
};

export const name: SxProps<Theme> = {
  typography: 'body2',
  color: '#bbbbbb',
  fontWeight: 500,
};

export const button: SxProps<Theme> = {
  width: '171px',
  height: '48px',
  p: '12px 24px',
  borderRadius: '8px',
};

export const input: SxProps<Theme> = {
  width: '308px',
};

export const textArea: SxProps<Theme> = {
  width: '655px',
  '&.MuiFormControl-root': {
    '& .MuiInputBase-root, label': {
      margin: 0,
    },
  },
  mb: '20px',
};
