import { style } from '@vanilla-extract/css';

import { styleToken } from '../../core';

const { color, fontSize, fontWeight } = styleToken;

const BASE = style({
  color: color.black,
  lineHeight: '150%',
});

export type VariantKeyType = 'H1' | 'ST1' | 'ST2' | 'B1' | 'B2';

type VariantsType = {
  [K in VariantKeyType]: string;
};

export const VARIANTS: VariantsType = {
  H1: style([BASE, { fontWeight: fontWeight.bold, fontSize: fontSize.heading1, letterSpacing: '-0.02em' }]),
  ST1: style([BASE, { fontWeight: fontWeight.bold, fontSize: fontSize.subtitle1, letterSpacing: '-0.02em' }]),
  ST2: style([BASE, { fontWeight: fontWeight.bold, fontSize: fontSize.subtitle2, letterSpacing: '-0.01em' }]),
  B1: style([BASE, { fontWeight: fontWeight.regular, fontSize: fontSize.body, letterSpacing: '-0.02em' }]),
  B2: style([BASE, { fontWeight: fontWeight.regular, fontSize: fontSize.body, letterSpacing: '-0.01em' }]),
};
