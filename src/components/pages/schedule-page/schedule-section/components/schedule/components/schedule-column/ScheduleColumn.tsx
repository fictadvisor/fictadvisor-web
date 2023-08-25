import { FC } from 'react';
import { Box } from '@mui/material';

import ScheduleCard from '@/components/pages/schedule-page/schedule-section/components/schedule-card';
import { Event } from '@/types/schedule';

import * as styles from './ScheduleColumn.styles';

interface ScheduleColumnProps {
  events: (Event | Event[])[];
}

const ScheduleColumn: FC<ScheduleColumnProps> = ({ events: events }) => {
  const handleClick = () => {
    console.log('card');
  };

  console.log('column', events);
  return (
    <Box sx={styles.column}>
      {events.map((event, i) => (
        <ScheduleCard key={i} event={event} onClick={handleClick} />
      ))}
    </Box>
  );
};

export default ScheduleColumn;
