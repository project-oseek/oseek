import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const rightAction = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const Container = style({
  backgroundColor: color.white,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});
