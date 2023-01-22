import { colors } from '../theme/base';
import { responsive as screen } from '../theme/base/responsive';
import { flex, lineClamp, position, textSet } from '../theme/mixins';

export const theme = {
  ...position,
  ...flex,
  colors,
  textSet,
  lineClamp,
  screen,
};
