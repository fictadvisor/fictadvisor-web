const getData = (values: Array<number>) => {
  const numbers = new Array(values.length).fill('');
  return {
    labels: numbers,
    color: 'red',
    datasets: [
      {
        color: 'white',
        label: 'Data',
        data: values,
        backgroundColor: 'rgba(188, 61, 61, 0.54)',
        borderColor: 'rgba(188, 61, 61, 1)',
        pointBorderColor: 'rgba(188, 61, 61, 1)',
        pointBackgroundColor: '#212121',
        pointBorderWidth: 1,
        borderWidth: 1,
        pointRadius: 3,
        lineTension: 0,
      },
    ],
  };
};
export default getData;
