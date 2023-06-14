import { FC } from 'react';
import {
  Box,
  Radio as RadioMui,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';

import { FieldState } from '@/components/common/ui/form/common/types';
import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './Radio.styles';

interface RadioProps {
  value: string;
  label: string;
  textType?: 'body1' | 'body2Medium';
  sx?: SxProps<Theme>;
  disabled?: boolean;
  state: FieldState;
  onChange: (value: any) => void;
  selectedValue: string;
}

const Radio: FC<RadioProps> = ({
  label,
  textType = 'body1',
  sx,
  selectedValue,
  disabled = false,
  state = FieldState.DEFAULT,
  ...rest
}) => {
  return (
    <Box sx={mergeSx(styles.wrapper, sx)}>
      <RadioMui
        sx={styles.radio(state)}
        disableRipple
        disabled={disabled}
        checked={rest.value === selectedValue}
        {...rest}
      />
      <Typography sx={styles.label(disabled, label)} variant={textType}>
        {label}
      </Typography>
    </Box>
  );
};

export default Radio;
