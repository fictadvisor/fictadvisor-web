import React, { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Box, Typography } from '@mui/material';

import {
  IconButtonColor,
  IconButtonShape,
} from '@/components/common/ui/icon-button';
import IconButton from '@/components/common/ui/icon-button-mui';
import { IconButtonSize } from '@/components/common/ui/icon-button-mui/types';
import { GetCurrentSemester } from '@/lib/api/dates/types/GetCurrentSemester';
import { GetEventBody } from '@/lib/api/schedule/types/GetEventBody';
import { transformEvents } from '@/lib/api/schedule/utils/transformEvents';
import { useSchedule } from '@/store/schedule/useSchedule';
import { getLastDayOfAWeek } from '@/store/schedule/utils/getLastDayOfAWeek';

import * as styles from './ScheduleHeader.styles';

const ScheduleHeader = () => {
  const { week, setWeek, eventsBody, setChosenDay, semester } = useSchedule(
    state => ({
      week: state.week,
      setWeek: state.setWeek,
      setChosenDay: state.setChosenDay,
      eventsBody: state.eventsBody,
      semester: state.semester,
    }),
  );
  const [prevButton, setPrevButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const dayMapper = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
  const monthMapper = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ];

  const [isCurDay, setIsCurDay] = useState(false);

  const updateWeek = (amount: number) => {
    const newWeek = week + amount;
    setWeek(newWeek);
    setChosenDay(getLastDayOfAWeek(semester as GetCurrentSemester, newWeek));
  };

  useEffect(() => {
    if (!eventsBody[week - 1]) return;
    const days = transformEvents(eventsBody[week - 1] as GetEventBody).days;
    for (const { day } of days) {
      if (
        day.getDate() === new Date().getDate() &&
        day.getMonth() === new Date().getMonth()
      ) {
        setIsCurDay(true);
      } else {
        setIsCurDay(false);
      }
    }
  }, [eventsBody]);

  useEffect(() => {
    week === 1 ? setPrevButton(true) : setPrevButton(false);
    week === 20 ? setNextButton(true) : setNextButton(false);
  }, [week]);

  if (!eventsBody[week - 1]) return null;

  const monthNumber = transformEvents(
    eventsBody[week - 1] as GetEventBody,
  ).days[0].day.getMonth();

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.date}>
        <Typography sx={styles.month}>{monthMapper[monthNumber]}</Typography>
        <Box sx={styles.weekWrapper}>
          <IconButton
            disabled={prevButton}
            sx={styles.button}
            size={IconButtonSize.LARGE}
            shape={IconButtonShape.SQUARE}
            color={IconButtonColor.TRANSPARENT}
            icon={<ChevronLeftIcon />}
            onClick={() => updateWeek(-1)}
          />
          <Typography sx={styles.week}>{week} тиждень</Typography>
          <IconButton
            disabled={nextButton}
            sx={styles.button}
            size={IconButtonSize.LARGE}
            shape={IconButtonShape.SQUARE}
            color={IconButtonColor.TRANSPARENT}
            icon={<ChevronRightIcon />}
            onClick={() => updateWeek(1)}
          />
        </Box>
      </Box>
      <Box sx={styles.columns}>
        {eventsBody[week - 1] &&
          transformEvents(eventsBody[week - 1]).days.map(({ day }, index) => (
            <Box sx={styles.column} key={index}>
              <Typography sx={styles.dayName(isCurDay)}>
                {dayMapper[day.getDay()]}
              </Typography>
              <Typography sx={styles.dayNumber(isCurDay)}>
                {day.getDate()}
              </Typography>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ScheduleHeader;
