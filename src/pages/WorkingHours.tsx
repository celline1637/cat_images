import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/useRedux';
import { addMeetings, deleteMeeting, toggleShow } from '../redux/workingHourSlice';
import * as S from './WorkingHours.styles';

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;

export type Days = (typeof DAYS)[number];

function WorkingHours() {
  const isCollapsed = useAppSelector((state) => state.workingHour.isCollapsed);
  const dispatch = useAppDispatch();
  return (
    <S.Wrapper>
      <S.Title>Working hour</S.Title>
      <S.WeeklyHour>
        <S.SubTitle onClick={() => dispatch(toggleShow())}>Set your weekly hours</S.SubTitle>
        {isCollapsed && DAYS.map((day) => <DaySection key={day} day={day} />)}
        <S.ButtonGroup>
          <button className="sub">Cancel</button>
          <button className="main" disabled>
            Update
          </button>
        </S.ButtonGroup>
      </S.WeeklyHour>
    </S.Wrapper>
  );
}

const getTimeList = () => {
  const time = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j <= 45; j += 15) {
      time.push(`${i.toString().padStart(2, '0')}:${j.toString().padStart(2, '0')}`);
    }
  }
  return time;
};

const DaySection = ({ day }) => {
  const { weeklyMeetings } = useAppSelector((state) => state.workingHour);
  const dispatch = useAppDispatch();
  const meetings = weeklyMeetings[day];
  return (
    <S.DaySection>
      <S.Day>{day}</S.Day>
      <S.Meetings>
        {meetings.length === 0 && (
          <S.Meeting>
            <S.Button onClick={() => dispatch(addMeetings({ day }))}>Add</S.Button>
          </S.Meeting>
        )}
        {meetings.map(({ start, end }, i) => (
          <S.Meeting key={i}>
            <TimePicker value={start} />
            <S.Divider>-</S.Divider>
            <TimePicker value={end} />
            <S.Button onClick={() => dispatch(deleteMeeting({ day, idx: i }))}>Delete</S.Button>
            {meetings.length === i + 1 && (
              <S.Button onClick={() => dispatch(addMeetings({ day }))}>Add</S.Button>
            )}
          </S.Meeting>
        ))}
      </S.Meetings>
    </S.DaySection>
  );
};
interface TimePickerProps {
  value: string;
}

const TimePicker = ({ value }: TimePickerProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [time, setTime] = useState(value);

  return (
    <S.TimePickerWrapper>
      <S.TimePicker
        onClick={() => setIsClicked((prev) => !prev)}
        onBlur={() => setIsClicked((prev) => !prev)}
      >
        {time}
      </S.TimePicker>
      {isClicked && (
        <S.Options>
          {getTimeList().map((time, i) => (
            <button
              key={time + i}
              value={time}
              onClick={({ currentTarget }) => {
                setTime(currentTarget.value);
                setIsClicked((prev) => !prev);
              }}
            >
              {time}
            </button>
          ))}
        </S.Options>
      )}
    </S.TimePickerWrapper>
  );
};

export default WorkingHours;
