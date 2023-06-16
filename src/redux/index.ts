import { configureStore } from '@reduxjs/toolkit';

import AlertReducer from '@/redux/reducers/alert.reducer';
import ScheduleReducer from '@/redux/reducers/schedule.reducer';
export const store = configureStore({
  reducer: {
    alert: AlertReducer,
    schedule: ScheduleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
