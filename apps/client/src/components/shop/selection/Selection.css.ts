import { style } from '@vanilla-extract/css';

import { styleToken } from '@oseek/ui/core';

const { color } = styleToken;

export const Container = style({
  display: 'flex',
  borderBottom: `1px solid ${color.gray3}`,
  position: 'sticky',
  top: 0,
});

export const Button = style({
  flex: 1,
  padding: '12px 20px',
  color: color.gray1,
  fontWeight: 400,
  letterSpacing: '-0.28px',
  backgroundColor: color.white,
  borderRadius: 0,
  fontSize: 14,
});

export const Active = style({
  color: '#000',
});

export const Tab = style({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  bottom: 0,
  height: 2,
  width: 'calc(100% / 3)',
  left: 0,
  transition: '0.3s',

  '::before': {
    content: '',
    height: 2,
    width: '50%',
    backgroundColor: color.black,
  },
});
