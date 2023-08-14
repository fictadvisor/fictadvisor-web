import { create } from 'zustand';

import { Event, TDiscipline } from '@/types/schedule';

type State = {
  disciplineType?: TDiscipline;
  week: number;
  groupId: string;
  events: Event[];
};

type Action = {
  setWeek: (week: number) => void;
  setDiscipline: (discipline: TDiscipline) => void;
  setGroupId: (id: string) => void;
  setEvents: (events: Event[]) => void;
};

export const useSchedule = create<State & Action>((set, get) => ({
  disciplineType: undefined,
  week: 1,
  groupId: '',
  events: [],
  setEvents(_events: Event[]) {
    set(state => ({
      events: _events,
    }));
  },
  setDiscipline(discipline: TDiscipline) {
    set(state => ({
      disciplineType: discipline,
    }));
  },
  setWeek(_week: number) {
    set(state => ({
      week: _week,
    }));
  },
  setGroupId(id: string) {
    set(state => ({
      groupId: id,
    }));
  },
}));
