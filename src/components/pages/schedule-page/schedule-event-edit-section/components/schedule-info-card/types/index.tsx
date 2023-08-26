export interface ScheduleEventResponse {
  id: string;
  name: string;
  disciplineType: string;
  startTime: string;
  endTime: string;
  url: string;
  eventInfo: string;
  disciplineInfo: string;
  teachers: [
    {
      id: string;
      firstName: string;
      middleName: string;
      lastName: string;
    },
  ];
}
