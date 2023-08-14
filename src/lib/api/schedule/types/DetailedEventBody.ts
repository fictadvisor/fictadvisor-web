import { Event } from '@/types/schedule';

export interface DetailedEventBody extends Event {
  url: string;
  eventInfo: string;
  disciplineInfo: string;
  teachers: {
    id: string;
    firstName: string;
    middleName: string;
    lastName: string;
  }[];
}
