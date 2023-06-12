import * as React from 'react';
import type { SVGProps } from 'react';

const SvgHomeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M3.386 8.7A1 1 0 0 0 3 9.49V20a2 2 0 0 0 2 2h5v-8h4v8h5a2 2 0 0 0 2-2V9.49a1 1 0 0 0-.386-.79l-8-6.222a1 1 0 0 0-1.228 0l-8 6.222Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHomeFill;
