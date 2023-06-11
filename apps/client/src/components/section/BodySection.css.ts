import { style } from '@vanilla-extract/css';

export const container = style({
  flex: '1 0 auto',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100px',
  overflow: 'scroll',
});
