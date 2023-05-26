const getAngelLines = (values: Array<number>, data: Array<object>) => {
  for (let i = 0; i < values.length; i++) {
    const arr = new Array(values.length).fill(0);
    arr[i] = 10;
    data.push({
      label: 'Data',
      data: arr,
      borderWidth: 1,
      backgroundColor: '#404040',
      borderColor: '#404040',
      pointBorderColor: 'grey.black',
      pointBorderWidth: 1,
      pointBackgroundColor: 'transparent',
      pointRadius: 0,
      lineTension: 0.35,
      color: 'red',
    });
  }
};
export default getAngelLines;
