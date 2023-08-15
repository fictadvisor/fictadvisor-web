import React, { useEffect, useState } from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import { MAX_LENGTH } from '@/components/common/ui/form/input-mui/constants';
import {
  InputProps,
  InputSize,
  InputState,
  InputType,
} from '@/components/common/ui/form/input-mui/types';
import {
  getLeftIcon,
  getRightIcon,
  getState,
} from '@/components/common/ui/form/input-mui/util';
import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './Input.styles';

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  size = InputSize.LARGE,
  type = InputType.DEFAULT,
  isSuccessOnDefault = false,
  defaultRemark,
  showRemark = true,
  sx = {},
  onDeterredChange,
  disabled = false,
  value = '',
  error = '',
  touched = false,
  handleRightIconClick = undefined,
  ...rest
}) => {
  const [isHidden, setIsHidden] = useState(type === InputType.PASSWORD);
  const state = getState(disabled, touched, error, isSuccessOnDefault);

  const LeftIcon = getLeftIcon(type);
  const RightIcon = getRightIcon(type, isHidden, state, value);

  if (!handleRightIconClick) {
    handleRightIconClick = () => {
      if (type === InputType.PASSWORD) {
        setIsHidden(!isHidden);
      }
    };
  }

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
