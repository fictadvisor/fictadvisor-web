import { useEffect } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { create } from 'zustand';

import useAuthentication from '@/hooks/use-authentication';
import useToast from '@/hooks/use-toast';
import { GetCurrentSemester } from '@/lib/api/dates/types/GetCurrentSemester';
import ScheduleAPI from '@/lib/api/schedule/ScheduleAPI';
import { GetEventBody } from '@/lib/api/schedule/types/GetEventBody';
import { getCurrentWeek } from '@/store/schedule/utils/getCurrentWeek';
import { getLastDayOfAWeek } from '@/store/schedule/utils/getLastDayOfAWeek';
import { getWeekByDate } from '@/store/schedule/utils/getWeekByDate';
import { Group } from '@/types/group';
import { TDiscipline } from '@/types/schedule';
import { Event } from '@/types/schedule';

import { findFirstOf5 } from './utils/findFirstOf5';
import { setUrlParams } from './utils/setUrlParams';

const WEEKS_ARRAY_SIZE = 24;
const MAX_WEEK_NUMBER = 20;
//TODO:ADD INITIAL STATE TO LOAD FROM LOCAL STORAGE

export interface Checkboxes extends Record<string, boolean | undefined> {
  addLecture: boolean;
  addLaboratory: boolean;
  addPractice: boolean;
  otherEvents: boolean;
  isSelective?: boolean;
}

const checkboxesInitialValues: Checkboxes = {
  addLecture: true,
  addLaboratory: true,
  addPractice: true,
  otherEvents: true,
  isSelective: true,
};

const CheckboxesMapper: Record<string, (TDiscipline | null)[]> = {
  addLecture: [TDiscipline.LECTURE],
  addLaboratory: [TDiscipline.LABORATORY],
  addPractice: [TDiscipline.PRACTICE],
  otherEvents: [
    TDiscipline.CONSULTATION,
    TDiscipline.EXAM,
    TDiscipline.WORKOUT,
    null,
  ],
};

type State = {
  checkboxes: Checkboxes;
  semester?: GetCurrentSemester;
  isSelective: boolean;
  disciplineTypes: (TDiscipline | null)[];
  week: number;
  groupId: string;
  eventsBody: GetEventBody[];
  isNewEventAdded: boolean;
  openedEvent?: Event;
  currentTime: Date;
  chosenDay: Date | null;
  isLoading: boolean;
  error: null | AxiosError;
  isUsingSelective: boolean;
};

type Action = {
  loadNext5Auth: (week: number) => Promise<void>;
  setWeek: (week: number) => void;
  updateDisciplineTypes: (discipline: Checkboxes) => void;
  setGroupId: (id: string) => void;
  handleWeekChange: () => Promise<void>;
  handleGroupChange: () => Promise<void>;
  setIsNewEventAdded: (isAdded: boolean) => void;
  setDate: (newDate: Date) => void;
  setChosenDay: (newDate: Date) => void;
  loadNext5: (startWeek: number) => Promise<void>;
  setIsLoading: (_: boolean) => void;
  setError: (_: AxiosError | null) => void;
  setIsSelective: (_: boolean) => void;
  useInitialise: (semester: GetCurrentSemester | null, groups: Group[]) => void;
};

export const useSchedule = create<State & Action>((set, get) => {
  return {
    openedEvent: undefined,
    checkboxes: checkboxesInitialValues,
    isSelective: false,
    error: null,
    isLoading: false,
    currentTime: new Date(),
    isNewEventAdded: false,
    disciplineTypes: [
      TDiscipline.LECTURE,
      TDiscipline.PRACTICE,
      TDiscipline.LABORATORY,
    ],
    week: 1,
    groupId: '',
    eventsBody: new Array(WEEKS_ARRAY_SIZE),
    chosenDay: null,
    semester: undefined,
    isUsingSelective: false,
    handleGroupChange: async () => {
      await get().handleWeekChange();
    },
    handleWeekChange: async () => {
      get().setError(null);

      const week = get().week;
      const eventBodies = get().eventsBody;
      const startWeek = findFirstOf5(week);

      if (!eventBodies[startWeek])
        get().isUsingSelective
          ? await get().loadNext5Auth(startWeek)
          : await get().loadNext5(startWeek);
    },
    loadNext5Auth: async (week: number) => {
      console.log('loading selective events');
      get().setIsLoading(true);
      const selective = get().isSelective;
      //WE FILTER PRACTICE LECTURE ETC ON FRONT-END SO DONT ADD FILTERS
      try {
        const [r1, r2, r3, r4, r5] = await Promise.all([
          ScheduleAPI.getEventsAuthorized(get().groupId, week, selective),
          ScheduleAPI.getEventsAuthorized(get().groupId, week + 1, selective),
          ScheduleAPI.getEventsAuthorized(get().groupId, week + 2, selective),
          ScheduleAPI.getEventsAuthorized(get().groupId, week + 3, selective),
          ScheduleAPI.getEventsAuthorized(get().groupId, week + 4, selective),
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

    updateDisciplineTypes(disciplines) {
      const _disciplineTypes: (TDiscipline | null)[] = [];

      for (const [key, value] of Object.entries(disciplines)) {
        if (value && key !== 'isSelective') {
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
      // get().setChosenDay(
      //   getLastDayOfAWeek(get().semester as GetCurrentSemester, _week),
      // );
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
      get().setWeek(
        getWeekByDate(get().semester as GetCurrentSemester, newDate),
      );
    },
    setIsSelective(_isSelective: boolean) {
      const isUpdating = _isSelective !== get().isSelective;
      set(_ => ({
        isSelective: _isSelective,
        eventsBody: new Array<GetEventBody>(WEEKS_ARRAY_SIZE),
      }));
      if (isUpdating) get().handleWeekChange();
    },
    useInitialise(semester, groups) {
      const { user } = useAuthentication();
      const router = useRouter();
      const toast = useToast();

      useEffect(() => {
        const interval = setInterval(() => {
          get().setDate(new Date());
        }, 1000 * 60);

        return () => clearInterval(interval);
      });

      useEffect(() => {
        if (!router.isReady || !semester) return;
        useSchedule.setState(state => ({ semester: semester }));

        const { group: urlGroup, week: urlWeek } = router.query;
        const isGroupValid = groups.some(_group => _group.id === urlGroup);
        const isWeekValid =
          urlWeek && +urlWeek > 0 && +urlWeek < MAX_WEEK_NUMBER;

        const week = isWeekValid
          ? +urlWeek
          : Math.min(getCurrentWeek(semester), MAX_WEEK_NUMBER);

        if (!isGroupValid) {
          router.push('/schedule');
          const storageGroup = localStorage.getItem('scheduleChosenGroupId');
          if (storageGroup) set(state => ({ groupId: storageGroup }));
          else toast.info('Оберіть групу');
        } else set(state => ({ groupId: urlGroup as string }));

        const isUsingSelective = user && user.group?.id === get().groupId;
        set(state => ({ isUsingSelective }));

        if (isUsingSelective)
          get().updateDisciplineTypes(checkboxesInitialValues);

        get().setChosenDay(
          getLastDayOfAWeek(get().semester as GetCurrentSemester, week),
        );
      }, [router.isReady]);
    },
  };
});
