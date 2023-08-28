export interface ScheduleEventFormFields {
  groupId: string;
  name: string;
  disciplineId: string;
  disciplineType: string;
  //teachers:  [string] - cringe, it is a tuple with 1 string element; string[] - based, array of stringsS;
  startTime: string;
  endTime: string;
  period: string;
  url: string;
  disciplineInfo: string;
  eventInfo: string;
}
