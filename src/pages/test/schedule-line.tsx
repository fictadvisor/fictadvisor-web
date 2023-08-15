import { Box } from '@mui/material';

import ScheduleLine from '@/components/pages/schedule-page/schedule-section/components/schedule-line';
import { ScheduleLineVariant } from '@/components/pages/schedule-page/schedule-section/components/schedule-line/types';

const ScheduleLinePage = () => {
  return (
    <Box>
      <ScheduleLine variant={ScheduleLineVariant.SHORT} />
      <ScheduleLine variant={ScheduleLineVariant.LONG} label="13:10" />
      <ScheduleLine variant={ScheduleLineVariant.LONG} dashed label="13:10" />
    </Box>
  );
};

export default ScheduleLinePage;
