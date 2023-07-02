import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const DividerTypeStyle = {
  horizontal: style({
    width: '100%',
    height: 8,
  }),
  vertical: style({
    width: 1,
    height: 12,
    margin: '0px 8px',
  }),
};

export const DividerBasic = style({
  backgroundColor: color.gray3,
});
