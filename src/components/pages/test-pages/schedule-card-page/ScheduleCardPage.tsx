import React from 'react';
import { Box } from '@mui/material';

import ScheduleCard from '@/components/common/ui/schedule-card';
import { DisciplineType } from '@/components/common/ui/schedule-card/types';

import * as styles from './ScheduleCardPage.styles';

const handleClick = () => {
  console.log('hello world');
};

const ScheduleCardPage = () => {
  const name = 'Новітні технології в авіації і космонавтиці';
  const startTime = '';
  const endTime = '10:05';
  return (
    <Box sx={styles.wrapper}>
      <h3>Cards</h3>
      <Box sx={styles.cards}>
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={DisciplineType.LECTURE}
          disabled={false}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={DisciplineType.PRACTICE}
          disabled={false}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={DisciplineType.LABORATORY}
          disabled={false}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={DisciplineType.CONSULTATION}
          disabled={false}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={DisciplineType.WORKOUT}
          disabled={false}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={DisciplineType.EXAM}
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
          disciplineType={DisciplineType.LECTURE}
          disabled={true}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={DisciplineType.PRACTICE}
          disabled={true}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={DisciplineType.LABORATORY}
          disabled={true}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={DisciplineType.CONSULTATION}
          disabled={true}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={DisciplineType.WORKOUT}
          disabled={true}
          onClick={handleClick}
        />
        <ScheduleCard
          name={name}
          startTime={startTime}
          endTime={endTime}
          disciplineType={DisciplineType.EXAM}
          disabled={true}
          onClick={handleClick}
        />
      </Box>
    </Box>
  );
};

export default ScheduleCardPage;
