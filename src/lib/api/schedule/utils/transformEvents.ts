import {
  GetEventBody,
  GetEventTransformedBody,
} from '@/lib/api/schedule/types/GetEventBody';

const MS_IN_DAY = 1000 * 60 * 60 * 24;
const MS_IN_WEEK = MS_IN_DAY * 7;
export function transformEvents({
  events,
  week,
  startTime,
}: GetEventBody): GetEventTransformedBody {
  const firstDayDate = new Date(startTime);
  const firstDayDateMs = firstDayDate.getTime();

  const resultedData: GetEventTransformedBody = {
    week: week,
    days: [],
  };

  let helperMs = firstDayDateMs;
  for (let i = 0; i < 7; i++) {
    const date = new Date(helperMs);
    resultedData.days.push({
      events: [],
      day: date,
    });
    helperMs += MS_IN_DAY;
  }

  for (const event of events) {
    const eventMs = new Date(event.startTime).getTime() - firstDayDateMs;
    const dateIndex = Math.floor((eventMs / MS_IN_WEEK) * 7);
    resultedData.days[dateIndex].events.push(event);
  }

  return resultedData;
}
