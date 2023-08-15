import { create } from 'zustand';

import { Event, TDiscipline } from '@/types/schedule';

type State = {
  disciplineType?: TDiscipline[];
  week: number;
  groupId: string;
  events: Event[];
  isNewEventAdded: boolean;
  currentTime: Date;
};

type Action = {
  setWeek: (week: number) => void;
  setDiscipline: (discipline: TDiscipline[]) => void;
  setGroupId: (id: string) => void;
  setEvents: (events: Event[]) => void;
  setIsNewEventAdded: (isAdded: boolean) => void;
  deleteEvent: (eventId: string) => void;
  setDate: (newDate: Date) => void;
};

export const useSchedule = create<State & Action>((set, get) => ({
  currentTime: new Date(),
  isNewEventAdded: false,
  disciplineType: undefined,
  week: 1,
  groupId: '',
  events: [],
  setEvents(_events: Event[]) {
    set(_ => ({
      events: _events,
    }));
  },
  deleteEvent(eventId: string) {
    set(_ => ({
      events: get().events.filter(event => event.id !== eventId),
    }));
  },
  setDiscipline(disciplines: TDiscipline[]) {
    set(_ => ({
      disciplineType: disciplines,
    }));
  },
  setWeek(_week: number) {
    set(_ => ({
      week: _week,
    }));
  },
  setGroupId(id: string) {
    set(_ => ({
      groupId: id,
    }));
  },
  setIsNewEventAdded(isAdded: boolean) {
    set(_ => ({
      isNewEventAdded: isAdded,
    }));
  },
  setDate(newDate: Date) {
    set(_ => ({
      currentTime: newDate,
    }));
  },
}));
