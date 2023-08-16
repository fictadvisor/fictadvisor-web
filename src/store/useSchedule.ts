import { create } from 'zustand';

import { GetEventBody } from '@/lib/api/schedule/types/GetEventBody';
import { Event, TDiscipline } from '@/types/schedule';

//TODO:ADD INITIAL STATE TO LOAD FROM LOCAL STORAGE

type State = {
  disciplineType?: TDiscipline[];
  week: number;
  groupId: string;
  eventsBody: GetEventBody | null;
  isNewEventAdded: boolean;
  currentTime: Date;
  chosenDay: Date;
};

type Action = {
  setWeek: (week: number) => void;
  setDiscipline: (discipline: TDiscipline[]) => void;
  setGroupId: (id: string) => void;
  setEventsBody: (_eventsBody: GetEventBody) => void;
  setIsNewEventAdded: (isAdded: boolean) => void;
  deleteEvent: (eventId: string) => void;
  setDate: (newDate: Date) => void;
  setChosenDay: (newDate: Date) => void;
};

export const useSchedule = create<State & Action>((set, get) => ({
  currentTime: new Date(),
  isNewEventAdded: false,
  disciplineType: undefined,
  week: 1,
  groupId: '',
  eventsBody: null,
  chosenDay: new Date(),

  setEventsBody(_eventsBody: GetEventBody) {
    set(_ => ({
      eventsBody: _eventsBody,
    }));
  },
  deleteEvent(eventId: string) {
    set(_ => ({
      eventsBody: {
        ...get().eventsBody,
        events: get().eventsBody?.events.filter(event => event.id !== eventId),
      } as GetEventBody,
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
  setChosenDay(newDate: Date) {
    set(_ => ({
      currentTime: newDate,
    }));
  },
}));
