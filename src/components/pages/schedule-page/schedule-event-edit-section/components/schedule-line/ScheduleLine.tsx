import { FC } from 'react';
import { Box, Divider, SxProps, Theme } from '@mui/material';

import Tooltip from '@/components/common/ui/tooltip-mui';
import { TooltipPosition } from '@/components/common/ui/tooltip-mui/types';
import mergeSx from '@/lib/utils/MergeSxStylesUtil';

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
  return (
    <Box sx={mergeSx(styles.container(variant), sx)}>
      {label ? (
        <Tooltip text={label} position={TooltipPosition.LEFT}>
          <Box sx={styles.verticalDivider(variant)}></Box>
        </Tooltip>
      ) : (
        <Box sx={styles.verticalDivider(variant)}></Box>
      )}

      <Divider sx={styles.horizontalDivider(variant)} />

      {dashed && <Divider sx={styles.dashed()} />}
    </Box>
  );
};

export default ScheduleLine;
