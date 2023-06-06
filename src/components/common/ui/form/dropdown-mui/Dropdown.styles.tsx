import { SxProps, Theme } from '@mui/material/styles';

import {
  FieldSize,
  FieldState,
} from '@/components/common/ui/form/common/types';

const color = {
  [FieldState.DEFAULT]: 'grey.600',
  [FieldState.DISABLED]: 'grey.400',
  [FieldState.ERROR]: 'error.500',
  [FieldState.SUCCESS]: 'success.600',
};

const inputHeight = {
  [FieldSize.SMALL]: 40,
  [FieldSize.MEDIUM]: 46,
  [FieldSize.LARGE]: 52,
};

export const input = (
  inputState: FieldState,
  size: FieldSize = FieldSize.MEDIUM,
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

export const dropdown = (): SxProps<Theme> => {
  const optionHeight = 36;
  return {
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
        maxHeight: `${optionHeight * 4 + 16}px`,
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
          minHeight: `${optionHeight}px`,
          pt: '0px',
          pb: '0px',
          '&[aria-selected="true"],&[aria-selected="true"].Mui-focused, &:hover':
            {
              backgroundColor: 'grey.200',
            },
        },
      },
    },
  };
};

export const getRemarkStyles = (
  dropDownState: FieldState,
  isFocused: boolean,
): SxProps<Theme> => ({
  color: color[dropDownState],
  pl: '24px',
  fontSize: '11px',
  opacity: isFocused ? 0 : 1,
});
