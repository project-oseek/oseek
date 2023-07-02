import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const Label = style({
  padding: '4px 12px',
  backgroundColor: color.white,
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  border: `1px solid ${color.gray3}`,
  borderRadius: 30,
  cursor: 'pointer',
});
