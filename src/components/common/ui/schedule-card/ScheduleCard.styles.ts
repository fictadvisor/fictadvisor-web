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
  textAlign: 'start',
  textTransform: 'none',
  gap: '4px',
  ...(type === 'lecture' && {
    backgroundColor: '#262B3A',
    borderColor: '#4E67BA',
    '&:hover': {
      backgroundColor: '#292F3F',
      borderColor: '#5F77C6',
    },
    '&:active': {
      backgroundColor: '#2A3043',
      borderColor: '#7D92D7',
    },
    '&:disabled': {
      backgroundColor: '#262B3A',
      borderColor: '#2A3043',
      color: '#90929A',
    },
  }),
  ...(type === 'practice' && {
    backgroundColor: '#442C24',
    borderColor: '#BB5A39',
    '&:hover': {
      backgroundColor: '#4B2E24',
      borderColor: '#DA5F35',
    },
    '&:active': {
      backgroundColor: '#4F332A',
      borderColor: '#E9764F',
    },
  }),
  ...(type === 'laboratory' && {
    backgroundColor: '#263836',
    borderColor: '#5BBEAF',
    '&:hover': {
      backgroundColor: '#29403C',
      borderColor: '#69D3C3',
    },
    '&:active': {
      backgroundColor: '#2D4441',
      borderColor: '#8EECDD',
    },
  }),
  ...(type === 'other' && {
    backgroundColor: '#322032',
    borderColor: '#984C98',
    '&:hover': {
      backgroundColor: '#362336',
      borderColor: '#BA6CBA',
    },
    '&:active': {
      backgroundColor: '#3B293B',
      borderColor: '#D78ED7',
    },
  }),
});

export const subject: SxProps<Theme> = {
  typography: 'body1',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '140%',
  color: 'grey.600',
  '& .Mui-disabled': {
    color: '#90929A',
  },
};

export const time = (type): SxProps<Theme> => ({
  width: '104px',
  height: '80px',
  typography: 'body1',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '140%',
  ...(type === 'lecture' && {
    color: '#84899D',
    '&:disabled': {
      color: '#90929A',
    },
  }),
  ...(type === 'practice' && {
    color: '#A28880',
  }),
  ...(type === 'laboratory' && {
    color: '#7B9B97',
  }),
  ...(type === 'other' && {
    color: '#967996',
  }),
});
