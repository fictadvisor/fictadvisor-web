import type { FC } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Box, Stack } from '@mui/material';

import Button from '@/components/common/ui/button-mui/Button';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import { DropDownSection } from '@/components/pages/schedule-page/calendar-section/components/dropdown-section/DropDownSection';
import useAuthentication from '@/hooks/use-authentication';
import { GetCurrentSemester } from '@/lib/api/dates/types/GetCurrentSemester';
import { Group } from '@/types/group';
import { UserGroupRole } from '@/types/user';

import { CheckBoxSection } from './components/checkboxes-section/CheckBoxSection';
import * as styles from './CalendarSection.styles';

export interface CalendarSectionMobileProps {
  groups: Group[];
}
export const CalendarSectionMobile: FC<CalendarSectionMobileProps> = ({
  groups,
}) => {
  const { user } = useAuthentication();

  return (
    <Box sx={styles.mainWrapper}>
      <Box sx={styles.sticky}>
        <Stack sx={styles.wrapper}>
          {user && user.group?.role === UserGroupRole.CAPTAIN && (
            <Button
              text="Додати подію"
              variant={ButtonVariant.OUTLINE}
              sx={{ borderRadius: '8px' }}
              startIcon={<PlusIcon />}
              size={ButtonSize.MEDIUM}
            />
          )}
          <DropDownSection groups={groups} />
          <CheckBoxSection />
        </Stack>
      </Box>
    </Box>
  );
};
