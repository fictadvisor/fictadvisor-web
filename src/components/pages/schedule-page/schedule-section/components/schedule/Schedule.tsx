import { Box } from '@mui/material';

import ScheduleTime from '@/components/pages/schedule-page/schedule-section/components/schedule/components/schedule-time';

import * as styles from './Schedule.styles';

const Schedule = () => {
  return (
    <Box sx={styles.layout}>
      <ScheduleTime />
    </Box>
  );
};

export default Schedule;
