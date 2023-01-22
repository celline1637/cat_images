import { css } from 'styled-components';

import { fontFamily, typography } from '../../theme/constants/typography';

import { FontFamily, Typography } from '../../types/theme/typography';

const pxToRem = (value: number) => {
  return `${value / 16}rem`;
};

export const textSet = (
  fontType: Typography,
  bold = false,
  fontFamilyType: FontFamily = 'default'
) => {
  return css`
    font-family: ${fontFamily[fontFamilyType]};
    font-size: ${pxToRem(typography[fontType].size)};
    line-height: 150%;
    font-weight: ${bold ? '600' : 'normal'};
  `;
};
