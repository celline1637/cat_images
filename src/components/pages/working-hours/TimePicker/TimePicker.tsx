import React, { useState } from 'react';
import { Days } from '../../../../types/pages/working-hours';
import { useAppDispatch } from '../../../../hooks/useRedux';
import { setTime } from '../../../../redux/workingHourSlice';
import { getTimeList } from '../../../../utils/getTimeList';
import * as S from './TimePicker.styles';

interface TimePickerProps {
  value: string;
  day: Days;
  type: 'start' | 'end';
  idx: number;
}

const TimePicker = ({ value, day, type, idx }: TimePickerProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <S.TimePickerWrapper>
      <S.TimePicker
        onClick={() => {
          setIsClicked((prev) => !prev);
        }}
      >
        {value}
      </S.TimePicker>
      {isClicked && (
        <S.Options>
          {getTimeList().map((time, i) => (
            <button
              key={time + i}
              value={time}
              onClick={() => {
                dispatch(
                  setTime({
                    day,
                    idx,
                    type,
                    time,
                  })
                );
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

export default TimePicker;
