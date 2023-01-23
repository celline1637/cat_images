import styled from 'styled-components/macro';

export const CatViewer = styled.div`
  padding: 1rem;
  @media screen and (min-width: 500px) {
    padding: 24px;
  }

  @media screen and (min-width: 768px) {
    padding: 24px;
  }

  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`;

export const ImgWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  column-count: 1;
  column-gap: 1em;

  @media screen and (min-width: 500px) {
    column-count: 2;
  }

  @media screen and (min-width: 768px) {
    column-count: 3;
  }

  @media screen and (min-width: 1200px) {
    column-count: 3;
    max-width: 1200px;
  }
`;
