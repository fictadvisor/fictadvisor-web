import { useMemo } from 'react';
import { Box, Typography } from '@mui/material';

import Progress from '@/components/common/ui/progress-mui';
import ScheduleColumn from '@/components/pages/schedule-page/schedule-section/components/schedule/components/schedule-column/ScheduleColumn';
import { GetEventBody } from '@/lib/api/schedule/types/GetEventBody';
import { transformEvents } from '@/lib/api/schedule/utils/transformEvents';
import { useSchedule } from '@/store/schedule/useSchedule';

import * as styles from './schedule-section.styles';

const ScheduleSectionMobile = () => {
  const { events, week, disciplines, loading, currentTime } = useSchedule(
    state => ({
      events: state.eventsBody,
      week: state.week,
      disciplines: state.disciplineTypes,
      loading: state.isLoading,
      currentTime: state.currentTime,
    }),
  );
  const dayMapper = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];

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
  }, [disciplines, events, week]);

  return (
    <Box>
      <Box sx={styles.scheduleSectionMobile}>
        {eventsPerWeek && !loading ? (
          <Box sx={styles.events}>
            {transformEvents(eventsPerWeek).days.map((day, index) => (
              <Box sx={styles.event} key={index}>
                <Box sx={styles.eventDate}>
                  <Typography sx={styles.day}>
                    {dayMapper[day.day.getDay() - 1]}
                  </Typography>
                  <Typography
                    sx={styles.date(
                      currentTime.getDate() === day.day.getDate() &&
                        currentTime.getMonth() === day.day.getMonth(),
                    )}
                  >
                    {day.day.getDate()}
                  </Typography>
                </Box>
                {day.events.length === 0 ? (
                  <Typography sx={styles.noEvents}>
                    В цей день немає подій
                  </Typography>
                ) : (
                  <ScheduleColumn events={day.events} />
                )}
              </Box>
            ))}
          </Box>
        ) : (
          <Progress />
        )}
      </Box>
    </Box>
  );
};

export default ScheduleSectionMobile;
