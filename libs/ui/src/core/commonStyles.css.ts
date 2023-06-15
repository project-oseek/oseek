import { style } from '@vanilla-extract/css';

export const commonStyles = {
  invisibleScrollBar: style({
    overflow: 'auto',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    whiteSpace: 'nowrap',

    '::-webkit-scrollbar': {
      display: 'none',
    },
  }),
};
