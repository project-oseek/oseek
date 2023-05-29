import * as React from 'react';
import type { SVGProps } from 'react';
const SvgRefresh = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.002 5.6v4.8h-4.801" />
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.994 14.4a7.202 7.202 0 1 1-1.697-7.489l3.705 3.49" />
  </svg>
);
export default SvgRefresh;
