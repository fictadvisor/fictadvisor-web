import { ChartData } from 'chart.js';

import { TeacherEvaluations } from '../types';

const getData = (data: TeacherEvaluations): ChartData<'bar'> => {
  console.log(data);
  const { mark, name } = data;
  return {
    labels: Object.keys(mark),
    datasets: [
      {
        label: name,
        data: Object.values(mark),
        backgroundColor: 'rgb(184, 56, 56)',
        borderWidth: 0,
        borderRadius: 3,
        barThickness: 14,
        hoverBackgroundColor: 'rgb(184, 56, 56)',
      },
    ],
  };
};

export default getData;
