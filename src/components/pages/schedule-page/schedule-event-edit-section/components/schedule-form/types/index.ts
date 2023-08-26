export interface ScheduleEventFormFields {
  groupId: string;
  name: string;
  disciplineId: string;
  disciplineType: string;
  teachers: [string];
  startTime: string;
  endTime: string;
  period: string;
  url: string;
  disciplineInfo: string;
  eventInfo: string;
}
