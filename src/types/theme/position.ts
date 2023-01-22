export type TPosition = 'fixed' | 'absolute' | 'static' | 'relative' | 'sticky';
export type TDirection = 'top' | 'bottom' | 'left' | 'right';
export type TPosCenter = (position?: TPosition) => string;
export type TBoxSizeSet = (direction: TDirection, val: string) => string;
export type CalcVw = (width: number, px: number) => string;
export type CalcVwM = (px: number) => string;
