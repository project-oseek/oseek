import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 24,
});

export const ActionContainer = style({ display: 'flex', gap: 20, alignItems: 'center', width: '100%' });
