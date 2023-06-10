import { style } from '@vanilla-extract/css';
import { styleToken } from '../../core';

export const LayoutStyle = style({
  width: '100%',
  maxWidth: styleToken.size.screenMaxWidth,
  minHeight: '100vh',
  margin: '0 auto',
  backgroundColor: styleToken.color.white,
  position: 'relative',
});
