import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const wrapper: SxProps<Theme> = {
  width: '632px',
  marginLeft: '124px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '@media screen and (max-width: 1600px)': {
    maxWidth: '800px',
    width: '800px',
  },

  '@media screen and (max-width: 1500px)': {
    maxWidth: '700px',
    width: '700px',
  },

  '@media screen and (max-width: 1400px)': {
    maxWidth: '500px',
  },

  '@media screen and (max-width: 1280px)': {
    width: '360px',
  },

  [theme.breakpoints.down('desktop')]: {
    maxWidth: '100vw',
    width: '100vw',
    margin: 0,
    animationName: '$appear',
    animationDuration: '0.3s',
  },

  '@keyframes appear': {
    from: {
      opacity: 0,
    },

    to: {
      opacity: 1,
    },
  },
};

export const successWrapper: SxProps<Theme> = {
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const answersWrapper: SxProps<Theme> = {
  width: '100%',

  [theme.breakpoints.down('desktop')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 0,
    height: '100%',
  },
};

export const loaderWrapper: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const answersSavedWrapper: SxProps<Theme> = {
  minHeight: '100vh',
  minWidth: '100%',
  width: '100vw',
  height: '100%',
  margin: 0,
};

export const form: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',

  [theme.breakpoints.down('desktop')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    width: '100%',
    height: '100%',
    padding: '24px 16px',
  },
};

export const toQuestionsList: SxProps<Theme> = {
  width: '100%',
  height: '52px',
  borderBottom: `1px solid ${theme.palette.backgroundDark[400]}`,
  transition: '0.3s',
  padding: '0 15px',
  display: 'none',

  '&:hover': {
    background: theme.palette.backgroundDark[300],
  },
  '&:active': {
    background: theme.palette.backgroundDark[400],
  },

  [theme.breakpoints.down('desktop')]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const button: SxProps<Theme> = {
  width: 'fit-content',
  borderRadius: '8px',

  [theme.breakpoints.down('desktop')]: {
    width: '100%',
    marginBottom: '38px',
  },
};

export const questionName: SxProps<Theme> = {
  width: 'fit-content',
  fontSize: '14px',
  fontWeight: 'bold',
};
