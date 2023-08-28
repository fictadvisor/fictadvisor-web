import { DetailedEventBody } from '@/lib/api/schedule/types/DetailedEventBody';
import { SharedEventBody } from '@/lib/api/schedule/types/shared';

export const transformDetailedEvent = (
  event: DetailedEventBody,
): SharedEventBody => {
  const resultedEvent: SharedEventBody = JSON.parse(JSON.stringify(event));

  resultedEvent.disciplineId = event.id;
  resultedEvent.teachers = event.teachers.map(teacher => teacher.id);

  return resultedEvent;
};
