import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {};

export const datePicker: SxProps<Theme> = {
  '.MuiInputBase-root': {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
};

export const input: SxProps<Theme> = {
  width: '100%',
  backgroundColor: 'backgroundDark.200',
  borderRadius: '8px',
  '& .MuiOutlinedInput-input': {
    color: 'white.main',
    '&::placeholder': {
      color: 'grey.600',
    },
    '&.Mui-disabled': {
      '-webkit-text-fill-color': 'unset',
      opacity: 0.3,
    },
  },
  '& .Mui-disabled': {
    svg: {
      '-webkit-text-fill-color': 'unset',
      opacity: 0.3,
    },
  },

  '&:hover': {
    '& .MuiOutlinedInput-input': {
      '&::placeholder': {
        color: 'grey.700',
      },
    },
  },

  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      border: 'none',
    },
  },

  svg: {
    color: 'grey.800',
  },

  '.MuiInputBase-root': {
    paddingY: '10px',
    height: '40px',
    display: 'flex',
    flexDirection: 'row-reverse',
    gap: '16px',
  },
  '.MuiInputBase-input': {
    padding: 0,
  },
};

export const calendar: SxProps<Theme> = {};
