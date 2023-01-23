import styled from 'styled-components';

export const TimePickerWrapper = styled.div`
  position: relative;
  height: 33px;
  cursor: pointer;
`;

export const TimePicker = styled.div`
  ${({ theme }) => theme.flexRowSet('space-between')};
  width: 150px;
  padding: 0.4rem 1rem;
  ${({ theme }) => theme.textSet('body1')};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
`;

export const Options = styled.div`
  ${({ theme }) => theme.flexColumnSet('flex-start')};
  width: 150px;
  height: 202px;
  padding: 0.4rem;
  position: absolute;
  bottom: -204px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  overflow: auto;
  z-index: 1;
  box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
    & > button {
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.grey200};
    }
  }
`;

export const Divider = styled.div`
  padding: 0 0.4rem;
`;
