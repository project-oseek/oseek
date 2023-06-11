import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const gray1Color = style({
  color: color.gray1,
});

export const subColor = style({
  color: color.secondary,
});

export const BigContainer = style({
  width: '100%',
  borderRadius: 32,
  padding: 8,
  paddingBottom: 24,
  border: '1px solid blue',
  display: 'flex',
  flexDirection: 'column',
});

export const BigImage = style({
  borderRadius: 24,
  marginBottom: 16,
  backgroundColor: color.gray2,
});

export const BigInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const BigInfoTitleContainer = style({
  display: 'flex',
  gap: 20,
  marginBottom: 9.5,
});

export const BigInfoTitle = style({
  flex: 1,
  color: color.black,
  display: 'flex',
  alignItems: 'center',
  gap: 5,
});

export const BigInfoDetailContainer = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 17.5,
});

export const BigAverage = style({
  color: color.gray1,
  display: 'flex',
  gap: 2,
  alignItems: 'center',
});

export const LabelContainer = style({
  display: 'flex',
  gap: 4,
  flexWrap: 'wrap',
  alignItems: 'center',
});

export const SmallContainer = style({
  minWidth: 176,
  padding: 8,
  backgroundColor: color.white,
  borderRadius: 16,
  display: 'flex',
  flexDirection: 'column',
});

export const SmallImage = style({
  borderRadius: 10,
  backgroundColor: color.gray2,
  marginBottom: 8,
});

export const SmallTitleContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  marginBottom: 9.5,
});

export const SmallInfoContainer = style({
  display: 'flex',
  alignItems: 'center',
});

export const Favorite = style({
  marginRight: 6,
  cursor: 'pointer',
});
