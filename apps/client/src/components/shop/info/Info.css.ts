import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

export const InfoElement = style({
  display: 'flex',
  gap: 8,
  whiteSpace: 'initial',
});

export const Detail = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 5.5,
});

export const Label = style({
  padding: '3px 6px',
  backgroundColor: color.white,
  border: `1px solid ${color.gray3}`,
  borderRadius: 4,
  color: color.gray1,
  fontWeight: 400,
  lineHeight: '150%',
});

export const OpeningElement = style({
  display: 'flex',
  gap: 8,
});

export const Opening = style({
  fontSize: 14,
  lineHeight: '150%',
  letterSpacing: '-0.28',
  color: color.black,
});

export const ActiveOpening = style({
  fontWeight: 700,
});

export const OpeningDetail = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});
