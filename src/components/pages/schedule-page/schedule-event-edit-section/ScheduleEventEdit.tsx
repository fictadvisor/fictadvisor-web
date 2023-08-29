import { Fragment, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import ScheduleInfoCard from '@/components/pages/schedule-page/schedule-event-edit-section/components/schedule-info-card';
import { transformDetailedEvent } from '@/components/pages/schedule-page/schedule-event-edit-section/utils/transformDetailedEvent';
import useAuthentication from '@/hooks/use-authentication';
import { GetCurrentSemester } from '@/lib/api/dates/types/GetCurrentSemester';
import ScheduleAPI from '@/lib/api/schedule/ScheduleAPI';
import { SharedEventBody } from '@/lib/api/schedule/types/shared';
import { useSchedule } from '@/store/schedule/useSchedule';
import { getWeekByDate } from '@/store/schedule/utils/getWeekByDate';
import { UserGroupRole } from '@/types/user';

import { ScheduleEventForm } from './schedule-form/ScheduleEventForm';

export const ScheduleEventEdit = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { openedEvent, semester } = useSchedule(state => ({
    openedEvent: state.openedEvent,
    semester: state.semester,
  }));
  const { user } = useAuthentication();
  const closeWindow = () => {
    setIsEditOpen(false);
    useSchedule.setState({ openedEvent: undefined });
  };

  const handleEventEdited = async (values: SharedEventBody) => {};

  const week = getWeekByDate(
    semester as GetCurrentSemester,
    new Date(openedEvent?.startTime as string),
  );

  const handleEventEditClick = () => {
    if (user.group?.role !== UserGroupRole.STUDENT) setIsEditOpen(true);
  };

  const { data, isLoading } = useQuery(['event', openedEvent?.id, week], () =>
    ScheduleAPI.getEventInfo(openedEvent?.id as string, week),
  );

  return (
    <Fragment>
      {!isEditOpen && (
        <ScheduleInfoCard
          onCloseButtonClick={closeWindow}
          onEventEditButtonClick={handleEventEditClick}
          loading={isLoading}
          event={data}
        />
      )}
      {isEditOpen && data && (
        <ScheduleEventForm
          onCloseButtonClick={closeWindow}
          onSubmit={handleEventEdited}
          initialValues={transformDetailedEvent(data)}
        />
      )}
    </Fragment>
  );
};

export default ScheduleEventEdit;
