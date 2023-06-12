import * as React from 'react';
import type { SVGProps } from 'react';
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 22" width={24} height={24} {...props}>
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.386 7.7A1 1 0 0 0 1 8.49V19a2 2 0 0 0 2 2h5v-8h4v8h5a2 2 0 0 0 2-2V8.49a1 1 0 0 0-.386-.79l-8-6.223a1 1 0 0 0-1.228 0l-8 6.223Z"
    />
  </svg>
);
export default SvgHome;
