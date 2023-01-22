import { FlattenSimpleInterpolation } from 'styled-components';

import { fontFamily, typography } from '@/theme/constants/typography';

export type FontFamily = keyof typeof fontFamily;
export type Typography = keyof typeof typography;
export type TextSetPropTypes = {
  variant: Typography;
  isBold?: boolean;
  fontFamily?: FontFamily;
};
export type TTextSet = (
  variant: Typography,
  isBold?: boolean,
  fontFamily?: FontFamily
) => FlattenSimpleInterpolation;
