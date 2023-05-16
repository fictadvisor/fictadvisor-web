import { ChartData } from 'chart.js';

export const getData = (response): ChartData<'bar'> => {
  const { mark, name } = response;
  return {
    labels: Object.keys(mark),
    datasets: [
      {
        label: name,
        data: Object.values(mark),
        backgroundColor: '#B83838',
        borderWidth: 0,
        borderRadius: 3,
        barThickness: 17,
      },
    ],
  };
}