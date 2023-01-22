import { palette } from '@/theme/constants';

export type Color = keyof typeof palette;

export type Colors = {
  [key in Color]: string;
};
