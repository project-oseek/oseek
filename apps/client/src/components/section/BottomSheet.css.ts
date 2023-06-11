import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  width: '100%',
  height: '74px',
  padding: '0 16px 16px 16px',
});

export const gradient = style({
  position: 'absolute',
  left: '0',
  top: '-20px',
  width: '100%',
  height: '20px',
  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
});
