import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 20,
  cursor: 'pointer',
  selectors: {
    '& + &': {
      borderTop: '1px solid #F7F8F9',
    },
  },
});

export const Title = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});
