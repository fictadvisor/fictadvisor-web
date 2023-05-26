import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import { Chart, registerables } from 'chart.js';

import { getData } from '@/components/common/ui/column-chart/utils/data';
import { getOptions } from '@/components/common/ui/column-chart/utils/options';
import { GetTeacherEvaluationsDTO } from '@/lib/api/teacher/dto/GetTeacherEvaluationsDTO';

import * as styles from './ColumnChart.styles';

Chart.register(...registerables);

interface ColumnChartProps {
  data: GetTeacherEvaluationsDTO;
}

const ColumnChart: FC<ColumnChartProps> = ({ data }) => {
  return (
    <Box sx={styles.chartContainer}>
      <Typography sx={styles.yTitle}>Кількість голосів</Typography>
      <Bar data={getData(data)} options={getOptions()} />
    </Box>
  );
};

export default ColumnChart;
