import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px 20px 24px 20px',
});

export const ImageContainer = style({
  width: '100%',
  maxWidth: 80,
  height: 'auto',
});

export const Image = style({
  width: '100%',
  height: 'auto',
});

export const UserContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4,
  marginTop: 16,
});

export const Button = style({
  height: 44,
  padding: 0,
  marginTop: 24,
});
