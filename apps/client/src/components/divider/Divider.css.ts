import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;
export const DividerBasic = style({
  height: 12,
  width: 1,
  backgroundColor: color.gray3,
  margin: '0px 8px',
});
