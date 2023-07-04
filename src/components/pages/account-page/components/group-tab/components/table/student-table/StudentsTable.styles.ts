import { SxProps } from '@mui/material/styles';
import { Theme } from '@mui/system';

export const button: SxProps<Theme> = {
  width: { mobile: 'min-content' },
  whiteSpace: 'nowrap',
};

export const dividerWrapper: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '18px',
  alignItems: 'center',
  pb: '20px',
};

export const tableContainer: SxProps<Theme> = {
  borderRadius: '6px',
  border: '1px solid',
  borderColor: 'grey.200',
  backgroundColor: 'backgroundDark.200',
  mb: '58px',
};

export const row: SxProps<Theme> = {
  height: '70px',
  display: 'flex',
  alignItems: 'center',
  p: '16px 12px',
  borderBottom: '1px solid',
  borderBottomColor: 'grey.200',
  '&:last-child': {
    border: 'none',
  },
  '& .MuiTableCell-root': {
    color: 'white.main',
    p: 0,
    borderBottom: 'none',
    '&:nth-of-type(2)': {
      width: '10%',
    },
    '&:nth-of-type(4)': {
      width: '30%',
    },
    '&:nth-of-type(1),&:nth-of-type(3)': {
      width: '30%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '16px',
      '& img': {
        borderRadius: '50%',
      },
      '& .MuiTypography-root': {
        typography: 'body2',
      },
    },
  },
};
