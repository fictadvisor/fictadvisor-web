import React, { FC } from 'react';
import { Button, Typography } from '@mui/material';

import calculateHeight from '@/components/pages/schedule-page/schedule-section/components/schedule-card/utils/calculateHeight';
import { calctulateTop } from '@/components/pages/schedule-page/schedule-section/components/schedule-card/utils/calculateTop';
import { getCurrentTime } from '@/components/pages/schedule-page/schedule-section/components/schedule-card/utils/getCurrentTime';
import { useSchedule } from '@/store/useSchedule';

import * as styles from './ScheduleCard.styles';

interface ScheduleCardProps {
  name: string;
  startTime: string;
  endTime: string;
  disciplineType: string;
  onClick: () => void;
}

const ScheduleCard: FC<ScheduleCardProps> = ({
  name,
  startTime,
  endTime,
  disciplineType,
  onClick,
}) => {
  const height = calculateHeight(startTime, endTime);
  const top = calctulateTop(startTime);

  const start = getCurrentTime(startTime);
  const end = getCurrentTime(endTime);

  const currentTime = useSchedule(state => state.currentTime).getTime();

  return (
    <Button
      sx={styles.card(disciplineType, height, top)}
      disableRipple
      disabled={currentTime > new Date(endTime).getTime()}
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
