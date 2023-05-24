import { style } from '@vanilla-extract/css';

export const ButtonBasicStyle = style({
  padding: 16,
  borderRadius: 8,
  fontWeight: 700,
  fontSize: 16,
  lineHeight: '150%',
  border: 'none',
  cursor: 'pointer',
  width: '100%',
  backgroundColor: '#3673ee',
  color: '#ffffff',

  ':hover': {
    opacity: '0.7',
  },
});
