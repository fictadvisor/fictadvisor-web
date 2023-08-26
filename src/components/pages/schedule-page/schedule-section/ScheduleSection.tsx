import { Box } from '@mui/material';

import Schedule from '@/components/pages/schedule-page/schedule-section/components/schedule';
import ScheduleHeader from '@/components/pages/schedule-page/schedule-section/components/schedule-header';

import * as styles from './schedule-section.styles';

export const ScheduleSection = ({}) => {
  return (
    <Box sx={styles.scheduleSection}>
      <ScheduleHeader />
      <Schedule />
    </Box>
  );
};
