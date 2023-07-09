import * as React from 'react';
import { styled } from '@mui/material/styles';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import dayjs, { Dayjs } from 'dayjs';
import isBetweenPlugin from 'dayjs/plugin/isBetween';

import * as styles from './DatePicker.style';

dayjs.extend(isBetweenPlugin);

interface CustomPickerDayProps extends PickersDayProps<Dayjs> {
  dayIsBetween: boolean;
  isFirstDay: boolean;
  isLastDay: boolean;
}

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: prop =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})<CustomPickerDayProps>(props => ({
  ...(props.dayIsBetween && {
    borderRadius: 0,
    backgroundColor: props.theme.palette.grey['100'],
    color: '',
  }),
  ...(props.isFirstDay && {
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
  }),
  ...(props.isLastDay && {
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
  }),
})) as React.ComponentType<CustomPickerDayProps>;

function Day(props: PickersDayProps<Dayjs> & { selectedDay?: Dayjs | null }) {
  const { day, selectedDay, ...other } = props;

  if (selectedDay == null) {
    return <PickersDay day={day} {...other} />;
  }

  const start = selectedDay.startOf('week');
  const end = selectedDay.endOf('week');

  const dayIsBetween = day.isBetween(start, end, null, '[]');
  const isFirstDay = day.isSame(start, 'day');
  const isLastDay = day.isSame(end, 'day');

  return (
    <CustomPickersDay
      {...other}
      day={day}
      sx={dayIsBetween ? { px: 2.5, mx: 0 } : {}}
      dayIsBetween={dayIsBetween}
      isFirstDay={isFirstDay}
      isLastDay={isLastDay}
    />
  );
}

export function DatePicker() {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));

  return (
    <DateCalendar
      value={value}
      onChange={newValue => setValue(newValue)}
      slots={{ day: Day }}
      sx={styles.picker}
      views={['month', 'day']}
      slotProps={{
        day: {
          selectedDay: value,
        } as unknown as Dayjs,
      }}
      showDaysOutsideCurrentMonth={true}
    />
  );
}
