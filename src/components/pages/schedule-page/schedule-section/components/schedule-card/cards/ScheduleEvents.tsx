import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

import { useSchedule } from '@/store/schedule/useSchedule';
import { Event } from '@/types/schedule';

import * as styles from './Cards.styles';

interface ScheduleEventsProps {
  events: Event[];
  height: number;
  start: string;
  end: string;
  onClick: () => void;
}

const ScheduleEvent: FC<ScheduleEventsProps> = ({
  events,
  height,
  start,
  end,
  onClick,
}) => {
  console.log(JSON.stringify(event));
  const currentTime =
    useSchedule(state => state.currentTime).getTime() >
    new Date(events[0].endTime).getTime();

  const trimmedEvents = events.slice(0, 5);

  return (
    <Box sx={styles.wrapper}>
      {trimmedEvents.map((section, index) => {
        const curHeight =
          index === trimmedEvents.length - 1 ? 0 : height - index * 14;
        return (
          <Box key={section.id} sx={styles.sectionWrapper(curHeight)}>
            <Box sx={styles.section(section.disciplineType.name)}></Box>
          </Box>
        );
      })}
      <Box sx={styles.sectionWrapper(height - 14 * (trimmedEvents.length - 1))}>
        <Button
          sx={styles.card(
            events[events.length - 1].disciplineType.name,
            height - 14 * (trimmedEvents.length - 1),
          )}
          disableRipple
          disabled={false}
          onClick={onClick}
        >
          <Typography variant="body1">
            {events.length} {events.length < 5 ? 'події' : 'подій'}
          </Typography>
          {events[0].startTime && events[0].endTime && (
            <Typography variant="body2">
              {start} - {end}
            </Typography>
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default ScheduleEvent;
