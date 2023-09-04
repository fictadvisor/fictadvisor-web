import { GetCurrentSemester } from '@/lib/api/dates/types/GetCurrentSemester';

export const getWeekByDate = (
  semester: GetCurrentSemester,
  date: Date,
): number => {
  const delta = date.getTime() - new Date(semester.startDate).getTime();
  const decimalWeek = delta / (1000 * 60 * 60 * 24 * 7);
  const week = Math.ceil(decimalWeek % 1 === 0 ? decimalWeek + 1 : decimalWeek);

  return week;
};
