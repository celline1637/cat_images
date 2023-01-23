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

export const SubTitle = styled.h2`
  padding: 1rem;
  ${({ theme }) => theme.textSet('title', true)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey200};
  cursor: pointer;
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
    &.main {
      background-color: ${({ theme }) => theme.colors.primary200};
      color: ${({ theme }) => theme.colors.white};
    }
    &.sub {
      background-color: none;
      color: ${({ theme }) => theme.colors.grey400};
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.grey400};
      cursor: not-allowed;
    }
  }
`;
