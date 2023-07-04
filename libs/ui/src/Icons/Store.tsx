import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStore = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <g stroke="#858B93" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <path d="M5.333 13.3V19a.667.667 0 0 0 .667.667h12a.667.667 0 0 0 .667-.667v-5.7M5.833 5h12.334a.675.675 0 0 1 .641.483L20 9.667H4l1.192-4.184A.675.675 0 0 1 5.833 5v0Z" />
      <path d="M9.333 9.666V11A2.667 2.667 0 1 1 4 11V9.666" />
      <path d="M14.667 9.666V11a2.667 2.667 0 1 1-5.333 0V9.666" />
      <path d="M20 9.666V11a2.667 2.667 0 1 1-5.334 0V9.666" />
    </g>
  </svg>
);
export default SvgStore;
