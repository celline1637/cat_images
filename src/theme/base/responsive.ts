import { size } from '../../theme/constants';

export const responsive = {
  mobile: `screen and (max-width: ${size.mobile}px)`,
  mobile_l: `screen and (max-width: ${size.mobile_l}px)`,
  tablet: `screen and (max-width: ${size.tablet}px)`,
  desktop: `screen and (min-width: ${size.desktop}px)`,
  desktop_m: `screen and (min-width: ${size.desktop_m}px)`,
  desktop_l: `screen and (min-width: ${size.desktop_l}px)`,
};
