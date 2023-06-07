import { style } from '@vanilla-extract/css';
import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const LabelBasic = style({
  width: 'fit-content',
  padding: '2px 8px',
  borderRadius: 8,
  backgroundColor: color.grayLight,
  fontSize: 12,
  fontWeight: 400,
  lineHeight: '150%',
  color: color.grayPrimary,
});
