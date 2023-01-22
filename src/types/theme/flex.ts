type TFlexAttribute =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'normal'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | 'unsafe center'
  | 'initial'
  | 'revert'
  | 'unset';

type TJustify = TFlexAttribute | 'left' | 'right' | 'revert-layer';
type TAlign = TFlexAttribute | 'baseline' | 'first baseline' | 'last baseline';

export type FlexSet = (justify?: TJustify, align?: TAlign, gap?: string) => string;
