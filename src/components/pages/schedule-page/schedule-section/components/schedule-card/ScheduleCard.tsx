import { FC, Fragment, useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { getCurrentTime } from '@/components/pages/schedule-page/schedule-section/components/schedule-card/utils/getCurrentTime';
import { Event } from '@/types/schedule';

import { ScheduleEventsSection } from '../schedule-events-section/ScheduleEventsSection';

import ScheduleEvent from './cards/ScheduleEvent';
import ScheduleEvents from './cards/ScheduleEvents';
import calculateHeight from './utils/calculateHeight';
import { calctulateTop } from './utils/calculateTop';
import * as styles from './ScheduleCard.styles';

interface ScheduleCardProps {
  event: Event | Event[];
  onClick: (event: Event, week: string) => void;
  week: string;
}

const ScheduleCard: FC<ScheduleCardProps> = ({ event, onClick, week }) => {
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
  }, [event]);

  return (
    <Fragment>
      {Array.isArray(event) ? (
        areEventsOpen ? (
          <Box sx={styles.wrapper(top, height)}>
            <ScheduleEventsSection
              onClick={onClick}
              onOutsideClick={() => setEventsOpen(false)}
              events={event}
              week={week}
            />
          </Box>
        ) : (
          <Box sx={styles.wrapper(top, height)}>
            <ScheduleEvents
              events={event}
              height={height}
              start={start}
              end={end}
              onClick={() => setEventsOpen(true)}
            />
          </Box>
        )
      ) : (
        <Box sx={styles.wrapper(top, height)}>
          <ScheduleEvent
            event={event}
            height={height}
            start={start}
            end={end}
            onClick={onClick}
            week={week}
          />
        </Box>
      )}
    </Fragment>
  );
};

export default ScheduleCard;
