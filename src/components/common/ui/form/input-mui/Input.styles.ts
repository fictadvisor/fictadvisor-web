import { SxProps, Theme } from '@mui/material/styles';

import {
  InputSize,
  InputState,
  InputType,
} from '@/components/common/ui/form/input-mui/Input';
import theme from '@/styles/theme';
import palette from '@/styles/theme/constants/pallete';

export const wrapper: SxProps<Theme> = {
  width: '100%',
  padding: 0,
};

export const label = (state: InputState): SxProps<Theme> => ({
  overflow: 'unset',
  padding: '2px 8px',
  maxWidth: '100%',

  // Makes only lower half of the label to have background (designers asked to do this)
  background: `linear-gradient(180deg, rgba(30, 30, 30, 0) 50%, ${theme.palette.backgroundDark[50]} 49.95%)`,

  ...(state === InputState.ERROR && {
    color: 'error.500',
    '&.Mui-focused': {
      color: 'error.500',
    },
  }),

  ...(state === InputState.SUCCESS && {
    color: 'success.600',
    '&.Mui-focused': {
      color: 'success.600',
    },
  }),

  ...(state === InputState.DEFAULT && {
    color: 'grey.800',
    '&.Mui-focused': {
      color: 'grey.800',
    },
  }),

  '&.Mui-disabled': {
    color: 'grey.400',
  },
});

export const remark = (state: InputState): SxProps<Theme> => ({
  margin: '2px 8px 0 16px',

  ...(state === InputState.ERROR && {
    color: 'error.500',
  }),

  ...(state === InputState.SUCCESS && {
    color: 'success.600',
  }),

  typography: 'overline',
  minHeight: '20px',
});

export const input = (state: InputState, size: InputSize): SxProps<Theme> => ({
  transition: 'all 0.2s ease-in-out',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',

  gap: '8px',
  backgroundColor: 'backgroundDark.50',
  borderRadius: '8px',
  resize: 'none',
  border: '2px solid',
  color: 'grey.800',

  ...(size === InputSize.LARGE && {
    padding: '14px 16px',
    typography: 'body2',
  }),

  ...(size === InputSize.MEDIUM && {
    padding: '13px 12px',
    typography: 'body1',
  }),

  ...(state === 'default' && {
    borderColor: 'grey.500',
    '&:hover': {
      borderColor: 'grey.700',
    },
    '&.Mui-focused': {
      borderColor: 'grey.700',
    },
  }),

  ...(state === 'error' && {
    borderColor: 'error.500',
  }),

  ...(state === 'success' && {
    borderColor: 'success.600',
  }),

  '&.Mui-disabled': {
    borderColor: 'grey.400',
  },

  svg: {
    ...(size === InputSize.LARGE && {
      width: '24px',
      height: '24px',
    }),

    ...(size === InputSize.MEDIUM && {
      width: '22px',
      height: '22px',
    }),

    flexShrink: '0',
    p: 0,
  },

  input: {
    '&.Mui-disabled': {
      cursor: 'not-allowed',
    },
    padding: 0,
    '::placeholder': {
      color: 'grey.500',
    },
  },

  fieldset: {
    border: 'none',
  },
});

export const rightIcon = (type: InputType, state: InputState) => ({
  ...((type === InputType.SEARCH || type === InputType.PASSWORD) && {
    cursor: 'pointer',
  }),
  ...(state === InputState.ERROR &&
    type !== InputType.PASSWORD && {
      color: palette.error[500],
    }),

  ...(state === InputState.SUCCESS &&
    type !== InputType.PASSWORD && {
      color: palette.success[600],
    }),
});
