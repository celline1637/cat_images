import React, { useMemo } from 'react';
import DaySection from '../../components/pages/working-hours/DaySection';
import { useAppSelector, useAppDispatch } from '../../hooks/useRedux';
import { resetInfo, toggleShow, updateInfo } from '../../redux/workingHourSlice';
import * as S from './WorkingHours.styles';

export const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;

function WorkingHours() {
  const { isCollapsed, isUpdated, tempInfo } = useAppSelector((state) => state.workingHour);
  const dispatch = useAppDispatch();
  const hasError = useMemo(
    () =>
      Object.values(tempInfo)
        .map((meeting) => meeting.some(({ hasError }) => hasError))
        .some((bool) => bool),
    [tempInfo]
  );
  return (
    <S.Wrapper>
      <S.Title>Working hour</S.Title>
      <S.WeeklyHour>
        <S.SubTitle onClick={() => dispatch(toggleShow())}>Set your weekly hours</S.SubTitle>
        {isCollapsed && DAYS.map((day) => <DaySection key={day} day={day} />)}
        {isUpdated && (
          <S.ButtonGroup>
            <button className="sub" onClick={() => dispatch(resetInfo())}>
              Cancel
            </button>
            <button className="main" onClick={() => dispatch(updateInfo())} disabled={hasError}>
              Update
            </button>
          </S.ButtonGroup>
        )}
      </S.WeeklyHour>
    </S.Wrapper>
  );
}

export default WorkingHours;
