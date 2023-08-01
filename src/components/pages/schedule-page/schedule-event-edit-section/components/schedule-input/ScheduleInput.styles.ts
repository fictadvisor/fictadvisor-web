import { SxProps, Theme } from '@mui/material/styles';

import { ScheduleInputSize } from './ScheduleInput';

export const input = (size: ScheduleInputSize): SxProps<Theme> => ({
  width: '100%',
  backgroundColor: 'backgroundDark.200',
  borderRadius: '8px',
  '& .MuiOutlinedInput-input': {
    color: 'white.main',
    '&::placeholder': {
      color: 'grey.600',
    },
    '&.Mui-disabled': { '-webkit-text-fill-color': 'unset', opacity: 0.3 },
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

  ...(size === ScheduleInputSize.NORMAL && {
    '.MuiInputBase-root': {
      paddingY: '10px',
      paddingX: '12px',
      height: '40px',
    },
    '.MuiInputBase-input': {
      padding: 0,
    },
  }),
  ...(size === ScheduleInputSize.LARGE && {
    '.MuiInputBase-root': {
      padding: '12px',
      minHeight: '50px',
      fontSize: '20px',
    },
  }),
});
