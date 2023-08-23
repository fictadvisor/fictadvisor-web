import { AxiosError } from 'axios';
import { create } from 'zustand';
const WEEKS_ARRAY_SIZE = 24;
import { GetCurrentSemester } from '@/lib/api/dates/types/GetCurrentSemester';
import ScheduleAPI from '@/lib/api/schedule/ScheduleAPI';
import { GetEventBody } from '@/lib/api/schedule/types/GetEventBody';
import { getLastDayOfAWeek } from '@/store/schedule/utils/getLastDayOfAWeek';
import { TDiscipline } from '@/types/schedule';

import { findFirstOf5 } from './utils/findFirstOf5';
import { setUrlParams } from './utils/setUrlParams';
//TODO:ADD INITIAL STATE TO LOAD FROM LOCAL STORAGE

export interface Checkboxes {
  addLecture: boolean;
  addLaboratory: boolean;
  addPractice: boolean;
  otherEvents: boolean;
  isSelective?: boolean;
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
  semester?: GetCurrentSemester;
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
  setSemester: (_: GetCurrentSemester) => void;
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
  semester: undefined,
  handleGroupChange: async () => {
    await get().handleWeekChange();
  },
  handleWeekChange: async () => {
    get().setError(null);
    const isSelective = get().isSelective;
    const week = get().week;
    const eventBodies = get().eventsBody;

    const startWeek = findFirstOf5(week);

    if (!eventBodies[startWeek])
      isSelective
        ? await get().loadNext5Auth(startWeek)
        : await get().loadNext5(startWeek);
  },
  loadNext5Auth: async (week: number) => {
    get().setIsLoading(true);
    //WE FILTER PRACTICE LECTURE ETC ON FRONT-END SO DONT ADD FILTERS
    try {
      const [r1, r2, r3, r4, r5] = await Promise.all([
        ScheduleAPI.getEventsAuthorized(get().groupId, week, get().isSelective),
        ScheduleAPI.getEventsAuthorized(
          get().groupId,
          week + 1,
          get().isSelective,
        ),
        ScheduleAPI.getEventsAuthorized(
          get().groupId,
          week + 2,
          get().isSelective,
        ),
        ScheduleAPI.getEventsAuthorized(
          get().groupId,
          week + 3,
          get().isSelective,
        ),
        ScheduleAPI.getEventsAuthorized(
          get().groupId,
          week + 4,
          get().isSelective,
        ),
      ]);
      get().setIsLoading(false);

      const eventsBody = [...get().eventsBody];

      eventsBody[week - 1] = r1;
      eventsBody[week] = r2;
      eventsBody[week + 1] = r3;
      eventsBody[week + 2] = r4;
      eventsBody[week + 3] = r5;

      set(_ => ({ eventsBody: eventsBody }));
    } catch (error) {
      get().setIsLoading(false);
      get().setError(error as AxiosError);
    }
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
    setUrlParams('week', _week.toString());
    get().setChosenDay(
      getLastDayOfAWeek(get().semester as GetCurrentSemester, _week),
    );
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
      eventsBody: [],
    }));
    setUrlParams('group', id);
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
  setSemester(_semester: GetCurrentSemester) {
    set(_ => ({
      semester: _semester,
    }));
  },
}));
