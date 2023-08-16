import { create } from 'zustand';

import { GetEventBody } from '@/lib/api/schedule/types/GetEventBody';
import { Event, TDiscipline } from '@/types/schedule';

//TODO:ADD INITIAL STATE TO LOAD FROM LOCAL STORAGE

type State = {
  disciplineType?: TDiscipline[];
  week: number;
  groupId: string;
  eventsBody: GetEventBody[];
  isNewEventAdded: boolean;
  currentTime: Date;
  chosenDay: Date;
};

type Action = {
  setWeek: (week: number) => void;
  setDiscipline: (discipline: TDiscipline[]) => void;
  setGroupId: (id: string) => void;
  addEventBody: (_eventsBody: GetEventBody) => void;
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
  eventsBody: [],
  chosenDay: new Date(),

  addEventBody(_eventsBody: GetEventBody) {
    set(_ => ({
      eventsBody: [...(get().eventsBody as GetEventBody[]), _eventsBody],
    }));
  },
  /*
   * This method is error prone
   * */
  deleteEvent(eventId: string) {
    const allEventBodies = [...get().eventsBody];
    const currentEventBody = allEventBodies[get().week - 1];
    currentEventBody.events = currentEventBody.events.filter(
      _event => _event.id !== eventId,
    );

    set(_ => ({
      eventsBody: allEventBodies,
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
