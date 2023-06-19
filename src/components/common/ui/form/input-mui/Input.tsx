import React from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { useField } from 'formik';

import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './Input.styles';

interface TextAreaProps {
  name: string;
  placeholder?: string;
  label?: string;
  size?: 'medium' | 'small';
  type?: string;
  disabled?: boolean;
  showRemark?: boolean;
  sx?: SxProps<Theme>;
}

const MAX_LENGTH = 2000;

const Input: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  label,
  size = 'medium',
  type,
  disabled = false,
  showRemark = false,
  sx,
}) => {
  const [field, { touched, error }] = useField(name);

  const state = touched && error ? 'error' : 'default';

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
        {...field}
        sx={styles.input(state, size)}
        inputProps={{ maxLength: MAX_LENGTH }}
        color="warning"
        type={type}
        placeholder={placeholder}
      />
      {showRemark && (
        <FormHelperText sx={styles.errorRemark}>
          {touched && error}
        </FormHelperText>

      )}
    </FormControl>
  );
};

export default Input;
