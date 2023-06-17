import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import { Chart, registerables } from 'chart.js';

import getData from '@/components/common/ui/column-chart/utils/get-data';
import getOptions from '@/components/common/ui/column-chart/utils/get-options';

import { ColumnChartProps } from './types';
import * as styles from './ColumnChart.styles';

Chart.register(...registerables);

const ColumnChart: FC<ColumnChartProps> = ({ data }) => {
  return (
    <Box sx={styles.chartContainer}>
      <Typography sx={styles.legend}>{data.name}</Typography>
      <Typography sx={styles.yTitle}>Кількість голосів</Typography>
      <Box sx={styles.chart}>
        <Bar data={getData(data)} options={getOptions()} />
      </Box>
    </Box>
  );
};

export default ColumnChart;
