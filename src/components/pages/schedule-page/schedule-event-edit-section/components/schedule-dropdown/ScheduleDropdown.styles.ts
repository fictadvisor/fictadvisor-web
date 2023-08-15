import { SxProps, Theme } from '@mui/material/styles';

export const input = (hasInput: boolean, hasIcon: boolean): SxProps<Theme> => ({
  width: '100%',
  backgroundColor: 'backgroundDark.200',
  borderRadius: '8px',
  '& .MuiOutlinedInput-input': {
    color: 'white.main',
    opacity: 1,
    '&::placeholder': {
      opacity: 1,
      color: 'grey.600',
    },
  },
  '& .Mui-focused': {
    svg: {
      '-webkit-text-fill-color': 'unset',
      opacity: 0.3,
    },
    '& .MuiOutlinedInput-input': {
      '&::placeholder': {
        '-webkit-text-fill-color': 'unset',
        opacity: 0.3,
      },
    },
  },

  '& .MuiInputAdornment-root': {
    margin: 0,
  },

  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      border: 'none',
    },
    '& .MuiOutlinedInput-input': {
      ...(!hasIcon && {
        padding: '0 !important',
      }),
    },
  },

  svg: {
    width: '18px',
    height: '18px',
    opacity: 1,
    color: 'grey.600',
  },

  '.MuiInputBase-root': {
    paddingY: '10px',
    paddingX: '12px',
    height: '40px',
    display: 'flex',
    alignContent: 'center',
  },
  ...(hasInput && {
    '& .Mui-focused': {
      svg: {
        color: 'white.main',
        opacity: 1,
      },
      '& .MuiOutlinedInput-input': {
        '&::placeholder': {
          opacity: 1,
        },
      },
    },
  }),
});

export const dropdown: SxProps<Theme> = {
  minWidth: '100px',
  width: '100%',
  p: '4px',
  '& .MuiAutocomplete-popper': {
    top: '8px !important',
    '& ul': {
      borderRadius: '4px',
    },
    '& .MuiPaper-root': {
      borderRadius: '4px',
      backgroundColor: 'backgroundDark.200',

      '& .MuiAutocomplete-noOptions': {
        borderRadius: '4px',
        minHeight: '30px',
        color: 'white.main',
        opacity: 1,
      },
    },
    '& .MuiAutocomplete-listbox': {
      minHeight: 'min-content',
      maxHeight: '128px',
      color: 'grey.600',
      borderRadius: '8px',
      paddingY: '4px',
      '&::-webkit-scrollbar': {
        width: '11.5px',
        '&-thumb': {
          border: '5px solid transparent',
          backgroundClip: 'content-box',
        },
      },

      '& .MuiAutocomplete-option': {
        minHeight: '30px',
        color: 'white.main',
        opacity: 1,
        pt: '0px',
        pb: '0px',
        '&[aria-selected="true"],&.Mui-focused, &:hover': {
          backgroundColor: 'grey.300',
        },
      },
    },
  },
};
