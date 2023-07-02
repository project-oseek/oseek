import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 17.727V3H6.273" />
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.727 6.273H3V21h14.727V6.273Z" />
  </svg>
);
export default SvgCopy;
