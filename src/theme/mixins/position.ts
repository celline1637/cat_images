import { TBoxSizeSet, TDirection, TPosCenter } from '../../types/theme/position';

const posCenterX: TPosCenter = (position = 'absolute') => {
  return `
    position: ${position};
    left: 50%;
    transform: translateX(-50%);
  `;
};

const posCenterY: TPosCenter = (position = 'absolute') => {
  return `
    position: ${position};
    top: 50%;
    transform: translateY(-50%);
  `;
};

const posCenter: TPosCenter = (position = 'absolute') => {
  return `
    position: ${position};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
};

const marginSet: TBoxSizeSet = (direction: TDirection, val: string) => {
  switch (direction) {
    case 'top':
      return `
        margin-block-start: ${val};
      `;
    case 'bottom':
      return `
        margin-block-end: ${val};
      `;
    case 'left':
      return `
        margin-inline-start: ${val};
      `;
    case 'right':
      return `
        margin-inline-end: ${val};
      `;
    default:
      return;
  }
};

const paddingSet: TBoxSizeSet = (direction: TDirection, val: string) => {
  switch (direction) {
    case 'top':
      return `
        padding-block-start: ${val};
      `;
    case 'bottom':
      return `
        padding-block-end: ${val};
      `;
    case 'left':
      return `
        padding-inline-start: ${val};
      `;
    case 'right':
      return `
        padding-inline-end: ${val};
      `;
    default:
      return;
  }
};

const calcVw = (width: number, px: number) => {
  return `${(px / width) * 100}vw`;
};

const calcVwM = (px: number) => {
  return `${(px / 375) * 100}vw`;
};

export const position = {
  posCenterX,
  posCenterY,
  posCenter,
  paddingSet,
  marginSet,
  calcVw,
  calcVwM,
};
