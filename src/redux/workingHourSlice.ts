import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Days } from '@/types/pages/working-hours';
import { RootState } from './store';

interface Meeting {
  start: string;
  end: string;
  hasError?: boolean;
}

const INITIAL_DAILY_MEETING: Meeting = {
  start: '09:00',
  end: '18:00',
};

interface workingHourState {
  isUpdated: boolean;
  isCollapsed: boolean;
  hasError: boolean;
  info: Record<Days, Meeting[]>;
  tempInfo: Record<Days, Meeting[]>;
}

const initialState: workingHourState = {
  isUpdated: false,
  isCollapsed: true,
  hasError: false,
  info: {
    Sunday: [INITIAL_DAILY_MEETING],
    Monday: [INITIAL_DAILY_MEETING],
    Tuesday: [INITIAL_DAILY_MEETING],
    Wednesday: [INITIAL_DAILY_MEETING],
    Thursday: [INITIAL_DAILY_MEETING],
    Friday: [INITIAL_DAILY_MEETING],
    Saturday: [INITIAL_DAILY_MEETING],
  },
  tempInfo: {
    Sunday: [INITIAL_DAILY_MEETING],
    Monday: [INITIAL_DAILY_MEETING],
    Tuesday: [INITIAL_DAILY_MEETING],
    Wednesday: [INITIAL_DAILY_MEETING],
    Thursday: [INITIAL_DAILY_MEETING],
    Friday: [INITIAL_DAILY_MEETING],
    Saturday: [INITIAL_DAILY_MEETING],
  },
};

const workingHourSlice = createSlice({
  name: 'workingHour',
  initialState,
  reducers: {
    addMeetings: (state, { payload }: PayloadAction<{ day: Days }>) => {
      const { day } = payload;
      state.isUpdated = true;
      state.tempInfo[day] = [...state.tempInfo[day], INITIAL_DAILY_MEETING];
    },
    deleteMeeting: (state, { payload }: PayloadAction<{ day: Days; idx: number }>) => {
      const { day, idx } = payload;
      state.isUpdated = true;
      state.tempInfo[day] = state.tempInfo[day].filter((_, i) => i !== idx);
    },
    setTime: (
      state,
      { payload }: PayloadAction<{ day: Days; idx: number; type: 'start' | 'end'; time: string }>
    ) => {
      const { day, idx, type, time } = payload;
      state.isUpdated = true;
      state.tempInfo[day][idx][type] = time;
    },
    toggleShow: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
    resetInfo: (state) => {
      state.tempInfo = { ...state.info };
    },
    updateInfo: (state) => {
      state.isUpdated = false;
      state.info = { ...state.tempInfo };
    },
    setError: (
      state,
      { payload }: PayloadAction<{ day: Days; idx: number; hasError: boolean }>
    ) => {
      const { day, idx, hasError } = payload;
      state.isUpdated = true;
      state.tempInfo[day][idx].hasError = hasError;
    },
  },
});

export const { toggleShow, addMeetings, deleteMeeting, setTime, resetInfo, updateInfo, setError } =
  workingHourSlice.actions;

export const hasError = (state: RootState) =>
  Object.values(state.workingHour.tempInfo)
    .map((meeting) => meeting.some(({ hasError }) => hasError))
    .some((bool) => bool);

export default workingHourSlice.reducer;
