import React from 'react';
import { Box } from '@mui/material';

import ColumnChart from '@/components/common/ui/column-chart';

import * as styles from './ColumnChartTestPage.styles';

const response = {
  name: 'Академічна доброчесність',
  amount: 2,
  type: 'AMOUNT',
  mark: {
    1: 10,
    2: 23,
    3: 6,
    4: 2,
    5: 5,
    6: 13,
    7: 21,
    8: 14,
    9: 2,
    10: 16,
  },
};

const ColumnChartTestPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <ColumnChart response={response} />
    </Box>
  );
};

export default ColumnChartTestPage;
