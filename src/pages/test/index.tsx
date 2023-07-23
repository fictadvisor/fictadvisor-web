import { Box } from '@mui/material';

import ScheduleLine from '@/components/pages/schedule-page/schedule-event-edit-section/components/schedule-line/ScheduleLine';
import { ScheduleLineVariant } from '@/components/pages/schedule-page/schedule-event-edit-section/components/schedule-line/types';

const ScheduleLinePage = () => {
  return (
    <Box>
      <ScheduleLine variant={ScheduleLineVariant.SHORT} />
      <ScheduleLine variant={ScheduleLineVariant.LONG} label="13:10" />
    </Box>
  );
};

export default ScheduleLinePage;
