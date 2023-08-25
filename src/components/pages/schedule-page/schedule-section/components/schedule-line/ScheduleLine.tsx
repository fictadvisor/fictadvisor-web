import { FC } from 'react';
import { Box, Divider, SxProps, Theme } from '@mui/material';

import Tooltip from '@/components/common/ui/tooltip-mui';
import { calctulateTop } from '@/components/pages/schedule-page/schedule-section/components/schedule-card/utils/calculateTop';
import { getCurrentTime } from '@/components/pages/schedule-page/schedule-section/components/schedule-card/utils/getCurrentTime';
import mergeSx from '@/lib/utils/MergeSxStylesUtil';
import { useSchedule } from '@/store/schedule/useSchedule';

import * as styles from './ScheduleLine.styles';
import { ScheduleLineVariant } from './types';

interface ScheduleLineProps {
  variant: ScheduleLineVariant;
  label?: string;
  dashed?: boolean;
  sx?: SxProps<Theme>;
}

const ScheduleLine: FC<ScheduleLineProps> = ({
  variant = ScheduleLineVariant.LONG,
  label,
  dashed = false,
  sx = {},
}) => {
  const time = useSchedule(state => state.currentTime);

  const top = calctulateTop(time.toISOString());

  const indent = (time.getDay() - 1) * 148;

  const isCurWeek =
    time.getDate() === new Date().getDate() &&
    time.getMonth() === new Date().getMonth();

  return (
    <Box sx={mergeSx(styles.container(top), sx)}>
      <Tooltip
        title={getCurrentTime(time.toISOString())}
        arrow={true}
        placement={'left'}
        sx={styles.tooltip}
      >
        <Box sx={styles.line(variant, indent)}>
          <Box sx={styles.verticalDivider(variant)}></Box>
          <Divider sx={styles.horizontalDivider(variant)} />
        </Box>
      </Tooltip>

      {dashed && <Divider sx={styles.dashed} />}
    </Box>
  );
};

export default ScheduleLine;
