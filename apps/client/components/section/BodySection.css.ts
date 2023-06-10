import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'calc(100vh - 130px)',
  overflow: 'scroll',
});
