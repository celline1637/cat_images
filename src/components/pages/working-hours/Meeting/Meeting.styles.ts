import styled from 'styled-components';

export const Meeting = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexColumnSet('flex-start', 'flex-start')};
  gap: 0.2rem;
`;

export const Info = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexRowSet('flex-start')};
  gap: 1rem;
`;

export const Divider = styled.div`
  padding: 0 0.4rem;
`;

export const Button = styled.button`
  padding: 12px 20px;
`;

export const ErrorGuide = styled.p`
  ${({ theme }) => theme.textSet('body2')};
  color: ${({ theme }) => theme.colors.red};
`;
