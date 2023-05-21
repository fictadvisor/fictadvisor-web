import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './Progress.styles';

interface ProgressProps {
  value?: number;
  variant?: 'determinate' | 'indeterminate';
  sx?: SxProps<Theme>;
  size?: 58 | 144 | 180 | 216 | 252;
  color?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | 'inherit';
  disableShrink?: boolean;
}
const Progress: FC<ProgressProps> = ({
  value = 100,
  variant = 'determinate',
  sx,
  size,
  color = 'primary',
  disableShrink = true,
}) => {
  return (
    <Box>
      <CircularProgress
        variant={variant}
        value={value}
        size={size}
        color={color}
        disableShrink={disableShrink}
        sx={styles.progressBack}
      />
      <CircularProgress
        variant={'indeterminate'}
        value={value}
        size={size}
        color={color}
        disableShrink={disableShrink}
        sx={mergeSx(styles.progressFront, sx)}
      />
    </Box>
  );
};
export default Progress;
