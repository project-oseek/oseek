import { style } from '@vanilla-extract/css';

import { commonStyles } from '@oseek/ui/core';

const { invisibleScrollBar } = commonStyles;

export const MainContainer = style([
  {
    flex: 1,
  },
  invisibleScrollBar,
]);
