import * as React from 'react';
import type { SVGProps } from 'react';

const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.546 10.546C18.546 15.636 12 20 12 20s-6.545-4.364-6.545-9.454a6.545 6.545 0 1 1 13.09 0Z"
    />
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12.727a2.182 2.182 0 1 0 0-4.363 2.182 2.182 0 0 0 0 4.363Z" />
  </svg>
);
export default SvgMap;
