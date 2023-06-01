import { createGlobalTheme } from '@vanilla-extract/css';

const COLOR_PROPERTIES = {
  primary: '#3673EE',
  secondary: '#EE3636',

  grayPrimary: '#858B93',
  graySecondary: '#D6D8DB',
  grayLight: '#F6F6F6',

  black: '#131313',
  white: '#FFFFFF',
} as const;

const FONT_SIZE_PROPERTIES = {
  heading1: '22px',
  subtitle1: '16px',
  subtitle2: '14px',
  body: '16px',
};

const FONT_WEIGHT_PROPERTIES = {
  regular: '400',
  bold: '700',
};

const SIZE_PROPERTIES = {
  statusBarHeight: '24px',
  headerHeight: '56px',
  iconSize: '24px',
  screenMinWidth: '360px',
  screenMaxWidth: '768px',
};

export const styleToken = createGlobalTheme(':root', {
  color: COLOR_PROPERTIES,
  fontSize: FONT_SIZE_PROPERTIES,
  fontWeight: FONT_WEIGHT_PROPERTIES,
  size: SIZE_PROPERTIES,
});
