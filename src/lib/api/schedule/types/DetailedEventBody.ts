import { Event, TDiscipline } from '@/types/schedule';

export interface DetailedEventBody extends Omit<Event, 'disciplineType'> {
  url: string;
  eventInfo: string;
  disciplineType: TDiscipline;
  disciplineInfo: string;
  teachers: {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
  }[];
}
