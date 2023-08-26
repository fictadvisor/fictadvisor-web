import type { FC } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Box, Stack } from '@mui/material';

import { CheckboxesDropdown } from '@/components/pages/schedule-page/calendar-section/components/checkboxes-dropdown/CheckboxesDropDown';
import { GroupsDropDown } from '@/components/pages/schedule-page/calendar-section/components/groups-dropdown/GroupsDropDown';
import { Group } from '@/types/group';

import { CheckBoxSection } from './components/checkboxes-section/CheckBoxSection';
import { WeekArrows } from './components/weekArrows/WeekArrows';
import * as styles from './CalendarSectionMobile.styles';
export interface CalendarSectionMobileProps {
  groups: Group[];
}
export const CalendarSectionMobile: FC<CalendarSectionMobileProps> = ({
  groups,
}) => {
  return (
    <Box sx={styles.mainWrapper}>
      <WeekArrows />
      <GroupsDropDown groups={groups} />
      <CheckboxesDropdown />
      {/*<CheckBoxSection />*/}
    </Box>
  );
};
