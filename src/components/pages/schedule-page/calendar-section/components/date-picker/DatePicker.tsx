import { FC, useEffect, useState } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';

import { GetCurrentSemester } from '@/lib/api/dates/types/GetCurrentSemester';
import { useSchedule } from '@/store/useSchedule';

import * as styles from './DatePicker.style';
export interface DatePickerProps {
  semester: GetCurrentSemester | null;
}

export const DatePicker: FC<DatePickerProps> = ({ semester }) => {
  const { chosenDay, setChosenDay } = useSchedule(state => ({
    chosenDay: state.chosenDay,
    setChosenDay: state.setChosenDay,
  }));

  console.log(chosenDay);
  if (!chosenDay) return <></>;
  console.log(chosenDay);

  return (
    <DateCalendar
      value={dayjs(chosenDay)}
      onChange={newValue => {
        console.log(newValue);
        if (newValue) setChosenDay(newValue.toDate());
      }}
      sx={styles.picker}
      views={['day']}
      showDaysOutsideCurrentMonth={true}
      dayOfWeekFormatter={day => {
        return day.charAt(0).toUpperCase() + day.slice(1);
      }}
      minDate={dayjs(semester?.startDate)}
      maxDate={dayjs(semester?.endDate)}
    />
  );
};
