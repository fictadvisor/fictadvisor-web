import { FC, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

import { useSchedule } from '@/store/useSchedule';
import { Event } from '@/types/schedule';

import * as styles from './Cards.styles';

const events = [
  {
    id: 'test1',
    name: 'test1',
    startTime: '2023-06-20T05:30:00.000Z',
    endTime: '2023-06-20T07:05:00.000Z',
    disciplineType: {
      id: '424bbe6c-e9ff-493a-923a-a0325bfe0c36',
      disciplineId: 'ce313339-6c59-460e-a943-7b9f8d080326',
      name: 'LABORATORY',
    },
  },
  {
    id: 'test2',
    name: 'test2',
    startTime: '2023-06-20T05:30:00.000Z',
    endTime: '2023-06-20T07:05:00.000Z',
    disciplineType: {
      id: '636f0440-c853-4656-b173-03c78427c85f',
      disciplineId: 'ce313339-6c59-460e-a943-7b9f8d080326',
      name: 'LECTURE',
    },
  },
  {
    id: 'test3',
    name: 'test3',
    startTime: '2023-06-20T05:30:00.000Z',
    endTime: '2023-06-20T07:05:00.000Z',
    disciplineType: {
      id: '1d3467d1-10d2-4bfb-8651-93560ae6e963',
      disciplineId: 'ce3d79e4-1a8b-4deb-b02c-a5ac406402e1',
      name: 'PRACTICE',
    },
  },
  {
    id: 'test4',
    name: 'test4',
    startTime: '2023-06-20T05:30:00.000Z',
    endTime: '2023-06-20T07:05:00.000Z',
    disciplineType: {
      id: '7aec50f5-72f6-498b-a598-738f69515e26',
      disciplineId: 'ce3d79e4-1a8b-4deb-b02c-a5ac406402e1',
      name: 'LECTURE',
    },
  },
  {
    id: 'test5',
    name: 'test5',
    startTime: '2023-06-20T05:30:00.000Z',
    endTime: '2023-06-20T07:05:00.000Z',
    disciplineType: {
      id: 'a026dfe3-dd7a-4902-bc34-f500a962e1b7',
      disciplineId: 'ce4d0d47-ce87-423d-a8e6-c8e59d410069',
      name: 'PRACTICE',
    },
  },
  {
    id: 'test6',
    name: 'test6',
    startTime: '2023-06-20T05:30:00.000Z',
    endTime: '2023-06-20T07:05:00.000Z',
    disciplineType: {
      id: 'a026dfe3-dd7a-4902-bc34-f500a962e1b7',
      disciplineId: 'ce4d0d47-ce87-423d-a8e6-c8e59d410069',
      name: 'PRACTICE',
    },
  },
];

interface ScheduleEventsProps {
  event?: Event[];
  height: string | number;
  start: string;
  end: string;
  onClick: () => void;
}

const ScheduleEvent: FC<ScheduleEventsProps> = ({
  event = events,
  height,
  start,
  end,
  onClick,
}) => {
  console.log(JSON.stringify(event));
  const currentTime =
    useSchedule(state => state.currentTime).getTime() >
    new Date(event[0].endTime).getTime();

  const trimmedEvents = event.slice(0, 5);

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
            event[event.length - 1].disciplineType.name,
            height - 14 * (trimmedEvents.length - 1),
          )}
          disableRipple
          disabled={false}
          onClick={onClick}
        >
          <Typography variant="body1">
            {event.length} {event.length < 5 ? 'події' : 'подій'}
          </Typography>
          {event[0].startTime && event[0].endTime && (
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
