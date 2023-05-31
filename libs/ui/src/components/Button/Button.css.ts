import { style } from '@vanilla-extract/css';

import { styleToken } from '../../core';

const { color } = styleToken;
export const Basic = style({
  padding: 16,
  borderRadius: 8,
  fontWeight: 700,
  fontSize: 16,
  lineHeight: '150%',
  border: 'none',
  cursor: 'pointer',
  width: '100%',
  backgroundColor: color.primary,
  color: color.white,

  ':hover': {
    opacity: '0.7',
  },
});
