import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScheduleStore {
  date: Date;
  groupId: string;
  categories: ('selective' | 'lection' | 'practice' | 'labratory' | 'other')[];
  tab: 'student' | 'session' | 'teacher';
}

const initialState: ScheduleStore = {
  date: new Date(),
  groupId: '',
  categories: ['lection'],
  tab: 'student',
};

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    setCategories: (
      state,
      { payload }: PayloadAction<ScheduleStore['categories']>,
    ) => {
      state.categories = payload;
    },
    setGroupId: (
      state,
      { payload }: PayloadAction<ScheduleStore['groupId']>,
    ) => {
      state.groupId = payload;
    },
    setDate: (state, { payload }: PayloadAction<ScheduleStore['date']>) => {
      state.date = payload;
    },
    setTab: (state, { payload }: PayloadAction<ScheduleStore['tab']>) => {
      state.tab = payload;
    },
  },
});

export default scheduleSlice.reducer;

export const { setCategories, setGroupId, setDate, setTab } =
  scheduleSlice.actions;
