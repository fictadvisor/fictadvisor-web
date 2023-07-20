import React, { FC } from 'react';
import { Button, Typography } from '@mui/material';

import calculateHeight from '@/components/common/ui/schedule-card/utils/calculateHeight';

import * as styles from './ScheduleCard.styles';

interface ScheduleCardProps {
  name: string;
  startTime: string;
  endTime: string;
  disciplineType: string;
  disabled: boolean;
  onClick: () => void;
}

const ScheduleCard: FC<ScheduleCardProps> = ({
  name,
  startTime,
  endTime,
  disciplineType,
  disabled,
  onClick,
}) => {
  const height = calculateHeight(startTime, endTime);
  return (
    <Button
      sx={styles.card(disciplineType, height)}
      disableRipple
      disabled={disabled}
      onClick={onClick}
    >
      <Typography variant="body1">{name}</Typography>
      {startTime && endTime && (
        <Typography variant="body2">
          {startTime} - {endTime}
        </Typography>
      )}
    </Button>
  );
};

export default ScheduleCard;
