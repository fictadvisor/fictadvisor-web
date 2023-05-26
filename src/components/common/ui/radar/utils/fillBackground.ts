const getChartBackground = (values: Array<number>, data: Array<object>) => {
  for (let i = 0; i < 11; i++) {
    const arr = new Array(values.length).fill(i);
    data.push({
      label: 'Data',
      data: arr,
      borderWidth: 1,
      backgroundColor: i % 2 == 0 ? '#212121' : '#242424',
      borderColor: '#353535',
      pointBorderColor: '#000',
      pointBorderWidth: 0,
      pointBackgroundColor: 'transparent',
      pointRadius: 0,
      lineTension: 0.35,
      color: 'transparent',
    });
  }
};
export default getChartBackground;
