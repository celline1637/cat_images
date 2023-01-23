import { useAppDispatch, useAppSelector } from '../../../../hooks/useRedux';
import { addMeetings } from '../../../../redux/workingHourSlice';
import React from 'react';
import Meeting from '../Meeting';
import * as S from './DaySection.styles';

const DaySection = ({ day }) => {
  const { info, tempInfo, isUpdated } = useAppSelector((state) => state.workingHour);
  const dispatch = useAppDispatch();
  const meetings = isUpdated ? tempInfo[day] : info[day];

  return (
    <S.DaySection>
      <S.Day>{day}</S.Day>
      <S.Meetings>
        {meetings.length === 0 && (
          <S.Meeting>
            <S.Button onClick={() => dispatch(addMeetings({ day }))}>Add</S.Button>
          </S.Meeting>
        )}
        {meetings.map(({ start, end }, i: number) => (
          <Meeting
            key={i + day}
            day={day}
            idx={i}
            start={start}
            end={end}
            isLast={meetings.length === i + 1}
          />
        ))}
      </S.Meetings>
    </S.DaySection>
  );
};

export default DaySection;
