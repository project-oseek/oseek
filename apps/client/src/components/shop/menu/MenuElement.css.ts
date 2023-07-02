import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const Container = style({
  display: 'flex',
  gap: 20,
  alignItems: 'center',
  borderBottom: `1px solid ${color.gray3}`,
});

export const Detail = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  whiteSpace: 'initial',
});

export const Image = style({
  borderRadius: 17,
  width: 80,
  height: 80,
});
