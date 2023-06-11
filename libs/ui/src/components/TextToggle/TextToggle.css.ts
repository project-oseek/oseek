import { style } from '@vanilla-extract/css';
import { styleToken } from '../../core';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '56px',
  padding: '16px',
  margin: '0 0 12px 0',
  backgroundColor: styleToken.color.coolGray,
  border: `1px solid ${styleToken.color.gray2}`,
  borderRadius: '12px',
  cursor: 'pointer',
});

export const activeContainer = style({
  borderColor: styleToken.color.primary,
  backgroundColor: 'rgba(54, 115, 238, 0.1)',
});

export const text = style({
  marginLeft: '8px',
  color: styleToken.color.gray1,
});

export const activeText = style({
  color: styleToken.color.primary,
});
