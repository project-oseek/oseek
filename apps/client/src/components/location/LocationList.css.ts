import { style } from '@vanilla-extract/css';
import { styleToken } from '@oseek/ui';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100% - 100px)',
  marginTop: '16px',
});

export const listContainer = style({
  marginTop: '16px',
  padding: 0,
  maxHeight: 'calc(100% - 160px)',
  overflowY: 'auto',
});

export const listItem = style({
  padding: '16px 0',
  borderBottom: `1px solid #F7F8F9`,
  listStyle: 'none',
  cursor: 'pointer',
});
