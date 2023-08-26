import { FC } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import ScheduleEventForm from 'src/components/pages/schedule-page/schedule-event-edit-section/components/schedule-form';

import { ScheduleEventEditDevice } from '@/components/pages/schedule-page/schedule-event-edit-section/types';
import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './ScheduleEventEdit.styles';

interface ScheduleEventEditProps {
  device?: ScheduleEventEditDevice;
  sx?: SxProps<Theme>;
}

export const ScheduleEventEdit: FC<ScheduleEventEditProps> = ({
  device = ScheduleEventEditDevice.DESKTOP,
  sx = {},
}) => {
  return (
    <Box sx={mergeSx(styles.container(device), sx)}>
      <ScheduleEventForm />
      {/*<ScheduleEventForm device={ScheduleEventEditDevice.MOBILE} />*/}
    </Box>
  );
};

export default ScheduleEventEdit;
