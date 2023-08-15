import React, { FC } from 'react';
import { Button, Typography } from '@mui/material';

import calculateHeight from '@/components/pages/schedule-page/schedule-section/components/schedule-card/utils/calculateHeight';
import { calctulateTop } from '@/components/pages/schedule-page/schedule-section/components/schedule-card/utils/calculateTop';
import { getCurrentTime } from '@/components/pages/schedule-page/schedule-section/components/schedule-card/utils/getCurrentTime';

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
  const top = calctulateTop(startTime);

  const start = getCurrentTime(startTime);
  const end = getCurrentTime(endTime);

  return (
    <Button
      sx={styles.card(disciplineType, height, top)}
      disableRipple
      disabled={disabled}
      onClick={onClick}
    >
      <Typography variant="body1">{name}</Typography>
      {startTime && endTime && (
        <Typography variant="body2">
          {start} - {end}
        </Typography>
      )}
    </Button>
  );
};

export default ScheduleCard;
