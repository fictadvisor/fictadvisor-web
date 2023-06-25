import React, { FC } from 'react';
import { Button, Typography } from '@mui/material';

import * as styles from './ScheduleCard.styles';

interface ScheduleCardProps {
  subject: string;
  time: string;
  type: string;
  disabled: boolean;
}

const ScheduleCard: FC<ScheduleCardProps> = ({
  subject,
  time,
  type,
  disabled,
}) => {
  return (
    <Button sx={styles.wrapper(type)} disableRipple disabled={disabled}>
      <Typography sx={styles.subject}>{subject}</Typography>
      <Typography sx={styles.time(type)}>{time}</Typography>
    </Button>
  );
};

export default ScheduleCard;
