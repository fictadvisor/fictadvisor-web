import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { getCurrentTime } from '@/components/pages/schedule-page/schedule-section/components/schedule-card/utils/getCurrentTime';
import { Event } from '@/types/schedule';

import ScheduleEvent from './cards/ScheduleEvent';
import ScheduleEvents from './cards/ScheduleEvents';
import calculateHeight from './utils/calculateHeight';
import { calctulateTop } from './utils/calculateTop';
import * as styles from './ScheduleCard.styles';

interface ScheduleCardProps {
  event: Event | Event[];
  onClick: () => void;
}

const ScheduleCard: FC<ScheduleCardProps> = ({ event, onClick }) => {
  const [top, setTop] = useState('');
  const [height, setHeight] = useState<number>(0);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  useEffect(() => {
    if (Array.isArray(event)) {
      setTop(calctulateTop(event[0].startTime));
      setHeight(calculateHeight(event[0].startTime, event[0].endTime));
      setStart(getCurrentTime(event[0].startTime));
      setEnd(getCurrentTime(event[0].endTime));
    } else {
      setTop(calctulateTop(event.startTime));
      setHeight(calculateHeight(event.startTime, event.endTime));
      setStart(getCurrentTime(event.startTime));
      setEnd(getCurrentTime(event.endTime));
    }
  }, [top, height, start, end]);

  return (
    <Box sx={styles.wrapper(top, height)}>
      {Array.isArray(event) ? (
        <ScheduleEvents
          events={event}
          height={height}
          start={start}
          end={end}
          onClick={onClick}
        />
      ) : (
        <ScheduleEvent
          event={event}
          height={height}
          start={start}
          end={end}
          onClick={onClick}
        />
      )}
    </Box>
  );
};

export default ScheduleCard;
