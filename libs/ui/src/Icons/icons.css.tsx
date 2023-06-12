import { style } from '@vanilla-extract/css';

import { styleToken } from '../core';

const { color } = styleToken;

export const IconWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const IconStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 50,
  height: 50,
  border: '1px solid black',
  borderRadius: 10,
});

export const WrapperStyle = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  columnGap: 30,
  rowGap: 10,
  border: '1px solid black',
  backgroundColor: color.coolGray,
});
