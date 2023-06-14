import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const Container = style({
  backgroundColor: color.coolGray,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const CuisineContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  flex: 1,
});
