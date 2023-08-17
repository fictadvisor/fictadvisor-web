import { AxiosError } from 'axios';
import { create } from 'zustand';
const WEEKS_ARRAY_SIZE = 24;
import ScheduleAPI from '@/lib/api/schedule/ScheduleAPI';
import { GetEventBody } from '@/lib/api/schedule/types/GetEventBody';
import { TDiscipline } from '@/types/schedule';

//TODO:ADD INITIAL STATE TO LOAD FROM LOCAL STORAGE

export interface Checkboxes {
  addLecture: boolean;
  addLaboratory: boolean;
  addPractice: boolean;
  otherEvents: boolean;
}

const CheckboxesMapper: Record<string, TDiscipline[]> = {
  addLecture: [TDiscipline.LECTURE],
  addLaboratory: [TDiscipline.LABORATORY],
  addPractice: [TDiscipline.PRACTICE],
  otherEvents: [
    TDiscipline.CONSULTATION,
    TDiscipline.EXAM,
    TDiscipline.WORKOUT,
  ],
};

type State = {
  isSelective: boolean;
  disciplineTypes?: TDiscipline[];
  week: number;
  groupId: string;
  eventsBody: GetEventBody[];
  isNewEventAdded: boolean;
  currentTime: Date;
  chosenDay: Date | null;
  isLoading: boolean;
  error: null | AxiosError;
};

type Action = {
  loadNext5Auth: (week: number) => Promise<void>;
  setWeek: (week: number) => void;
  updateDisciplineTypes: (discipline: Checkboxes) => void;
  setGroupId: (id: string) => void;

  handleWeekChange: () => Promise<void>;
  handleGroupChange: () => Promise<void>;
  setIsNewEventAdded: (isAdded: boolean) => void;
  deleteEvent: (eventId: string) => void;
  setDate: (newDate: Date) => void;
  setChosenDay: (newDate: Date) => void;
  loadNext5: (startWeek: number) => Promise<void>;
  setIsLoading: (_: boolean) => void;
  setError: (_: AxiosError | null) => void;
  setIsSelective: (_: boolean) => void;
};

export const useSchedule = create<State & Action>((set, get) => ({
  isSelective: false,
  error: null,
  isLoading: false,
  currentTime: new Date(),
  isNewEventAdded: false,
  disciplineType: undefined,
  week: 1,
  groupId: '',
  eventsBody: new Array(WEEKS_ARRAY_SIZE),
  chosenDay: null,
  handleGroupChange: async () => {
    await get().handleWeekChange();
  },
  handleWeekChange: async () => {
    get().setError(null);
    const isSelective = get().isSelective;
    const week = get().week;
    const eventBodies = get().eventsBody;
    if (week >= 1 && week <= 5 && !eventBodies[1]) {
      isSelective ? await get().loadNext5Auth(1) : await get().loadNext5(1);
    } else if (week >= 6 && week <= 10 && !eventBodies[6]) {
      isSelective ? await get().loadNext5Auth(6) : await get().loadNext5(6);
    } else if (week >= 11 && week <= 15 && !eventBodies[11]) {
      isSelective ? await get().loadNext5Auth(11) : await get().loadNext5(11);
    } else if (week >= 16 && week <= 20 && !eventBodies[16]) {
      isSelective ? await get().loadNext5Auth(16) : await get().loadNext5(16);
    }
  },
  loadNext5Auth: async (startWeek: number) => {
    //TODO:implement loadNext5 for authorized users
  },
  loadNext5: async (startWeek: number) => {
    get().setIsLoading(true);
    //WE FILTER PRACTICE LECTURE ETC ON FRONT-END SO DONT ADD FILTERS
    try {
      const [r1, r2, r3, r4, r5] = await Promise.all([
        ScheduleAPI.getEvents(get().groupId, startWeek),
        ScheduleAPI.getEvents(get().groupId, startWeek + 1),
        ScheduleAPI.getEvents(get().groupId, startWeek + 2),
        ScheduleAPI.getEvents(get().groupId, startWeek + 3),
        ScheduleAPI.getEvents(get().groupId, startWeek + 4),
      ]);
      get().setIsLoading(false);

      const eventsBody = [...get().eventsBody];

      eventsBody[startWeek - 1] = r1;
      eventsBody[startWeek] = r2;
      eventsBody[startWeek + 1] = r3;
      eventsBody[startWeek + 2] = r4;
      eventsBody[startWeek + 3] = r5;

      set(_ => ({ eventsBody: eventsBody }));
    } catch (error) {
      get().setIsLoading(false);
      get().setError(error as AxiosError);
    }
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
  updateDisciplineTypes(disciplines) {
    const _disciplineTypes: TDiscipline[] = [];

    for (const [key, value] of Object.entries(disciplines)) {
      if (value) {
        _disciplineTypes.push(...CheckboxesMapper[key]);
      }
    }

    set(_ => ({
      disciplineTypes: _disciplineTypes,
    }));
  },
  setWeek(_week: number) {
    set(_ => ({
      week: _week,
    }));
    get().handleWeekChange();
  },
  setIsLoading(loading: boolean) {
    set(_ => ({
      isLoading: loading,
    }));
  },
  setError: (_error: AxiosError | null) => {
    set(_ => ({
      error: _error,
    }));
  },
  setGroupId(id: string) {
    set(_ => ({
      groupId: id,
    }));
    get().handleGroupChange();
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
      chosenDay: newDate,
    }));
  },
  setIsSelective(_isSelective: boolean) {
    set(_ => ({
      isSelective: _isSelective,
      eventsBody: new Array(WEEKS_ARRAY_SIZE),
    }));
    if (_isSelective !== get().isSelective) get().handleWeekChange();
  },
}));
