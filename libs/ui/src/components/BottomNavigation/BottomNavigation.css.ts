import { style } from '@vanilla-extract/css';

import { styleToken } from '../../core';

const { color } = styleToken;

export const BottomNavigationStyle = style({
  display: 'flex',
  backgroundColor: color.white,
  boxShadow: '0px -4px 12px rgba(0, 0, 0, 0.05)',
});

export const NavigationButton = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.white,
  color: color.gray1,
  fontWeight: 700,
  fontSize: 10,
  flex: 1,
  borderRadius: 0,
  padding: 16,
});

export const ActiveNavigationButton = style({
  color: color.primary,
});
