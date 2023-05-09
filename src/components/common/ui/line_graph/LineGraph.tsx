import { FC } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

export interface LineGraphProps {
  value: number;
  label: string;
}

import * as styles from './LineGraph.styles';

const LineGraph: FC<LineGraphProps> = ({ label, value }) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.label}>
        <Typography>{label}</Typography>
        <Typography>{`${value}%`}</Typography>
      </Box>
      <LinearProgress
        sx={styles.graph(value)}
        variant="determinate"
        value={value}
      />
    </Box>
  );
};

export default LineGraph;
