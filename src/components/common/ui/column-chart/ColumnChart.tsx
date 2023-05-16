import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, ChartData, type ChartOptions, registerables } from 'chart.js';

import styles from './ColumnChart.module.scss';

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

const ColumnChart: FC = () => {
  const options: ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
          font: {
            size: 16,
            family: 'Manrope',
          },
          color: '#fff',
        },
      },
    },
    scales: {
      y: {
        border: {
          display: false,
        },
        title: {
          display: true,
          text: 'Кількість голосів',
          font: {
            size: 16,
          },
        },
        type: 'linear',
        beginAtZero: true,
        grid: {
          color: context => {
            const index = context.index;
            const ticks = context.chart.scales.y.ticks.length;
            if (index === ticks - 1 || index === 0) {
              return 'rgba(0, 0, 0, 0)';
            }
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            const gradient = ctx.createLinearGradient(
              chartArea.left,
              0,
              chartArea.right,
              0,
            );
            gradient.addColorStop(0, 'rgba(64, 64, 64, 0.1)');
            gradient.addColorStop(0.1, 'rgba(64, 64, 64, 0.9)');
            gradient.addColorStop(0.5, 'rgba(64, 64, 64, 1)');
            gradient.addColorStop(0.9, 'rgba(64, 64, 64, 0.9)');
            gradient.addColorStop(1, 'rgba(64, 64, 64, 0.1)');

            return gradient;
          },
          tickWidth: 0,
        },
        ticks: {
          callback: function (value, index, values) {
            if (index === values.length - 1) {
              return '';
            }
            return value;
          },
        },
      },
      x: {
        border: {
          display: false,
        },
        type: 'category',
        grid: {
          display: false,
        },
      },
    },
    responsive: true,
  };

  const data: ChartData<'bar'> = {
    labels: Object.keys(response.mark),
    datasets: [
      {
        label: response.name,
        data: Object.values(response.mark),
        backgroundColor: '#B83838',
        borderWidth: 0,
        borderRadius: 3,
        barThickness: 17,
      },
    ],
  };

  return (
    <div className={styles['chartContainer']}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ColumnChart;
