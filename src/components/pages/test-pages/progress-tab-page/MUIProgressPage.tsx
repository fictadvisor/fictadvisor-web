import React from 'react';
import { Box } from '@mui/material';

import Progress from '@/components/common/ui/progress-mui/Progress';

import * as styles from './MUIProgressPage.styles';
const ProgressPage = () => {
  return (
    <Box>
      <Progress color={'primary'} />
    </Box>
  );
};

export default ProgressPage;
