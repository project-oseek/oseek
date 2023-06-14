import { createGlobalTheme } from '@vanilla-extract/css';

export const COLOR_PROPERTIES = {
  primary: '#3673EE',
  secondary: '#EE3636',

  gray1: '#858B93',
  gray2: '#D6D8DB',
  gray3: '#E6E8EB',
  darkGray: '#616161',
  coolGray: '#F6F6F6',

  black: '#131313',
  white: '#FFFFFF',
} as const;

const FONT_SIZE_PROPERTIES = {
  heading1: '22px',
  heading2: '20',
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
  appBarHeight: '56px',
  iconSize: '24px',
  screenMinWidth: '360px',
  screenMaxWidth: '768px',
};

const Z_INDEX_PROPERTIES = {
  modal: '1000',
  popover: '1100',
  toast: '1200',
  tooltip: '1300',
};

export const styleToken = createGlobalTheme(':root', {
  color: COLOR_PROPERTIES,
  fontSize: FONT_SIZE_PROPERTIES,
  fontWeight: FONT_WEIGHT_PROPERTIES,
  size: SIZE_PROPERTIES,
  zIndex: Z_INDEX_PROPERTIES,
});
