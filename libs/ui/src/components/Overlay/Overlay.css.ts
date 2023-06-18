import { style } from '@vanilla-extract/css';
import { styleToken } from '../../core';

export const backDrop = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: styleToken.color.black,
  opacity: 0.3,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const overlayContanier = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});
