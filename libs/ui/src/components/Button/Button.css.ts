import { style } from '@vanilla-extract/css';

import { styleToken } from '../../core';

const { color } = styleToken;

export type ButtonType = 'Primary' | 'Line' | '';
export const Basic = style({
  padding: 16,
  borderRadius: 8,
  fontWeight: 700,
  fontSize: 16,
  lineHeight: '150%',
  border: '1px solid transparent',
  cursor: 'pointer',
  width: '100%',
});

export const ButtonTypeStyle: { [K in ButtonType]: string } = {
  Primary: style({
    backgroundColor: color.primary,
    color: color.white,

    ':disabled': {
      opacity: 0.4,
      pointerEvents: 'none',
    },

    ':active': {
      backgroundColor: '#0b49c5',
    },
  }),
  Line: style({
    border: `1px solid ${color.graySecondary}`,
    backgroundColor: color.white,
    color: color.black,

    ':disabled': {
      opacity: 0.4,
      pointerEvents: 'none',
    },

    ':active': {
      border: `1px solid ${color.grayPrimary}`,
    },
  }),
  '': style({}),
};
