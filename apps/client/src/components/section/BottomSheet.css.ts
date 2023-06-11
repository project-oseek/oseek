import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'absolute',
  bottom: 0,
  width: '100%',
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
