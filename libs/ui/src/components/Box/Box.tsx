import React, { ElementType } from 'react';
import { layoutUtilityStyleCss, LayoutUtilityStyle } from '../../core/layoutUtilityStyle.css';
import { HTMLOverridableProps } from '@oseek/lib/types/htmlOverridable.type';

type BoxProps = LayoutUtilityStyle;
type Props<T extends ElementType = 'div'> = HTMLOverridableProps<T, BoxProps>;


const Box = <T extends ElementType = 'div'>({
  as,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  children,
  ...props
}: Props<T>) => {
  const Component = as ?? 'div';
  const utilityProps = {
    display,
    flexDirection,
    justifyContent,
    alignItems,
    margin,
    marginX,
    marginY,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  };

  return (
    <Component
      className={layoutUtilityStyleCss(utilityProps)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Box;
