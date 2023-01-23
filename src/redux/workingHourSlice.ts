import { Days } from '@/pages/WorkingHours';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Meeting {
  start: string;
  end: string;
}

const INITIAL_DAILY_MEETING: Meeting = {
  start: '09:00',
  end: '18:00',
};

interface workingHourState {
  isUpdated: boolean;
  isCollapsed: boolean;
  weeklyMeetings: Record<Days, Meeting[]>;
}

const initialState: workingHourState = {
  isUpdated: false,
  isCollapsed: true,
  weeklyMeetings: {
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
      state.weeklyMeetings[day] = [...state.weeklyMeetings[day], INITIAL_DAILY_MEETING];
    },
    deleteMeeting: (state, { payload }: PayloadAction<{ day: Days; idx: number }>) => {
      const { day, idx } = payload;
      state.weeklyMeetings[day] = state.weeklyMeetings[day].filter((_, i) => i !== idx);
    },
    toggleShow: (state) => {
      state.isCollapsed = !state.isCollapsed;
    },
  },
});

export const { toggleShow, addMeetings, deleteMeeting } = workingHourSlice.actions;

export default workingHourSlice.reducer;
