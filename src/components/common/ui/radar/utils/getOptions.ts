const getOptions = () => {
  return {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        grid: {
          circular: true,
        },
        beginAtZero: true,
        display: true,
        ticks: {
          display: false,
        },
        pointLabels: {
          color: 'white',
          font: { size: 20 },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
};
export default getOptions;
