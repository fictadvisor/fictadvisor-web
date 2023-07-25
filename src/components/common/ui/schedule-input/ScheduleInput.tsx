import React, { FC, ReactNode } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import mergeSx from '@/lib/utils/MergeSxStylesUtil';

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
  sx?: SxProps<Theme>;
}
const ScheduleInput: FC<ScheduleInputProps> = ({
  placeholder,
  isDisabled = false,
  size = ScheduleInputSize.NORMAL,
  icon,
  sx,
}) => {
  return (
    <TextField
      placeholder={placeholder}
      disabled={isDisabled}
      multiline={size === ScheduleInputSize.LARGE}
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
