import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const rightAction = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

export const Container = style({
  backgroundColor: color.white,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ImageContainer = style({
  width: '100%',
  maxWidth: 80,
  height: 'auto',
});

export const Image = style({
  width: '100%',
  height: 'auto',
});

export const TextFieldContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 16,
  marginTop: 24,
});
