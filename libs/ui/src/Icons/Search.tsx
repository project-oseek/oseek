import * as React from 'react';
import type { SVGProps } from 'react';

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M11.111 18.222a7.111 7.111 0 1 0 0-14.222 7.111 7.111 0 0 0 0 14.222ZM20 20l-3.867-3.867"
    />
  </svg>
);
export default SvgSearch;
