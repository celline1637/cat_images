import { css } from 'styled-components';

export const lineClamp = (limit: number) => css`
  display: -webkit-box;
  overflow: hidden;
  word-break: break-word;
  word-wrap: break-word;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: ${limit};
`;
