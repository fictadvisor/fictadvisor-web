import { Event } from '@/types/schedule';

export interface GetEventBody {
  week: string;
  events: Event[];
}
