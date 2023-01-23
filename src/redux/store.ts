import { configureStore } from '@reduxjs/toolkit';
import workingHourSlice from './workingHourSlice';

export const store = configureStore({
  reducer: {
    workingHour: workingHourSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
