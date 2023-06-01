import * as React from 'react';
import type { SVGProps } from 'react';

const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m6 10 6 6 6-6" />
  </svg>
);
export default SvgArrowDown;
