import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const Header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 8,
});

export const Main = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  whiteSpace: 'initial',
  marginBottom: 16,
});

export const ReviewText = style({
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '150%',
  letterSpacing: '-0.28px',
  color: '#000',
});

export const Footer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  flexWrap: 'wrap',
});
