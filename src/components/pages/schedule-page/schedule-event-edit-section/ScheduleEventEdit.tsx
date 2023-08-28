import { FC, Fragment, useState } from 'react';
import { useQuery } from 'react-query';

import ScheduleInfoCard from '@/components/pages/schedule-page/schedule-event-edit-section/components/schedule-info-card';
import { GetCurrentSemester } from '@/lib/api/dates/types/GetCurrentSemester';
import ScheduleAPI from '@/lib/api/schedule/ScheduleAPI';
import { useSchedule } from '@/store/schedule/useSchedule';
import { getWeekByDate } from '@/store/schedule/utils/getWeekByDate';
export const ScheduleEventEdit = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const closeWindow = () => {
    useSchedule.setState({ openedEvent: undefined });
  };

  const { openedEvent, semester } = useSchedule(state => ({
    openedEvent: state.openedEvent,
    semester: state.semester,
  }));

  const week = getWeekByDate(
    semester as GetCurrentSemester,
    new Date(openedEvent?.startTime as string),
  );

  const { data, isLoading } = useQuery(['event', openedEvent?.id, week], () =>
    ScheduleAPI.getEventInfo(openedEvent?.id as string, week),
  );

  return (
    <Fragment>
      {!isEditOpen && (
        <ScheduleInfoCard
          onCloseButtonClick={closeWindow}
          onEventEditButtonClick={() => setIsEditOpen(true)}
          loading={isLoading}
          event={data}
        />
      )}
    </Fragment>
  );
};

export default ScheduleEventEdit;
