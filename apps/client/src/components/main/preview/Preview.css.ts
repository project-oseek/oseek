import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const Container = style({
  display: 'flex',
  gap: 12,
  overflow: 'auto',
  scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',
  whiteSpace: 'nowrap',

  '::-webkit-scrollbar': {
    display: 'none',
  },
});
