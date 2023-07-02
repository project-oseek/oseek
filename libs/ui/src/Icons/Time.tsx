import * as React from 'react';
import type { SVGProps } from 'react';
const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path stroke={props.color} strokeMiterlimit={10} strokeWidth={1.5} d="M12.5 19a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z" />
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12.5 7.125V11.5h4.375" />
  </svg>
);
export default SvgTime;
