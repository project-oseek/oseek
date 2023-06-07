import { style } from '@vanilla-extract/css';
import { styleToken } from '../../core/styleToken.css';

export const rootContainer = style({
  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: styleToken.size.appBarHeight,
  padding: '16px',
  backgroundColor: styleToken.color.white,
});

export const actionContainer = style({
  flex: '1 1',
  whiteSpace: 'nowrap',
});

export const title = style({
  margin: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  flex: '2 1',
  textAlign: 'center',
  wordBreak: 'break-all',
});

export const rightContainer = style([
  actionContainer,
  {
    textAlign: 'right',
  },
]);
