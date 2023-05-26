import * as React from 'react';
import type { SVGProps } from 'react';
const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 12H3.75M10.5 5.25 3.75 12l6.75 6.75" />
  </svg>
);
export default SvgArrowLeft;
