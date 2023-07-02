import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 2,
});

export const Title = style({
  color: color.darkGray,
  fontSize: 10,
  fontWeight: 400,
  lineHeight: '150%',
  letterSpacing: '-0.1px',
});
