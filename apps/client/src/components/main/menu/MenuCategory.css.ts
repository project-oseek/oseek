import { style } from '@vanilla-extract/css';

import { commonStyles } from '@oseek/ui/core';

const { invisibleScrollBar } = commonStyles;

export const Container = style([
  {
    display: 'flex',
    gap: 12,
    marginTop: 24,
  },
  invisibleScrollBar,
]);

export const Category = style({
  minWidth: 96,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  alignItems: 'center',
});
