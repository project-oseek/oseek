import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '20px 20px 24px 40px',
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

export const DescriptionContainer = style({
  marginLeft: 24,
  cursor: 'pointer',
});
