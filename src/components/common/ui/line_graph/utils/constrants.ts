const ColorMap: Record<string, string> = {
  good: 'green.700',
  average: 'amber.500',
  bad: 'error.400',
};

const colorInfo = value => {
  if (value > 75) {
    return ColorMap.good;
  }
  if (value < 50) {
    return ColorMap.bad;
  }
  if (value < 75) {
    return ColorMap.average;
  }
};

export default colorInfo;
