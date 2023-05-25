import { style } from '@vanilla-extract/css';

const BASE = style({
  color: '#131313',
  lineHeight: '150%',
});

export type VariantKeyType = 'H1' | 'ST1' | 'ST2' | 'B1' | 'B2';

type VariantsType = {
  [K in VariantKeyType]: string;
};

export const VARIANTS: VariantsType = {
  H1: style([BASE, { fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em' }]),
  ST1: style([BASE, { fontWeight: 700, fontSize: 16, letterSpacing: '-0.02em' }]),
  ST2: style([BASE, { fontWeight: 700, fontSize: 14, letterSpacing: '-0.01em' }]),
  B1: style([BASE, { fontWeight: 400, fontSize: 16, letterSpacing: '-0.02em' }]),
  B2: style([BASE, { fontWeight: 400, fontSize: 16, letterSpacing: '-0.01em' }]),
};
