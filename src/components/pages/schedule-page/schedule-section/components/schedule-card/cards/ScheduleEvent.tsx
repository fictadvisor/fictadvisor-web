import { FC } from 'react';
import { Button, Typography } from '@mui/material';

import { Event } from '@/types/schedule';

import * as styles from './Cards.styles';

interface ScheduleEventProps {
  event: Event;
  height: string | number;
  start: string;
  end: string;
  onClick: () => void;
}

const ScheduleEvent: FC<ScheduleEventProps> = ({
  event,
  height,
  start,
  end,
  onClick,
}) => {
  return (
    <Button
      sx={styles.card(event.disciplineType.name, height)}
      disableRipple
      disabled={false}
      onClick={onClick}
    >
      <Typography variant="body1">{event.name}</Typography>
      {event.startTime && event.endTime && (
        <Typography variant="body2">
          {start} - {end}
        </Typography>
      )}
    </Button>
  );
};

export default ScheduleEvent;
