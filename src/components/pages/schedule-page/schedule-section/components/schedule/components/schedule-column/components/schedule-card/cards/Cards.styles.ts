import { SxProps, Theme } from '@mui/material/styles';

import { TDiscipline } from '@/types/schedule';

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

const subjectColors = (disciplineType: TDiscipline | null): SxProps<Theme> => ({
  '& .MuiTypography-body1': {
    color: 'grey.600',
    typography: 'body1Medium',
    display: '-webkit-box !important',
    WebkitLineClamp: 4,
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
  ...(disciplineType !== 'LABORATORY' &&
    disciplineType !== 'PRACTICE' &&
    disciplineType !== 'LECTURE' && {
      ...otherSubjects,
    }),
});

export const wrapper: SxProps<Theme> = {
  height: {
    tablet: '137px',
    mobile: '80px',
  },
  width: {
    tablet: '129px',
    mobile: '100%',
  },

  position: 'relative',
  cursor: 'pointer',
};

export const packedCard = (
  top: number,
  width: number,
  left: number,
): SxProps<Theme> => ({
  position: 'absolute',
  top: { mobile: 0, tablet: top },
  left: { mobile: left, tablet: -2 },
  width: {
    tablet: '129px',
    mobile: `calc(100% - ${width}px)`,
  },
  outline: '2px solid',
  outlineColor: { mobile: 'transparent', tablet: '#1E1E1E' }, //It is backgroundDark.100, but MUI doesn\'t support theme colors for outlineColor
});

export const card = (
  disciplineType: TDiscipline | null,
  height: string | number,
  minHeight = 'unset',
): SxProps<Theme> => ({
  width: {
    tablet: '129px',
    mobile: '100%',
  },
  height: {
    tablet: height,
    mobile: '80px',
  },
  minHeight: minHeight,
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
  wordBreak: 'break-all',
  outline: '2px solid',
  outlineColor: '#1E1E1E',
  '& .Mui-disabled': {
    pointerEvents: 'unset',
  },
  ...subjectColors(disciplineType),
});

export const time: SxProps<Theme> = {
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};
