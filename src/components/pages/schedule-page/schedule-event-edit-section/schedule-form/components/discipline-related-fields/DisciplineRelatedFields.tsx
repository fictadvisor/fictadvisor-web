import React, { FC, Fragment } from 'react';
import { useQuery } from 'react-query';
import { Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

import { AddDeleteTeachers } from '@/components/pages/schedule-page/schedule-event-edit-section/schedule-form/components/add-delete-teachers/AddDeleteTeachers';
import { ScheduleFormikDropdown } from '@/components/pages/schedule-page/schedule-event-edit-section/schedule-form/components/schedule-dropdown/ScheduleDropdown';
import { skeletonProps } from '@/components/pages/schedule-page/schedule-event-edit-section/utils/skeletonProps';
import useAuthentication from '@/hooks/use-authentication';
import { GetCurrentSemester } from '@/lib/api/dates/types/GetCurrentSemester';
import GroupAPI from '@/lib/api/group/GroupAPI';
import ScheduleAPI from '@/lib/api/schedule/ScheduleAPI';
import { SharedEventBody } from '@/lib/api/schedule/types/shared';
import { useSchedule } from '@/store/schedule/useSchedule';

import {
  getDisciplineOptions,
  getTeacherOptions,
} from '../add-delete-teachers/utils';
export interface DisciplineRelatedFieldsProps {
  values: SharedEventBody;
}

export const DisciplineRelatedFields: FC<DisciplineRelatedFieldsProps> = ({
  values,
}) => {
  //TODO:add errors handling
  const { user } = useAuthentication();
  const semester = useSchedule(state => state.semester);

  const { isLoading, data } = useQuery('dataAboutGroup', () =>
    ScheduleAPI.getDisciplinesAndTeachers(
      user.group?.id as string,
      semester as GetCurrentSemester,
    ),
  );

  return (
    <Fragment>
      <Typography variant="body1Medium" alignSelf="start">
        Викладач
      </Typography>
      {isLoading || !data ? (
        <Skeleton {...skeletonProps} width={300} height={50} />
      ) : (
        <AddDeleteTeachers
          name={'teachers'}
          teacherOptions={getTeacherOptions(data?.teachers)}
        />
      )}
      <Typography variant="body1Medium">Дисципліна</Typography>
      {isLoading || !data ? (
        <Skeleton {...skeletonProps} width={300} height={50} />
      ) : (
        <ScheduleFormikDropdown
          name={'disciplineId'}
          options={getDisciplineOptions(data.disciplines)}
          placeholder={'Оберіть дисципліну'}
        />
      )}
    </Fragment>
  );
};
