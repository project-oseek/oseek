import { style } from '@vanilla-extract/css';
import { styleToken } from '../../core';

export const LayoutStyle = style({
  width: '100%',
  // 질문: 저희가 모바일 웹뷰일 경우에는 폰의 해상도가 360 미만인 경우도 있어서
  // minWidth가 있으면 화면이 360 미만일 때 좌우 스크롤이 생기면서 깨지지 않을까요?
  // minWidth: styleToken.size.screenMinWidth,
  maxWidth: styleToken.size.screenMaxWidth,
  minHeight: '100vh',
  margin: '0 auto',
  backgroundColor: styleToken.color.white,
  position: 'relative',
});
