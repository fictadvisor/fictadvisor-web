import { SxProps, Theme } from '@mui/material/styles';

import colorInfo from '@/components/common/ui/tag-mui/utils/constants';

export const input = (size): SxProps<Theme> => ({
  width: '100%',
  backgroundColor: 'backgroundDark.200',
  borderRadius: '8px',
  '& .MuiOutlinedInput-input': {
    color: 'grey.600',
    '&::placeholder': {
      color: 'grey.600',
    },
    '&.Mui-disabled': { '-webkit-text-fill-color': 'unset', opacity: 0.3 },
  },
  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      border: 'none',
    },
    '& fieldset': {
      borderRadius: '8px',
      borderColor: 'backgroundDark.200',
    },
    '&.Mui-focused fieldset': {
      borderRadius: '8px',
      borderColor: 'backgroundDark.200',
    },
    '&.Mui-hover fieldset': {
      borderRadius: '8px',
      borderColor: 'backgroundDark.200',
    },
  },
  ...(size === 'normal' && {
    '.MuiInputBase-root': {
      maxHeight: '40px',
    },
  }),
  ...(size === 'large' && {
    '.MuiInputBase-root': {
      height: '45px',
    },
  }),
});
