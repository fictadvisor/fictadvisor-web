import { FC } from 'react';
import { ClickAwayListener } from '@mui/base';
import { Box, Button, Typography } from '@mui/material';

import { Event } from '@/types/schedule';

import * as styles from './Cards.styles';
interface ScheduleEventsExpandedProps {
  onOutsideClick: () => void;
  events: Event[];
}
export const ScheduleEventsExpanded: FC<ScheduleEventsExpandedProps> = ({
  events,
  onOutsideClick,
}) => {
  const { startTime, endTime } = events[0];
  const start = new Date(startTime).toLocaleTimeString('ua-UK', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });
  const end = new Date(endTime).toLocaleTimeString('ua-UK', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });

  const monthMapper = [
    'Січ',
    'Лют',
    'Бер',
    'Кві',
    'Тра',
    'Чер',
    'Лип',
    'Сер',
    'Вер',
    'Жов',
    'Лис',
    'Гру',
  ];

  const eventDay = new Date(events[0].startTime).getDate();
  const eventMonth = monthMapper[new Date(events[0].startTime).getMonth()];

  return (
    <ClickAwayListener onClickAway={onOutsideClick}>
      <Box sx={styles.eventsContainer}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">{events.length} Події</Typography>
          {startTime && endTime && (
            <Typography variant="body2">
              {eventDay} {eventMonth} {start} - {end}
            </Typography>
          )}
        </Box>
        <Box sx={styles.eventsContainerGrid}>
          {events.map(event => (
            <Button
              key={event.id}
              sx={styles.card(event.disciplineType.name, '100px')}
              disableRipple
            >
              <Typography variant="body1">{event.name}</Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </ClickAwayListener>
  );
};
