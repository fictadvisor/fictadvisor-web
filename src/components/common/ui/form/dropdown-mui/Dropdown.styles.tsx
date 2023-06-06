import { SxProps, Theme } from '@mui/material/styles';

import { FieldState } from '@/components/common/ui/form/common/types';

import { DropDownSize } from './Dropdown';

const color = {
  default: 'grey.600',
  disabled: 'grey.400',
  error: 'error.500',
  success: 'success.600',
};

const inputHeight = {
  small: 40,
  medium: 46,
  large: 52,
};

export const input = (
  inputState: FieldState,
  size: DropDownSize = DropDownSize.MEDIUM,
): SxProps<Theme> => {
  return {
    '& .MuiInputBase-root': {
      height: inputHeight[size],
      display: 'flex',
      alignContent: 'center',
    },
    '& .MuiInputBase-input,& label ,& label.Mui-focused,& svg': {
      color: 'grey.800',
    },
    '& label': {
      top: 'calc((100% - 50px)/2)', //to center label
    },
    '& .MuiInputLabel-shrink': {
      transform: `matrix(.75,0,0,.75,14,${-(
        9 +
        (inputHeight[size] - 53) / 2
      )})`,
      color: color[inputState],
    },

    '& .MuiOutlinedInput-root': {
      backgroundColor: 'backgroundDark.100',
      color: 'grey.600',
      paddingLeft: '16px',
      '&:hover': {
        '& fieldset': {
          borderColor: color[inputState],
        },
      },
      '&.Mui-focused, &:hover &.Mui-focused': {
        '& fieldset': {
          borderColor: color[FieldState.DEFAULT],
        },
      },
    },

    '& .MuiAutocomplete-inputRoot': {
      borderRadius: '8px',
    },
    '& .MuiOutlinedInput-notchedOutline,& .Mui-disabled .MuiOutlinedInput-notchedOutline':
      {
        borderColor:
          inputState === FieldState.DEFAULT
            ? color[FieldState.DISABLED]
            : color[inputState],
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '8px',
        transition: 'all .2s ease-in-out',
      },
    '& .MuiAutocomplete-endAdornment': {
      marginRight: '16px',
    },
    '& label.Mui-disabled': {
      color: 'grey.400',
    },
  };
};

export const dropdown = (size: number): SxProps<Theme> => ({
  width: '100%',
  p: 2,
  pb: 0,

  '& .MuiAutocomplete-popper': {
    top: '8px !important',
    '& ul': {
      borderColor: 'grey.400',
      border: '2px solid',
      borderRadius: '8px',
    },
    '& .MuiPaper-root': {
      borderRadius: '8px',
      backgroundColor: 'backgroundDark.100',

      '& .MuiAutocomplete-noOptions': {
        border: '2px solid',
        borderColor: 'grey.600',
        borderRadius: '8px',
        color: 'grey.400',
      },
    },
    '& .MuiAutocomplete-listbox': {
      minHeight: 'min-content',
      maxHeight: `${size * 4 + 16}px`,
      color: 'grey.600',
      borderRadius: '8px',
      gap: '0px',
      '&::-webkit-scrollbar': {
        width: '11.5px',
        '&-thumb': {
          border: '5px solid transparent',
          backgroundClip: 'content-box',
        },
      },

      '& .MuiAutocomplete-option': {
        minHeight: `${size}px`,
        pt: '0px',
        pb: '0px',
        '&[aria-selected="true"],&[aria-selected="true"].Mui-focused, &:hover':
          {
            backgroundColor: 'grey.200',
          },
      },
    },
  },
});

export const getRemarkStyles = (
  dropDownState: FieldState,
  isFocused: boolean,
): SxProps<Theme> => ({
  color: color[dropDownState],
  pl: '24px',
  fontSize: '11px',
  opacity: isFocused ? 0 : 1,
});
