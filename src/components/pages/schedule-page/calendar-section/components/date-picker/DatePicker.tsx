import { FC } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

import { getWeekByDate } from '@/components/pages/schedule-page/utils/getCurrentWeek';
import { GetCurrentSemester } from '@/lib/api/dates/types/GetCurrentSemester';
import { useSchedule } from '@/store/useSchedule';

import * as styles from './DatePicker.styles';
interface DatePickerProps {
  semester: GetCurrentSemester | null;
}

export const DatePicker: FC<DatePickerProps> = ({ semester }) => {
  const { chosenDay, setChosenDay, setWeek } = useSchedule(state => ({
    chosenDay: state.chosenDay,
    setChosenDay: state.setChosenDay,
    setWeek: state.setWeek,
  }));

  if (!chosenDay) return <></>;

  return (
    <DateCalendar
      value={dayjs(chosenDay)}
      onChange={newValue => {
        if (newValue && semester) {
          setChosenDay(newValue.toDate());
          setWeek(getWeekByDate(semester, newValue.toDate()));
        }
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
