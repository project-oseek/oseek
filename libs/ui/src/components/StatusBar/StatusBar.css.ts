import { style } from '@vanilla-extract/css';
import styleToken from "../../core/styleToken.css";

export const StatusBarStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
  height: styleToken.size.statusBarHeight,
  padding: '7px',
  backgroundColor: styleToken.color.white,
});
