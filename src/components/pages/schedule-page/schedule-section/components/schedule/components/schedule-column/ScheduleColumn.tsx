import { FC } from 'react';
import { Box } from '@mui/material';

import ScheduleCard from '@/components/pages/schedule-page/schedule-section/components/schedule/components/schedule-column/components/schedule-card';
import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
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
  const { groupId } = useSchedule(state => ({
    groupId: state.groupId,
  }));

  const toast = useToast();

  const { user } = useAuthentication();

  const handleClick = async (_event: Event, week: string | number) => {
    if (!user) {
      toast.info(
        'Неавторизован(ий/а) 🐸',
        'Увійди в акаунт для перегляду детальної інофрмації про подію',
        3000,
      );
      return;
    }
    if (user.group?.id !== groupId) {
      toast.info(
        'Недостатньо прав 🐸',
        'Ти не можеш переглянути детальну інформацію про події іншої групи',
        3000,
      );
      return;
    }
    useSchedule.setState(state => ({
      openedEvent: _event,
      isNewEventAdded: false,
    }));
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
