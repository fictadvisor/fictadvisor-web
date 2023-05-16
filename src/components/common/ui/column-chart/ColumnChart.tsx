import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';
import { Chart, registerables } from 'chart.js';

import { getOptions } from '@/components/common/ui/column-chart/utils/options';

import * as styles from './ColumnChart.styles';
import { getData } from '@/components/common/ui/column-chart/utils/data';

Chart.register(...registerables);

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

const ColumnChart: FC = (response) => {
  return (
    <Box sx={styles.chartContainer}>
      <Bar data={getData(response)} options={getOptions()} />
    </Box>
  );
};

export default ColumnChart;
