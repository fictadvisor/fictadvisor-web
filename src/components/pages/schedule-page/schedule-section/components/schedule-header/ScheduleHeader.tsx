import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Box, Typography } from '@mui/material';

import {
  IconButtonColor,
  IconButtonShape,
} from '@/components/common/ui/icon-button';
import IconButton from '@/components/common/ui/icon-button-mui';
import { IconButtonSize } from '@/components/common/ui/icon-button-mui/types';
import { useSchedule } from '@/store/useSchedule';

import * as styles from './ScheduleHeader.styles';

const ScheduleHeader = () => {
  const { week, setWeek } = useSchedule(state => ({
    week: state.week,
    setWeek: state.setWeek,
  }));
  const [prevButton, setPrevButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const month = 'Лютий';
  const startWeek = new Date('2023-08-14T16:43:37.041Z');
  const startWeekDate = new Date('2023-08-14T16:43:37.041Z').getDate();
  const dayMapper = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
  const columns = [];

  const getDayName = (index: number) => {
    return dayMapper[index - 1];
  };

  for (let i = 0; i < 7; i++) {
    const isCurDay = startWeekDate + i === new Date().getDate();
    columns.push(
      <Box sx={styles.column} key={i}>
        <Typography sx={styles.dayName(isCurDay)}>
          {getDayName(startWeek.getDay() + i)}
        </Typography>
        <Typography sx={styles.dayNumber(isCurDay)}>
          {startWeekDate + i}
        </Typography>
      </Box>,
    );
  }

  const nextWeek = () => {
    setWeek(week + 1);
  };

  const prevWeek = () => {
    setWeek(week - 1);
  };

  useEffect(() => {
    week === 1 ? setPrevButton(true) : setPrevButton(false);
    week === 20 ? setNextButton(true) : setNextButton(false);
  }, [week]);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.date}>
        <Typography sx={styles.month}>{month}</Typography>
        <Box sx={styles.weekWrapper}>
          <IconButton
            disabled={prevButton}
            sx={styles.button}
            size={IconButtonSize.LARGE}
            shape={IconButtonShape.SQUARE}
            color={IconButtonColor.TRANSPARENT}
            icon={<ChevronLeftIcon />}
            onClick={prevWeek}
          />
          <Typography sx={styles.week}>{week} тиждень</Typography>
          <IconButton
            disabled={nextButton}
            sx={styles.button}
            size={IconButtonSize.LARGE}
            shape={IconButtonShape.SQUARE}
            color={IconButtonColor.TRANSPARENT}
            icon={<ChevronRightIcon />}
            onClick={nextWeek}
          />
        </Box>
      </Box>
      <Box sx={styles.columns}>{columns.map(column => column)}</Box>
    </Box>
  );
};

export default ScheduleHeader;
