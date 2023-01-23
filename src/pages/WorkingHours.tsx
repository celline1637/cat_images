import React, { useState } from 'react';
import { setOriginalNode } from 'typescript';
import * as S from './WorkingHours.styles';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function WorkingHours() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <S.Wrapper>
      <S.Title>Working hour</S.Title>
      <S.WeeklyHour>
        <S.SubTitle onClick={() => setIsCollapsed((prev) => !prev)}>
          Set your weekly hours
        </S.SubTitle>
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

interface Meeting {
  start: string;
  end: string;
}

const INITIAL_VALUE = {
  start: '09:00',
  end: '18:00',
};

const DaySection = ({ day }) => {
  const [meetings, setMeetings] = useState<Meeting[]>([INITIAL_VALUE]);

  const addMeeting = () => {
    setMeetings((prev) => [...prev, INITIAL_VALUE]);
  };

  const deleteMeeting = (deleteIdx: number) => {
    setMeetings((prev) => prev.filter((_, i) => i !== deleteIdx));
  };

  return (
    <S.DaySection>
      <S.Day>{day}</S.Day>
      <S.Meetings>
        {meetings.length === 0 && (
          <S.Meeting>
            <S.Button onClick={addMeeting}>Add</S.Button>
          </S.Meeting>
        )}
        {meetings.map(({ start, end }, i) => (
          <S.Meeting key={i}>
            <TimePicker value={start} />
            <S.Divider>-</S.Divider>
            <TimePicker value={end} />
            <S.Button onClick={() => deleteMeeting(i)}>Delete</S.Button>
            {meetings.length === i + 1 && <S.Button onClick={addMeeting}>Add</S.Button>}
          </S.Meeting>
        ))}
      </S.Meetings>
    </S.DaySection>
  );
};
interface TimePickerProps {
  value: string;
}

const OPTIONS = [
  '09:00',
  '09:15',
  '09:30',
  '09:45',
  '10:00',
  '09:00',
  '09:15',
  '09:30',
  '09:45',
  '10:00',
];
const TimePicker = ({ value }: TimePickerProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [time, setTime] = useState(value);

  return (
    <S.TimePickerWrapper
      onBlur={() => {
        console.log('blur');
      }}
    >
      <S.TimePicker
        onClick={() => setIsClicked((prev) => !prev)}
        onBlur={() => setIsClicked((prev) => !prev)}
      >
        {time}
      </S.TimePicker>
      {isClicked && (
        <S.Options>
          {OPTIONS.map((time, i) => (
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
