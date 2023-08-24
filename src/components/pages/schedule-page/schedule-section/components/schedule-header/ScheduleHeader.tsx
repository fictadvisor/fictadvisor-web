import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Box, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

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
const dayMapper = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
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

import * as styles from './ScheduleHeader.styles';
const ScheduleHeader = () => {
  const { week, setWeek, eventsBody, setChosenDay, semester, chosenDay } =
    useSchedule(state => ({
      week: state.week,
      setWeek: state.setWeek,
      setChosenDay: state.setChosenDay,
      eventsBody: state.eventsBody,
      semester: state.semester,
      chosenDay: state.chosenDay,
    }));
  const [prevButton, setPrevButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);

  const updateWeek = (amount: number) => {
    const newWeek = week + amount;
    setWeek(newWeek);
    setChosenDay(getLastDayOfAWeek(semester as GetCurrentSemester, newWeek));
  };

  useEffect(() => {
    week === 1 ? setPrevButton(true) : setPrevButton(false);
    week === 20 ? setNextButton(true) : setNextButton(false);
  }, [week]);

  const monthNumber = useMemo(() => {
    if (!eventsBody[week - 1]) return null;
    return transformEvents(
      eventsBody[week - 1] as GetEventBody,
    ).days[0].day.getMonth();
  }, [eventsBody, week]);

  const days = useMemo(() => {
    if (!eventsBody[week - 1]) return [];
    return transformEvents(eventsBody[week - 1] as GetEventBody).days;
  }, [eventsBody, week]);

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.date}>
        {monthNumber ? (
          <Typography sx={styles.month}>{monthMapper[monthNumber]}</Typography>
        ) : (
          <Skeleton
            width={140}
            height={35}
            variant={'rounded'}
            sx={{ bgcolor: 'grey.200' }}
            animation="wave"
          />
        )}
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
        {dayMapper.map((dayName, i) => (
          <Box sx={styles.column} key={i}>
            <Typography
              sx={styles.dayName(
                days[i]
                  ? days[i].day.toDateString() === chosenDay?.toDateString()
                  : false,
              )}
            >
              {dayName}
            </Typography>
            {days[i] ? (
              <Typography
                sx={styles.dayNumber(
                  days[i]
                    ? days[i].day.toDateString() === chosenDay?.toDateString()
                    : false,
                )}
              >
                {days[i].day.getDate()}
              </Typography>
            ) : (
              <Skeleton
                width={20}
                height={25}
                variant={'rounded'}
                sx={{ bgcolor: 'grey.200' }}
                animation="wave"
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ScheduleHeader;
