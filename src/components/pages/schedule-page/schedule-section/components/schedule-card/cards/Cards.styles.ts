import { SxProps, Theme } from '@mui/material/styles';

const otherSubjects: SxProps<Theme> = {
  backgroundColor: 'violet.100',
  borderColor: 'violet.700',
  '& .MuiTypography-body2': {
    typography: 'body1',
    color: 'violet.A100',
    opacity: 0.5,
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
      color: 'grey.800',
      opacity: 0.5,
    },
    '& .MuiTypography-body2': {
      color: 'grey.600',
      opacity: 0.5,
    },
  },
};

const subjectColors = (disciplineType: string): SxProps<Theme> => ({
  '& .MuiTypography-body1': {
    color: 'grey.600',
    typography: 'body1Medium',
    display: '-webkit-box !important',
    WebkitLineClamp: 4,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  ...(disciplineType === 'LECTURE' && {
    backgroundColor: 'indigo.100',
    borderColor: 'indigo.700',
    '& .MuiTypography-body2': {
      typography: 'body1',
      color: 'indigo.A100',
      opacity: 0.5,
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
        color: 'grey.800',
        opacity: 0.5,
      },
      '& .MuiTypography-body2': {
        color: 'grey.800',
        opacity: 0.5,
      },
    },
  }),
  ...(disciplineType === 'PRACTICE' && {
    backgroundColor: 'orange.100',
    borderColor: 'orange.500',
    '& .MuiTypography-body2': {
      typography: 'body1',
      color: 'orange.A100',
      opacity: 0.5,
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
        color: 'grey.800',
        opacity: 0.5,
      },
      '& .MuiTypography-body2': {
        color: 'grey.600',
        opacity: 0.5,
      },
    },
  }),
  ...(disciplineType === 'LABORATORY' && {
    backgroundColor: 'mint.100',
    borderColor: 'mint.600',
    '& .MuiTypography-body2': {
      typography: 'body1',
      color: 'mint.A100',
      opacity: 0.5,
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
        color: 'grey.800',
        opacity: 0.5,
      },
      '& .MuiTypography-body2': {
        color: 'grey.600',
        opacity: 0.5,
      },
    },
  }),
  ...(disciplineType === 'CONSULTATION' && {
    ...otherSubjects,
  }),
  ...(disciplineType === 'WORKOUT' && {
    ...otherSubjects,
  }),
  ...(disciplineType === 'EXAM' && {
    ...otherSubjects,
  }),
});

export const wrapper: SxProps<Theme> = {
  height: '137px',
  width: '128px',
  borderRadius: '6%',
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-end',
  cursor: 'pointer',
};

export const sectionWrapper = (height: number): SxProps<Theme> => ({
  height: height + 3,
  width: '132px',
  position: 'absolute',
  borderRadius: '6%',
  border: '2px solid',
  borderColor: 'backgroundDark.100',
  left: -2.5,
  display: 'flex',
  alignItems: 'flex-end',
});

export const section = (disciplineType: string): SxProps<Theme> => ({
  width: '100%',
  height: '100%',
  borderRadius: '5%',
  borderLeft: '8px solid',
  ...subjectColors(disciplineType),
});

export const card = (
  disciplineType: string,
  height: string | number,
): SxProps<Theme> => ({
  width: {
    mobileMedium: '129px',
    mobile: '252px',
  },
  height: {
    mobileMedium: height,
    mobile: '80px',
  },
  padding: '8px 8px 12px 8px',
  borderLeft: '8px solid',
  borderRadius: '6px',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  textAlign: 'start',
  textTransform: 'none',
  gap: '4px',
  ...subjectColors(disciplineType),
});

export const eventsContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  backgroundColor: 'backgroundDark.100',
  p: '16px',
  borderRadius: '6px',
  boxShadow: '0px 4px 10px 10px rgba(0, 0, 0, 0.10)',
  width: 'fit-content',
  position: 'relative',
  zIndex: 2,
};
export const eventsContainerGrid: SxProps<Theme> = {
  gap: '12px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
};
