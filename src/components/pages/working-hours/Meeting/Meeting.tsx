import { useAppDispatch } from '../../../../hooks/useRedux';
import { addMeetings, deleteMeeting, setError } from '../../../../redux/workingHourSlice';
import { checkTimeValidation } from '../../../../utils/checkTimeValidation';
import React, { useMemo, useEffect } from 'react';
import TimePicker from '../TimePicker';
import * as S from './Meeting.styles';

const Meeting = ({ day, idx, start, end, isLast }) => {
  const dispatch = useAppDispatch();
  const hasError = useMemo(() => {
    return !checkTimeValidation(start, end);
  }, [end, start]);

  useEffect(() => {
    dispatch(setError({ day, idx, hasError }));
  }, [day, dispatch, hasError, idx]);

  return (
    <S.Meeting>
      <S.Info>
        <TimePicker type="start" day={day} idx={idx} value={start} />
        <S.Divider>-</S.Divider>
        <TimePicker type="end" day={day} idx={idx} value={end} />
        <S.Button onClick={() => dispatch(deleteMeeting({ day, idx }))}>Delete</S.Button>
        {isLast && <S.Button onClick={() => dispatch(addMeetings({ day }))}>Add</S.Button>}
      </S.Info>
      {hasError && <S.ErrorGuide>Please check the end of time</S.ErrorGuide>}
    </S.Meeting>
  );
};

export default Meeting;
