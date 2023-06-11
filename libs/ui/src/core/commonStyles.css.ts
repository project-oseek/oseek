import { style } from '@vanilla-extract/css';

export const commonStyles = {
  invisibleScrollBar: style({
    overflow: 'auto',
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
    whiteSpace: 'nowrap',

    '::-webkit-scrollbar': {
      display: 'none',
    },
  }),
};
