import { create } from 'zustand';

import { Event, TDiscipline } from '@/types/schedule';

type State = {
  disciplineType?: TDiscipline;
  week: number;
  groupId: string;
};

type Action = {
  setWeek: (week: number) => void;
  setDiscipline: (discipline: TDiscipline) => void;
  setGroupId: (id: string) => void;
};

export const useSchedule = create<State & Action>((set, get) => ({
  disciplineType: undefined,
  week: 1,
  groupId: '',

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
