import { style } from '@vanilla-extract/css';

import { styleToken } from '../../core';

const { color, fontSize, fontWeight } = styleToken;

const BASE = style({
  color: color.black,
  lineHeight: '150%',
});

export type VariantKeyType = 'H1' | 'H2' | 'ST1' | 'ST2' | 'ST3' | 'B1' | 'B2' | 'D1';

type VariantsType = {
  [K in VariantKeyType]: string;
};

export const VARIANTS: VariantsType = {
  H1: style([BASE, { fontWeight: fontWeight.bold, fontSize: fontSize.heading1, letterSpacing: '-0.02em' }]),
  H2: style([BASE, { fontWeight: fontWeight.bold, fontSize: fontSize.heading2, letterSpacing: '-0.02em' }]),
  ST1: style([BASE, { fontWeight: fontWeight.bold, fontSize: fontSize.subtitle1, letterSpacing: '-0.02em' }]),
  ST2: style([BASE, { fontWeight: fontWeight.bold, fontSize: fontSize.subtitle2, letterSpacing: '-0.01em' }]),
  ST3: style([BASE, { fontWeight: fontWeight.medium, fontSize: fontSize.subtitle3, letterSpacing: '-0.01em' }]),
  B1: style([BASE, { fontWeight: fontWeight.regular, fontSize: fontSize.body1, letterSpacing: '-0.28px' }]),
  B2: style([BASE, { fontWeight: fontWeight.regular, fontSize: fontSize.body2, letterSpacing: '-0.01em' }]),
  D1: style([BASE, { fontWeight: fontWeight.regular, fontSize: fontSize.description1, letterSpacing: '-0.12px' }]),
};
