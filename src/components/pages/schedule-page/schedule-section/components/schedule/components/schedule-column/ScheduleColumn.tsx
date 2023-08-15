import { FC } from 'react';
import { Box } from '@mui/material';

import ScheduleCard from '@/components/pages/schedule-page/schedule-section/components/schedule-card';
import { Event } from '@/types/schedule';

import * as styles from './ScheduleColumn.styles';

interface ScheduleColumnProps {
  events: (Event | Event[])[];
}

const ScheduleColumn: FC<ScheduleColumnProps> = ({ events }) => {
  const handleClick = () => {
    console.log('card');
  };
  console.log(events);
  return (
    <Box sx={styles.column}>
      {events.map(
        event =>
          !Array.isArray(event) && (
            <ScheduleCard
              key={event.id}
              name={event.name}
              startTime={event.startTime}
              endTime={event.endTime}
              disciplineType={event.disciplineType.name}
              disabled={false}
              onClick={handleClick}
            />
          ),
      )}
    </Box>
  );
};

export default ScheduleColumn;
