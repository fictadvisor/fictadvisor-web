import React, { FC } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './CircleDiagram.styles';

interface CircleDiagramProps {
  value: number;
  variant?: 'determinate' | 'indeterminate';
  sx?: SxProps<Theme>;
  thickness?: number;
}

const CircleDiagram: FC<CircleDiagramProps> = ({
  value,
  variant = 'determinate',
  thickness = 3.5,
  sx,
}) => {
  return (
    <Box sx={mergeSx(styles.boxCircle(), sx)}>
      <CircularProgress
        sx={styles.progressBack()}
        variant={variant}
        thickness={thickness}
        value={100}
      />
      <CircularProgress
        sx={styles.progressFront(value)}
        variant={variant}
        thickness={thickness}
        value={value}
      />
      <Box sx={styles.boxCounter()}>
        <Typography sx={styles.textCounter(value)}>
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircleDiagram;
