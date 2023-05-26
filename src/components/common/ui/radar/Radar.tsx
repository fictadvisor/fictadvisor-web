import React, { FC } from 'react';
import { Radar } from 'react-chartjs-2';
import { Box } from '@mui/material';
import {
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);
interface RadarProps {
  info: {
    name: string;
    amount: number;
    type: string;
    mark: number;
  }[];
}
import getAngelLines from '@/components/common/ui/radar/utils/drawAngelLines';
import getData from '@/components/common/ui/radar/utils/drawData';
import getChartBackground from '@/components/common/ui/radar/utils/fillBackground';
import getOptions from '@/components/common/ui/radar/utils/getOptions';

import * as styles from './Radar.styles';

const RadarChart: FC<RadarProps> = ({ info }) => {
  const values = info.map(a => a.mark / 10);
  const lables = info.map(a => a.name);
  const data = getData(values);
  getAngelLines(values, data.datasets);
  getChartBackground(values, data.datasets);
  const options = getOptions();
  return (
    <Box sx={styles.background(lables)}>
      <Box sx={styles.wrapper}>
        <Radar options={options} data={data} />
      </Box>
    </Box>
  );
};

export default RadarChart;
