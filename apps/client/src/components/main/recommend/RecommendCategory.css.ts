import { style } from '@vanilla-extract/css';

import { commonStyles, styleToken } from '@oseek/ui/core';

const { color } = styleToken;
const { invisibleScrollBar } = commonStyles;

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  flex: 1,
});

export const CategoryContainer = style([
  {
    display: 'flex',
    gap: 4,
  },
  invisibleScrollBar,
]);

export const Label = style({
  padding: '4px 12px',
  backgroundColor: color.white,
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  border: `1px solid ${color.gray3}`,
  borderRadius: 30,
});

export const RecommendContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  flex: 1,
});
