import styled from 'styled-components';

export const DaySection = styled.div`
  ${({ theme }) => theme.flexRowSet('flex-start', 'flex-start')};
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey200};
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
  ${({ theme }) => theme.flexColumnSet('flex-start', 'flex-start')};
  gap: 0.4rem;
`;

export const Button = styled.button`
  padding: 12px 20px;
`;
