import React from 'react';
import { Box } from '@mui/material';

import ScheduleCard from '@/components/common/ui/schedule-card';

import * as styles from './ScheduleCardPage.styles';

const handleClick = () => {
  console.log('hello world');
};

const ScheduleCardPage = () => {
  const name = 'Новітні технології в авіації і космонавтиці';
  const startTime = '8:30';
  const endTime = '10:00';
  return (
    <Box sx={styles.wrapper}>
      <h3>Cards</h3>
      <Box sx={styles.cards}>
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={'lecture'}
          disabled={false}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={'practice'}
          disabled={false}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={'laboratory'}
          disabled={false}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={'other'}
          disabled={false}
          onClick={handleClick}
        />
      </Box>
      <h3>Disabled cards</h3>
      <Box sx={styles.cards}>
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={'lecture'}
          disabled={true}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={'practice'}
          disabled={true}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={'laboratory'}
          disabled={true}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={'other'}
          disabled={true}
          onClick={handleClick}
        />
      </Box>
    </Box>
  );
};

export default ScheduleCardPage;
