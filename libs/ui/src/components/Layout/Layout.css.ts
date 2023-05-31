import { style } from '@vanilla-extract/css';
import { styleToken } from '../../core';

export const LayoutStyle = style({
  position: 'relative',
  width: 'auto',
  minWidth: styleToken.size.screenMinWidth,
  maxWidth: styleToken.size.screenMaxWidth,
  minHeight: '100%',
  margin: '0 auto',
  backgroundColor: styleToken.color.white,
});
