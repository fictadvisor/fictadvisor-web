import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { getCurrentTime } from '@/components/pages/schedule-page/schedule-section/components/schedule-card/utils/getCurrentTime';
import { Event } from '@/types/schedule';

import ScheduleEvent from './cards/ScheduleEvent';
import ScheduleEvents from './cards/ScheduleEvents';
import { ScheduleEventsExpanded } from './cards/ScheduleEventsExpanded';
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
  const [areEventsOpen, setEventsOpen] = useState(false);

  useEffect(() => {
    const _event = Array.isArray(event) ? event[0] : event;
    setTop(calctulateTop(_event.startTime));
    setHeight(calculateHeight(_event.startTime, _event.endTime));
    setStart(getCurrentTime(_event.startTime));
    setEnd(getCurrentTime(_event.endTime));
  }, [top, height, start, end]);

  return (
    <Box sx={styles.wrapper(top, height)}>
      {Array.isArray(event) ? (
        areEventsOpen ? (
          <ScheduleEventsExpanded
            onOutsideClick={() => setEventsOpen(false)}
            events={event}
          />
        ) : (
          <ScheduleEvents
            events={event}
            height={height}
            start={start}
            end={end}
            onClick={() => setEventsOpen(true)}
          />
        )
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
