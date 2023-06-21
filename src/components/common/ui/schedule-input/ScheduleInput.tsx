import React, { FC, ReactNode } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './ScheduleInput.styles';

export enum ScheduleInputSize {
  'normal',
  'large',
}

export interface ScheduleInputProps {
  placeholder?: string;
  isDisabled?: boolean;
  size?: ScheduleInputSize;
  icon?: ReactNode;
  sx?: SxProps<Theme>;
}
const ScheduleInput: FC<ScheduleInputProps> = ({
  placeholder,
  isDisabled = false,
  size = 'normal',
  icon,
  sx,
}) => {
  return (
    <TextField
      placeholder={placeholder}
      disabled={isDisabled}
      multiline={size === ScheduleInputSize.large}
      sx={mergeSx(styles.input(size), sx)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
    />
  );
};

export default ScheduleInput;
