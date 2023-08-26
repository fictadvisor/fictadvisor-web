export const calctulateTop = (startTime: string): string => {
  if (startTime) {
    const date = new Date(startTime);
    const minutes = date.getHours() * 60 + date.getMinutes() - 7 * 60;
    return `${(minutes / 60) * 84}px`;
  }
  return '0px';
};
