import React from 'react';
import { Box } from '@mui/material';

import ScheduleCard from '@/components/common/ui/schedule-card';

import * as styles from './ScheduleCardPage.styles';

const ScheduleCardPage = () => {
  const name = 'Новітні технології в авіації і космонавтиці';
  const time = '8:30-10:00';
  return (
    <Box sx={styles.wrapper}>
      <h3>Desktop Cards</h3>
      <Box sx={styles.cards}>
        <ScheduleCard
          subject={name}
          time={time}
          type={'lecture'}
          disabled={false}
        />
        <ScheduleCard
          subject={name}
          time={time}
          type={'practice'}
          disabled={false}
        />
        <ScheduleCard
          subject={name}
          time={time}
          type={'laboratory'}
          disabled={false}
        />
        <ScheduleCard
          subject={name}
          time={time}
          type={'other'}
          disabled={false}
        />
      </Box>
      <h3>Disabled cards</h3>
      <Box sx={styles.cards}>
        <ScheduleCard
          subject={name}
          time={time}
          type={'lecture'}
          disabled={true}
        />
        <ScheduleCard
          subject={name}
          time={time}
          type={'practice'}
          disabled={true}
        />
        <ScheduleCard
          subject={name}
          time={time}
          type={'laboratory'}
          disabled={true}
        />
        <ScheduleCard
          subject={name}
          time={time}
          type={'other'}
          disabled={true}
        />
      </Box>
    </Box>
  );
};

export default ScheduleCardPage;
