import { style } from '@vanilla-extract/css';

export const logo = style({
  position: 'absolute',
  top: '33%',
  left: '50%',
  transform: 'transLateX(-50%)',
});

export const buttonGropContaier = style({
  position: 'absolute',
  width: '100%',
  bottom: '102px',
  padding: '0 24px',
});

export const kakaoButton = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#FFCD00',
  margin: '0 0 16px 0',
});

export const kakaoIcon = style({
  position: 'absolute',
  left: '24px',
});
