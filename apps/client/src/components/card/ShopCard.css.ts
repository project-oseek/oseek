import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;
export const BigContainer = style({
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
  backgroundColor: color.graySecondary,
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

export const BigDivider = style({
  height: 12,
  width: 1,
  backgroundColor: color.gray3,
  margin: '0px 8px',
});

export const gray1Color = style({
  color: color.grayPrimary,
});

export const subColor = style({
  color: color.secondary,
});

export const BigAverage = style({
  color: color.grayPrimary,
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
