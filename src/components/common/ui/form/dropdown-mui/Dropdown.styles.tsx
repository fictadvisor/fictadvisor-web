import { SxProps, Theme } from '@mui/material/styles';

import { FieldState } from '@/components/common/ui/form/common/types';

import { DropDownSize } from './Dropdown';

const color = {
  default: '#D4D4D4', //gray.400
  disabled: '#737373', //gray.200
  error: '#EC131E', // error.200
  success: '#3DA96D', //success.300
};

const inputHeight = {
  small: 40,
  medium: 46,
  large: 52,
};

export const popper = (
  numberOfOptions: number,
  size: number,
): SxProps<Theme> => ({
  top: '8px !important',
  backgroundColor: 'transparent',
  '& ul': {
    borderColor: 'gray.400',
    border: '2px solid',
    borderRadius: '8px',
  },
  '& .MuiPaper-root': {
    borderRadius: '8px',
    backgroundColor: 'backgroundDark.0',

    '& .MuiAutocomplete-noOptions': {
      border: '2px solid',
      borderColor: 'gray.600',
      borderRadius: '8px',
      color: 'gray.400',
    },
  },
  '& .MuiAutocomplete-listbox': {
    height: `${numberOfOptions * size + 16}px`, //16 is for padding
    boxShadow: 'none !important',
    color: 'gray.600',
    borderRadius: '8px',
    gap: '0px',
    '&::-webkit-scrollbar': {
      width: '11.5px',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'gray.400',
      border: '5px solid transparent',
      backgroundClip: 'content-box',
    },
  },

  '& .MuiAutocomplete-option:hover,& .MuiAutocomplete-option[aria-selected="true"]':
    {
      backgroundColor: '#404040 !important',
    },
  '& .MuiAutocomplete-option': {
    minHeight: `${size}px !important`,
    pt: '0px',
    pb: '0px',
  },
});

export const input = (
  focused: boolean,
  state: FieldState,
  height: `${DropDownSize}` = DropDownSize.MEDIUM,
): SxProps<Theme> => ({
  pointerEvents: `${state === FieldState.DISABLED ? 'none' : 'all'}`,
  '& .MuiInputBase-root': {
    height: inputHeight[height],
    position: 'relative',
    display: 'flex',
    alignContent: 'center',
  },
  '& .MuiInputBase-input,& label ,& label.Mui-focused,& svg,& .Mui-disabled': {
    color: 'gray.600',
  },
  '& label': {
    top: 'calc((100% - 50px)/2)', //to center label
  },
  '& .MuiInputLabel-shrink': {
    transform: `matrix(.75,0,0,.75,14,${-(
      9 +
      (inputHeight[height] - 53) / 2
    )})`,
    color: `${color[state]} !important`,
  },

  '& .Mui-disabled': {
    color: 'gray.300',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'backgroundDark.0',
    color: 'gray.600',
    paddingLeft: '16px',
    '&:hover': {
      '& fieldset': {
        borderColor: `${
          state === FieldState.DEFAULT
            ? color[FieldState.DEFAULT]
            : color[state]
        } !important`,
      },
    },
  },
  '& .MuiAutocomplete-inputRoot': {
    borderRadius: '8px',
    // height: 100,
  },
  '& fieldset': {
    borderColor: `${
      focused
        ? color[state]
        : state === FieldState.DEFAULT
        ? color[FieldState.DISABLED]
        : color[state]
    } !important`,
    border: '2px solid',
    borderRadius: '8px',
    transition: 'all .2s ease-in-out',
  },
  '& .MuiAutocomplete-endAdornment': {
    marginRight: '16px',
  },
});

export const dropdown: SxProps<Theme> = {
  width: 500,
  p: 2,
  pb: 0,
};

export const remark = (state: FieldState) => ({
  color: color[state],
  pl: '24px',
  fontSize: '11px',
});
