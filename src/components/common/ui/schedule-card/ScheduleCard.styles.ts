import { SxProps, Theme } from '@mui/material/styles';

export const wrapper = (disciplineType): SxProps<Theme> => ({
  width: {
    mobileMedium: '128px',
    mobile: '252px',
  },
  height: {
    mobileMedium: '131px',
    mobile: '80px',
  },
  backgroundColor: '#262B3A',
  padding: '8px 8px 12px 8px',
  borderLeft: '8px solid',
  borderRadius: '6px',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  textAlign: 'start',
  textTransform: 'none',
  gap: '4px',
  '& .MuiTypography-body1': {
    color: 'grey.600',
    typography: 'body1Medium',
  },
  ...(disciplineType === 'lecture' && {
    backgroundColor: 'indigo.100',
    borderColor: 'indigo.700',
    '& .MuiTypography-body2': {
      typography: 'body1',
      color: '#84899D',
    },
    '&:hover': {
      backgroundColor: 'indigo.200',
      borderColor: 'indigo.800',
    },
    '&:active': {
      backgroundColor: 'indigo.300',
      borderColor: 'indigo.900',
    },
    '&:disabled': {
      backgroundColor: 'indigo.100',
      borderColor: 'indigo.300',
      '& .MuiTypography-body1': {
        color: '#918C91',
      },
      '& .MuiTypography-body2': {
        color: '#918C91',
      },
    },
  }),
  ...(disciplineType === 'practice' && {
    backgroundColor: 'orange.100',
    borderColor: 'orange.500',
    '& .MuiTypography-body2': {
      typography: 'body1',
      color: '#A28880',
    },
    '&:hover': {
      backgroundColor: 'orange.200',
      borderColor: 'orange.600',
    },
    '&:active': {
      backgroundColor: 'orange.300',
      borderColor: 'orange.700',
    },
    '&:disabled': {
      backgroundColor: 'orange.200',
      borderColor: 'orange.400',
      '& .MuiTypography-body1': {
        color: '#A2948F',
      },
      '& .MuiTypography-body2': {
        color: '#A2948F',
      },
    },
  }),
  ...(disciplineType === 'laboratory' && {
    backgroundColor: 'mint.100',
    borderColor: 'mint.600',
    '& .MuiTypography-body2': {
      typography: 'body1',
      color: '#7B9B97',
    },
    '&:hover': {
      backgroundColor: 'mint.200',
      borderColor: 'mint.800',
    },
    '&:active': {
      backgroundColor: 'mint.300',
      borderColor: 'mint.900',
    },
    '&:disabled': {
      backgroundColor: 'mint.50',
      borderColor: 'mint.200',
      '& .MuiTypography-body1': {
        color: '#8E9694',
      },
      '& .MuiTypography-body2': {
        color: '#7B8381',
      },
    },
  }),
  ...(disciplineType === 'other' && {
    backgroundColor: 'violet.100',
    borderColor: 'violet.700',
    '& .MuiTypography-body2': {
      typography: 'body1',
      color: '#967996',
    },
    '&:hover': {
      backgroundColor: 'violet.200',
      borderColor: 'violet.800',
    },
    '&:active': {
      backgroundColor: 'violet.300',
      borderColor: 'violet.900',
    },
    '&:disabled': {
      backgroundColor: 'violet.50',
      borderColor: 'violet.300',
      '& .MuiTypography-body1': {
        color: '#918C91',
      },
      '& .MuiTypography-body2': {
        color: '#7E797E',
      },
    },
  }),
});
