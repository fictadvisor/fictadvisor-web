import { Box } from '@mui/material';

import Progress from '@/components/common/ui/progress-mui';
import ScheduleColumn from '@/components/pages/schedule-page/schedule-section/components/schedule/components/schedule-column/ScheduleColumn';
import ScheduleTime from '@/components/pages/schedule-page/schedule-section/components/schedule/components/schedule-time';
import { transformEvents } from '@/lib/api/schedule/utils/transformEvents';
import { useSchedule } from '@/store/useSchedule';

import * as styles from './Schedule.styles';

const Schedule = () => {
  const { events, week } = useSchedule(state => ({
    events: state.eventsBody,
    week: state.week,
  }));

  return (
    <Box sx={styles.layout}>
      <ScheduleTime />
      <Box sx={styles.schedule}>
        {events[week - 1] ? (
          <Box sx={styles.columns}>
            {transformEvents(events[week - 1]).days.map((day, index) => (
              <ScheduleColumn key={index} events={day.events} />
            ))}
          </Box>
        ) : (
          <Progress sx={styles.progress} />
        )}
      </Box>
    </Box>
  );
};

export default Schedule;
