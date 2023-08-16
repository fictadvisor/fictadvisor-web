import { Box } from '@mui/material';

import ScheduleColumn from '@/components/pages/schedule-page/schedule-section/components/schedule/components/schedule-column/ScheduleColumn';
import ScheduleTime from '@/components/pages/schedule-page/schedule-section/components/schedule/components/schedule-time';
import { transformEvents } from '@/lib/api/schedule/utils/transformEvents';
import { useSchedule } from '@/store/useSchedule';

import * as styles from './Schedule.styles';

const Schedule = () => {
  const events = useSchedule(state => state.eventsBody);

  return (
    <Box sx={styles.layout}>
      <ScheduleTime />
      <Box sx={styles.schedule}>
        {events && (
          <Box sx={styles.columns}>
            {transformEvents(events).days.map((day, index) => (
              <ScheduleColumn key={index} events={day.events} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Schedule;
