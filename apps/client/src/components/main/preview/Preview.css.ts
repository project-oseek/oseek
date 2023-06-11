import { style } from '@vanilla-extract/css';

import { styleToken, commonStyles } from '@oseek/ui/core';

const { color } = styleToken;
const { invisibleScrollBar } = commonStyles;

export const Container = style([
  {
    display: 'flex',
    gap: 12,
  },
  invisibleScrollBar,
]);
