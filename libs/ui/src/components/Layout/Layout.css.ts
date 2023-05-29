import { style } from '@vanilla-extract/css';
import styleToken from "../../core/styleToken.css";

export const LayoutStyle = style({
  width: 'auto',
  minWidth: styleToken.size.screenMinWidth,
  maxWidth: styleToken.size.screenMaxWidth,
  minHeight: '100%',
  margin: '0 auto',
  backgroundColor: styleToken.color.white,
  position: 'relative',
});
