import { style } from '@vanilla-extract/css';
import { styleToken } from '../../core';

export const alertContainer = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '320px',
  width: 'calc(100% - 40px)',
  borderRadius: '16px',
  backgroundColor: styleToken.color.white,
  padding: '32px 20px 20px 20px',
  zIndex: styleToken.zIndex.modal,
});

export const alertBody = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const alertFooter = style({
  display: 'flex',
  marginTop: '32px',
});

export const bodyTextGap = style({
  marginTop: '12px',
});

export const buttonGap = style({
  marginRight: '12px',
});

export const button = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  height: '48px',
});
