import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Box, Typography } from '@mui/material';

import {
  IconButtonColor,
  IconButtonShape,
} from '@/components/common/ui/icon-button';
import IconButton from '@/components/common/ui/icon-button-mui';
import { IconButtonSize } from '@/components/common/ui/icon-button-mui/types';

import * as styles from './ScheduleHeader.styles';

const ScheduleHeader = () => {
  const [week, setWeek] = useState(1);
  const month = 'Лютий';

  const handleClick = () => (week == 1 ? setWeek(2) : setWeek(1));

  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.month}>{month}</Typography>
      <IconButton
        sx={styles.button}
        size={IconButtonSize.LARGE}
        shape={IconButtonShape.SQUARE}
        color={IconButtonColor.TRANSPARENT}
        icon={<ChevronLeftIcon />}
        onClick={handleClick}
      />
      <Typography sx={styles.week}>{week} тиждень</Typography>
      <IconButton
        sx={styles.button}
        size={IconButtonSize.LARGE}
        shape={IconButtonShape.SQUARE}
        color={IconButtonColor.TRANSPARENT}
        icon={<ChevronRightIcon />}
        onClick={handleClick}
      />
    </Box>
  );
};

export default ScheduleHeader;
