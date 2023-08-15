import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import {
  getLeftIcon,
  getRightIcon,
  getState,
} from '@/components/common/ui/form/input-mui/util';
import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './Input.styles';

export enum InputState {
  DISABLED = 'disabled',
  DEFAULT = 'default',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum InputSize {
  LARGE = 'large',
  MEDIUM = 'medium',
}

export enum InputType {
  DEFAULT = 'text',
  PASSWORD = 'password',
  SEARCH = 'search',
}

interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
  label?: string;
  placeholder?: string;
  size?: InputSize;
  type?: InputType;
  isSuccessOnDefault?: boolean;
  defaultRemark?: string;
  showRemark?: boolean;
  sx?: SxProps<Theme>;
  onDeterredChange?: () => void;
  isImmutable?: boolean;
  touched?: boolean;
  error?: string;
  value?: string;
  name: string;
}

const MAX_LENGTH = 2000;

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  size = InputSize.LARGE,
  type = InputType.DEFAULT,
  isSuccessOnDefault = false,
  defaultRemark,
  showRemark = true,
  sx,
  onDeterredChange,
  disabled = false,
  value,
  error,
  touched,
  ...rest
}) => {
  const [isHidden, setIsHidden] = useState(type === InputType.PASSWORD);
  const state = getState(disabled, touched, error, isSuccessOnDefault);

  const LeftIcon = getLeftIcon(type);
  const RightIcon = getRightIcon(type, isHidden, state, value);

  const handleRightIconClick = () => {
    if (type === InputType.PASSWORD) {
      setIsHidden(!isHidden);
    }
  };

  useEffect(() => {
    const curTimer = setTimeout(() => {
      if (onDeterredChange) onDeterredChange();
    }, 500);
    return () => clearTimeout(curTimer);
  }, [value, onDeterredChange]);

  return (
    <FormControl
      sx={mergeSx(styles.wrapper, sx)}
      margin="none"
      disabled={disabled}
    >
      {label && (
        <InputLabel sx={styles.label(state)} size="normal">
          {label}
        </InputLabel>
      )}

      <OutlinedInput
        {...rest}
        sx={styles.input(state, size)}
        inputProps={{ maxLength: MAX_LENGTH }}
        color="warning"
        type={isHidden ? 'password' : 'text'}
        placeholder={placeholder}
        startAdornment={LeftIcon && <LeftIcon />}
        endAdornment={
          RightIcon && (
            <RightIcon
              onClick={handleRightIconClick}
              style={styles.rightIcon(type, state)}
            />
          )
        }
      />
      {showRemark && (
        <FormHelperText sx={styles.remark(state)}>
          {state === InputState.ERROR ? error : defaultRemark}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default Input;
