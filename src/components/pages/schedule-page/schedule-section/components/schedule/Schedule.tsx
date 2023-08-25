import { useMemo } from 'react';
import { Box } from '@mui/material';

import Progress from '@/components/common/ui/progress-mui';
import ScheduleColumn from '@/components/pages/schedule-page/schedule-section/components/schedule/components/schedule-column/ScheduleColumn';
import ScheduleTime from '@/components/pages/schedule-page/schedule-section/components/schedule/components/schedule-time';
import ScheduleLine from '@/components/pages/schedule-page/schedule-section/components/schedule-line';
import { ScheduleLineVariant } from '@/components/pages/schedule-page/schedule-section/components/schedule-line/types';
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
    if (!events[week - 1]) return null;
    const _eventsWeek: GetEventBody = JSON.parse(
      JSON.stringify(events[week - 1]),
    );
    // console.log('before', transformEvents(events[week - 1]));
    _eventsWeek.events = _eventsWeek.events.filter(event => {
      if (!event.disciplineType) return false;
      return disciplines.some(
        discipline => discipline === event.disciplineType.name,
      );
    });
    // console.log('after', transformEvents(_eventsWeek));
    return _eventsWeek;
  }, [disciplines.length, events, week]);

  return (
    <Box sx={styles.layout}>
      <ScheduleTime />
      <Box sx={styles.schedule}>
        {eventsPerWeek && !loading ? (
          <Box sx={styles.columns}>
            {transformEvents(eventsPerWeek)
              .days.reverse()
              .map((day, index) => {
                return <ScheduleColumn key={index} events={day.events} />;
              })}
            <ScheduleLine
              variant={ScheduleLineVariant.SHORT}
              label={'13:11'}
              dashed={true}
            />
          </Box>
        ) : (
          <Progress sx={styles.progress} />
        )}
      </Box>
    </Box>
  );
};

export default Schedule;
