import { style } from '@vanilla-extract/css';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: 'auto',
  transition: 'all 0.3s ease-in-out 0s',
  selectors: {
    '& + &': {
      borderTop: '1px solid #E6E8EB',
    },
  },
});

export const Title = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '16px 20px',
  cursor: 'pointer',
  whiteSpace: 'pre-wrap',
});

export const Date = style({
  fontSize: '10px',
  color: '#858B93',
});

export const Description = style({
  padding: '20px',
  whiteSpace: 'pre-wrap',
  backgroundColor: '#F7F8F9',
});

export const DisplayNone = style({
  display: 'none',
});
