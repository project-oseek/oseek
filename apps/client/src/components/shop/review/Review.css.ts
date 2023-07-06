import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

export const Summary = style({
  display: 'flex',
  gap: 8,
  padding: '0px 16px',
});

export const Label = style({
  fontSize: 12,
  fontWeight: 500,
  lineHeight: '150%',
  letterSpacing: '-0.24px',
  color: color.primary,
  borderRadius: 4,
  backgroundColor: 'rgba(54, 115, 238, 0.10)',
});
