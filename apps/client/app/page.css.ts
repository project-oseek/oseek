import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const LeftAction = style({
  display: 'flex',
  alignItems: 'center',
});

export const Container = style({
  backgroundColor: color.coolGray,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});
