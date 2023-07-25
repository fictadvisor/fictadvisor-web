const calculateHeight = (startTime: string, endTime: string): string => {
  if (startTime && endTime) {
    const start = new Date(`2023-07-18 ${startTime}`);
    const end = new Date(`2023-07-18 ${endTime}`);

    const difference = end.getTime() - start.getTime();
    const minutes = difference / 60000;
    return `${minutes * 1.4}px`;
  }
  return '100%';
};

export default calculateHeight;
