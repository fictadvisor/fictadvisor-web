import { FC } from 'react';
import { Box } from '@mui/material';
import { AxiosError } from 'axios';

import ScheduleCard from '@/components/pages/schedule-page/schedule-section/components/schedule-card';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import ScheduleAPI from '@/lib/api/schedule/ScheduleAPI';
import { EventDay } from '@/lib/api/schedule/types/GetEventBody';
import { useSchedule } from '@/store/schedule/useSchedule';
import { Event } from '@/types/schedule';

import * as styles from './ScheduleColumn.styles';

interface ScheduleColumnProps {
  day: EventDay;
}

const errorMapper = {
  InvalidEntityIdException: 'Такої події не існує',
  InvalidWeekException: 'Неправильний тиждень',
  UnauthorizedException: 'Користувач не авторизований',
  NoPermissionException: 'Немає дозволу на цю дію',
};

const ScheduleColumn: FC<ScheduleColumnProps> = ({ day }) => {
  const { openedEvent } = useSchedule(state => ({
    openedEvent: state.openedEvent,
  }));

  const toast = useToast();

  const { user } = useAuthentication();

  const handleClick = async (_event: Event, week: string | number) => {
    if (
      openedEvent &&
      openedEvent.id === _event.id &&
      openedEvent.startTime === _event.startTime
    )
      return;

    if (!user) {
      toast.info(
        'Увійдіть в акаунт для перегляду детальної інофрмації про подію',
        '',
        3000,
      );
      return;
    }

    try {
      const event = await ScheduleAPI.getEventInfo(_event.id, week);
      useSchedule.setState(state => ({ openedEvent: event }));
      console.log(event);
    } catch (e) {
      const error = (
        e as { response: { data: { error: keyof typeof errorMapper } } }
      ).response.data.error;
      toast.error(errorMapper[error]);
    }
  };

  return (
    <Box sx={styles.column}>
      {day.events.map((event, i) => (
        <ScheduleCard
          event={event}
          onClick={handleClick}
          key={i}
          week={day.week}
        />
      ))}
    </Box>
  );
};

export default ScheduleColumn;
