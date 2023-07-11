import React, { FC } from 'react';
import { Button, Typography } from '@mui/material';

import * as styles from './ScheduleCard.styles';

interface ScheduleCardProps {
  name: string;
  startTime: string;
  endTime: string;
  disciplineType: string;
  disabled: boolean;
  onClick: any;
}

export enum DisciplineType {
  LECTURE = 'LECTURE',
  PRACTICE = 'PRACTICE',
  LABORATORY = 'LABORATORY',
  CONSULTATION = 'CONSULTATION',
  WORKOUT = 'WORKOUT',
  EXAM = 'EXAM',
}

export const ScheduleCard: FC<ScheduleCardProps> = ({
  name,
  startTime,
  endTime,
  disciplineType,
  disabled,
  onClick,
}) => {
  return (
    <Button
      sx={styles.card(disciplineType)}
      disableRipple
      disabled={disabled}
      onClick={onClick}
    >
      <Typography variant={'body1'}>{name}</Typography>
      <Typography variant={'body2'}>
        {startTime} - {endTime}
      </Typography>
    </Button>
  );
};
