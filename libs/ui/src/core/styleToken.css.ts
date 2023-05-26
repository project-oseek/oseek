import { createGlobalTheme } from '@vanilla-extract/css';
import { COLOR_PROPERTIES, FONT_SIZE_PROPERTIES, FONT_WEIGHT_PROPERTIES, SIZE_PROPERTIES } from './styleProperties';

const styleToken = createGlobalTheme(':root', {
  color: COLOR_PROPERTIES,
  fontSize: FONT_SIZE_PROPERTIES,
  fontWeight: FONT_WEIGHT_PROPERTIES,
  size: SIZE_PROPERTIES,
});

export default styleToken;
