import { Event } from '@/types/schedule';

export interface GetEventBody {
  startTime: string;
  week: string;
  events: Event[];
}

export interface GetEventTransformedBody {
  week: string;
  days: {
    day: Date;
    events: (Event | Event[])[];
  }[];
}
