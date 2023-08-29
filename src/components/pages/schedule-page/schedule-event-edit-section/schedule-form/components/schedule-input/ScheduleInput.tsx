import React, { FC, ReactNode } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { useField } from 'formik';

import * as styles from './ScheduleInput.styles';

export enum ScheduleInputSize {
  NORMAL = 'normal',
  LARGE = 'large',
}

export interface ScheduleInputProps {
  placeholder?: string;
  isDisabled?: boolean;
  size?: ScheduleInputSize;
  icon?: ReactNode;
  name: string;
}
const ScheduleInput: FC<ScheduleInputProps> = ({
  placeholder,
  isDisabled = false,
  size = ScheduleInputSize.NORMAL,
  icon,
  name,
}) => {
  const [props, { touched, error }, { setValue, setTouched }] = useField(name);

  return (
    <TextField
      {...props}
      placeholder={placeholder}
      disabled={isDisabled}
      sx={styles.input(size)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
    />
  );
};

export default ScheduleInput;
