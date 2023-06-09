import { style } from '@vanilla-extract/css';
import { styleToken } from '../../core/styleToken.css';

export const rootContainer = style({
  position: 'relative',
  padding: '12px',
  width: '100%',
  height: 'auto',
  background: styleToken.color.white,
  border: `1px solid ${styleToken.color.gray2}`,
  borderRadius: '12px',
});

export const containOutlint = style({
  border: `1px solid ${styleToken.color.black}`,
});

export const focusOutline = style({
  border: `1px solid ${styleToken.color.primary}`,
});

export const inputContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const label = style({
  display: 'block',
  fontWeight: styleToken.fontWeight.regular,
  fontSize: '12px',
  lineHeight: 1.5,
  letterSpacing: '-0.01em',
  color: styleToken.color.gray2,
  marginBottom: '8px',
});

export const input = style({
  boxSizing: 'border-box',
  flex: '1 1 100%',
  height: '24px',
  border: 'unset',
  fontWeight: styleToken.fontWeight.bold,
  fontSize: '16px',
  lineHeight: 1.5,
  letterSpacing: '-0.02em',
  textTransform: 'capitalize',
  color: styleToken.color.black,
  caretColor: styleToken.color.primary,
  ':focus': {
    outline: 'none',
  },
  '::placeholder': {
    color: styleToken.color.gray2,
    paddingLeft: '2px',
  },
});

export const actionContainer = style({
  height: '24px',
  width: '24px',
  flex: '1 1 24px',
});
