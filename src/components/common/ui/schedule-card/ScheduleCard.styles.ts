import { SxProps, Theme } from '@mui/material/styles';

export const wrapper = (type): SxProps<Theme> => ({
  width: '128px',
  height: '131px',
  backgroundColor: '#262B3A',
  padding: '8px',
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
    fontWeight: 500,
  },
  ...(type === 'lecture' && {
    backgroundColor: '#262B3A',
    borderColor: '#4E67BA',
    '& .MuiTypography-body2': {
      fontSize: '14px',
      fontWeight: 400,
      color: '#84899D',
    },
    '&:hover': {
      backgroundColor: '#292F3F',
      borderColor: '#5F77C6',
    },
    '&:active': {
      backgroundColor: '#2A3043',
      borderColor: '#7D92D7',
    },
    '&:disabled': {
      backgroundColor: 'indigo.100',
      borderColor: 'indigo.200',
      '& .MuiTypography-body1': {
        color: '#90929A',
      },
    },
  }),
  ...(type === 'practice' && {
    backgroundColor: '#442C24',
    borderColor: '#BB5A39',
    '& .MuiTypography-body2': {
      fontSize: '14px',
      fontWeight: 400,
      color: '#A28880',
    },
    '&:hover': {
      backgroundColor: '#4B2E24',
      borderColor: '#DA5F35',
    },
    '&:active': {
      backgroundColor: '#4F332A',
      borderColor: '#E9764F',
    },
    '&:disabled': {
      backgroundColor: 'orange.200',
      borderColor: 'orange.400',
      '& .MuiTypography-body1': {
        color: '#A28880',
      },
    },
  }),
  ...(type === 'laboratory' && {
    backgroundColor: '#263836',
    borderColor: '#5BBEAF',
    '& .MuiTypography-body2': {
      fontSize: '14px',
      fontWeight: 400,
      color: '#7B9B97',
    },
    '&:hover': {
      backgroundColor: '#29403C',
      borderColor: '#69D3C3',
    },
    '&:active': {
      backgroundColor: '#2D4441',
      borderColor: '#8EECDD',
    },
    '&:disabled': {
      backgroundColor: 'mint.50',
      borderColor: 'mint.200',
      '& .MuiTypography-body1': {
        color: '#7B9B97',
      },
    },
  }),
  ...(type === 'other' && {
    backgroundColor: '#322032',
    borderColor: '#984C98',
    '& .MuiTypography-body2': {
      fontSize: '14px',
      fontWeight: 400,
      color: '#967996',
    },
    '&:hover': {
      backgroundColor: '#362336',
      borderColor: '#BA6CBA',
    },
    '&:active': {
      backgroundColor: '#3B293B',
      borderColor: '#D78ED7',
    },
    '&:disabled': {
      backgroundColor: 'violet.50',
      borderColor: 'violet.300',
      '& .MuiTypography-body1': {
        color: '#967996',
      },
    },
  }),
});
