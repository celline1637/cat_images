import styled from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnSet('flex-start', 'flex-start')};
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  padding: 2rem;

  @media screen and (min-width: 768px) {
    ${({ theme }) => theme.flexRowSet('flex-start', 'flex-start')};
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const Title = styled.h1`
  width: 100%;
  padding: 0.3rem 1rem;
  ${({ theme }) => theme.textSet('title', true)};

  @media screen and (min-width: 768px) {
    width: 20%;
    padding: 1rem;
  }
`;

export const WeeklyHour = styled.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  padding: 1rem 0;
  ${({ theme }) => theme.flexRowSet('flex-end')};
  gap: 1rem;
  & > button {
    padding: 0.6rem 1.2rem;

    border-radius: 4px;
    ${({ theme }) => theme.textSet('subtitle', true)};
    &:disabled {
      color: ${({ theme }) => theme.colors.grey400};
    }
    &.main {
      background-color: ${({ theme }) => theme.colors.primary200};
      color: ${({ theme }) => theme.colors.white};
    }
    &.sub {
      background-color: none;
      color: ${({ theme }) => theme.colors.grey400};
    }
  }
`;

export const SubTitle = styled.h2`
  padding: 1rem;
  ${({ theme }) => theme.textSet('title', true)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey400};
`;

export const DaySection = styled.div`
  ${({ theme }) => theme.flexRowSet('flex-start', 'flex-start')};
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey400};
`;

export const Day = styled.div`
  width: 120px;
  padding: 12px 20px;
  ${({ theme }) => theme.textSet('subtitle')};
`;

export const Meetings = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  gap: 0.6rem;
`;

export const Meeting = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexRowSet('flex-start')};
  gap: 1rem;
`;

export const TimePickerWrapper = styled.div`
  position: relative;
  height: 33px;
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

export const Button = styled.button`
  padding: 12px 20px;
`;
