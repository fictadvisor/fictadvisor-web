import React from 'react';
import { Box } from '@mui/material';

import ScheduleTime from '@/components/pages/schedule-page/schedule-section/components/schedule-time';

import * as styles from './Schedule.styles';

const Schedule = () => {
  return (
    <Box sx={styles.layout}>
      <ScheduleTime />
      <Box sx={styles.column}>1</Box>
      <Box sx={styles.column}>2</Box>
      <Box sx={styles.column}>3</Box>
      <Box sx={styles.column}>4</Box>
      <Box sx={styles.column}>5</Box>
      <Box sx={styles.column}>6</Box>
      <Box sx={styles.column}>7</Box>
    </Box>
  );
};

export default Schedule;
