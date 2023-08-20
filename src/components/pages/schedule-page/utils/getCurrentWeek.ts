import { GetCurrentSemester } from '@/lib/api/dates/types/GetCurrentSemester';
export const getCurrentWeek = (semester: GetCurrentSemester) => {
  const startDateMs = new Date(semester.startDate).getTime();
  const nowDateMs = new Date().getTime();

  const weekFloating = (nowDateMs - startDateMs) / (1000 * 60 * 60 * 24 * 7);

  const currentWeek = Math.ceil(weekFloating);

  return currentWeek;
};

export const getLastDayOfAWeek = (
  semester: GetCurrentSemester,
  week: number,
): Date => {
  const startDate = new Date(semester.startDate);

  const startWeekDate = new Date(startDate);
  startWeekDate.setDate(startDate.getDate() + (1 - startDate.getDay()));

  const lastDayOfWeek = new Date(startWeekDate);
  lastDayOfWeek.setDate(startWeekDate.getDate() + (week - 1) * 7 + 6);

  return lastDayOfWeek;
};
