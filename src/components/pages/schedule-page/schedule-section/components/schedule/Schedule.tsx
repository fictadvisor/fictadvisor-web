import { useMemo } from 'react';
import { Box } from '@mui/material';

import Progress from '@/components/common/ui/progress-mui';
import ScheduleColumn from '@/components/pages/schedule-page/schedule-section/components/schedule/components/schedule-column/ScheduleColumn';
import ScheduleTime from '@/components/pages/schedule-page/schedule-section/components/schedule/components/schedule-time';
import { GetEventBody } from '@/lib/api/schedule/types/GetEventBody';
import { transformEvents } from '@/lib/api/schedule/utils/transformEvents';
import { useSchedule } from '@/store/schedule/useSchedule';

import * as styles from './Schedule.styles';

const Schedule = () => {
  const { events, week, disciplines, loading } = useSchedule(state => ({
    events: state.eventsBody,
    week: state.week,
    disciplines: state.disciplineTypes,
    loading: state.isLoading,
  }));

  const eventsPerWeek = useMemo(() => {
    console.log(events[week - 1]);

    if (!events[week - 1]) return null;
    const _eventsWeek: GetEventBody = JSON.parse(
      JSON.stringify(events[week - 1]),
    );
    console.log('before', events[week - 1]);
    console.log('types', disciplines);
    _eventsWeek.events = _eventsWeek.events.filter(event => {
      if (!event.disciplineType) return false;
      return disciplines.some(
        discipline => discipline === event.disciplineType.name,
      );
    });
    console.log('after', _eventsWeek);
    return _eventsWeek;
  }, [disciplines.length, events, week]);

  return (
    <Box sx={styles.layout}>
      <ScheduleTime />
      <Box sx={styles.schedule}>
        {eventsPerWeek && !loading ? (
          <Box sx={styles.columns}>
            {transformEvents(eventsPerWeek).days.map((day, index) => (
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
