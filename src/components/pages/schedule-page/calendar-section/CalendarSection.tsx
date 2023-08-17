import type { FC } from 'react';
import React, { useEffect, useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Box, Stack } from '@mui/material';
import { Form, Formik } from 'formik';

import Button from '@/components/common/ui/button-mui/Button';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import Dropdown from '@/components/common/ui/form/dropdown/Dropdown';
import useAuthentication from '@/hooks/use-authentication';
import { GetCurrentSemester } from '@/lib/api/dates/types/GetCurrentSemester';
import groupAPI from '@/lib/api/group/GroupAPI';
import { useSchedule } from '@/store/useSchedule';
import { Group } from '@/types/group';
import { UserGroupRole } from '@/types/user';

import { CheckBoxSection } from './components/checkboxes-section/CheckBoxSection';
import { DatePicker } from './components/date-picker/DatePicker';
import * as styles from './CalendarSection.styles';
export interface CalendarSectionProps {
  semester: GetCurrentSemester | null;
  groups: Group[];
}
export const CalendarSection: FC<CalendarSectionProps> = ({
  semester,
  groups,
}) => {
  const { setGroupId, groupId } = useSchedule(state => ({
    setGroupId: state.setGroupId,
    groupId: state.groupId,
  }));
  const { user } = useAuthentication();

  return (
    <Box sx={styles.mainWrapper}>
      <Formik
        validateOnMount
        validateOnChange
        initialValues={{}}
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Box sx={styles.sticky}>
          <Form>
            <Stack sx={styles.wrapper}>
              <Dropdown
                width={'calc(280px - 16px)'}
                options={
                  groups
                    ? groups?.map(group => ({
                        id: group.id,
                        label: group.code,
                      }))
                    : []
                }
                label="Група"
                showRemark={false}
                onChange={id => setGroupId(id)}
                value={groupId}
              />
              {user && user.group?.role === UserGroupRole.CAPTAIN && (
                <Button
                  text={'Додати подію'}
                  variant={ButtonVariant.OUTLINE}
                  startIcon={<PlusIcon />}
                  size={ButtonSize.SMALL}
                />
              )}
              {/*<TabSection / LEFT FOR FUTURE GENERATIONS>*/}
              <DatePicker semester={semester} />
              <CheckBoxSection />
            </Stack>
          </Form>
        </Box>
      </Formik>
    </Box>
  );
};
