import { style } from '@vanilla-extract/css';

export const colorContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
});

export const color = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 50,
  height: 50,
  border: '1px solid black',
  borderRadius: 10,
});

export const rootContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  colGap: 30,
  rowGap: 10,
  border: '1px solid black',
  backgroundColor: '#f6f6f6',
});
