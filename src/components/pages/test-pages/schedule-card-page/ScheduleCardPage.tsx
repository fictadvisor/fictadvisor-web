import React from 'react';
import { Box, Typography } from '@mui/material';

import ScheduleCard from '@/components/common/ui/schedule-card';
import { DisciplineType } from '@/components/common/ui/schedule-card/types';

import * as styles from './ScheduleCardPage.styles';

const handleClick = () => {
  console.log('hello world');
};

const ScheduleCardPage = () => {
  const name =
    'Компоненти програмної інженерії. Частина 1. Вступ до програмної інженерії';
  const startTime = '8:30';
  const endTime = '10:05';
  return (
    <Box sx={styles.wrapper}>
      <Typography variant="h3">Cards</Typography>
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
      <Typography variant="h3">Disabled cards</Typography>
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
