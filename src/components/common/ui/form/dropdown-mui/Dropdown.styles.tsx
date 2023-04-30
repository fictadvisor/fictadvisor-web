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

export const popper = (
  numberOfOptions: number,
  size: number,
): SxProps<Theme> => ({
  top: '8px !important',
  backgroundColor: 'transparent',
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
    height: `${numberOfOptions * size + 16}px`, //16 is for padding
    boxShadow: 'none',
    color: 'grey.600',
    borderRadius: '8px',
    gap: '0px',
    '&::-webkit-scrollbar': {
      width: '11.5px',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'grey.400',
      border: '5px solid transparent',
      backgroundClip: 'content-box',
    },
    '& .MuiAutocomplete-option[aria-selected="true"],& .MuiAutocomplete-option[aria-selected="true"].Mui-focused, & .MuiAutocomplete-option:hover':
      {
        backgroundColor: 'grey.200',
      },

    '& .MuiAutocomplete-option': {
      minHeight: `${size}px`,
      pt: '0px',
      pb: '0px',
    },
  },
});

export const input = (
  isInputFocused: boolean,
  inputState: FieldState,
  size: DropDownSize = DropDownSize.MEDIUM,
): SxProps<Theme> => ({
  pointerEvents: inputState === FieldState.DISABLED ? 'none' : 'all',
  '& .MuiInputBase-root': {
    height: inputHeight[size],
    position: 'relative',
    display: 'flex',
    alignContent: 'center',
  },
  '& .MuiInputBase-input,& label ,& label.Mui-focused,& svg,& .Mui-disabled': {
    color: 'grey.800',
  },
  '& label': {
    top: 'calc((100% - 50px)/2)', //to center label
  },
  '& .MuiInputLabel-shrink': {
    transform: `matrix(.75,0,0,.75,14,${-(9 + (inputHeight[size] - 53) / 2)})`,
    color: color[inputState],
  },

  '& .Mui-disabled': {
    color: 'grey.300',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'backgroundDark.100',
    color: 'grey.600',
    paddingLeft: '16px',
    '&:hover': {
      '& fieldset': {
        borderColor:
          inputState === FieldState.DEFAULT
            ? color[FieldState.DEFAULT]
            : color[inputState],
      },
    },
  },
  '& .MuiAutocomplete-inputRoot': {
    borderRadius: '8px',
  },
  '& fieldset': {
    borderColor: `${
      isInputFocused
        ? color[inputState]
        : inputState === FieldState.DEFAULT
        ? color[FieldState.DISABLED]
        : color[inputState]
    }`,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '8px',
    transition: 'all .2s ease-in-out',
  },
  '& .MuiAutocomplete-endAdornment': {
    marginRight: '16px',
  },
});

export const dropdown: SxProps<Theme> = {
  width: '100%',
  p: 2,
  pb: 0,
};

export const remark = (dropDownState: FieldState) => ({
  color: color[dropDownState],
  pl: '24px',
  fontSize: '11px',
});
