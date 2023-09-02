import React, { useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

import { GetEventBody } from '@/lib/api/schedule/types/GetEventBody';
import { transformEvents } from '@/lib/api/schedule/utils/transformEvents';
import { useSchedule } from '@/store/schedule/useSchedule';

import ScheduleColumn from './components/schedule/components/schedule-column';
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
  const dayMapper = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  const eventsPerWeek = useMemo(() => {
    console.log('eventsPerWeek', events);
    if (!events[week - 1]) return null;
    const _eventsWeek: GetEventBody = JSON.parse(
      JSON.stringify(events[week - 1]),
    );
    // console.log('before', transformEvents(events[week - 1]));
    _eventsWeek.events = _eventsWeek.events.filter(event => {
      return disciplines.some(
        discipline =>
          !event.disciplineType || discipline === event.disciplineType.name,
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
                    {dayMapper[day.day.getDay()]}
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
                  <ScheduleColumn day={day} />
                )}
              </Box>
            ))}
          </Box>
        ) : (
          <>
            {dayMapper.map((_, i) => (
              <Box key={i} sx={styles.skeleton}>
                <Skeleton
                  width={38}
                  height={38}
                  variant={'rounded'}
                  sx={{ bgcolor: 'grey.200' }}
                  animation="wave"
                />
                <Skeleton
                  width={'100%'}
                  height={80}
                  variant={'rounded'}
                  sx={{ bgcolor: 'grey.200' }}
                  animation="wave"
                />
              </Box>
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};

export default ScheduleSectionMobile;