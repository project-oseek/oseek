import * as React from 'react';
import type { SVGProps } from 'react';

const SvgLikeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path
      fill={props.color}
      d="m12.624 20.481 8.367-8.366c2.056-2.066 2.355-5.444.413-7.603a5.371 5.371 0 0 0-7.798-.217l-1.57 1.58-1.354-1.363C8.617 2.457 5.24 2.157 3.08 4.1a5.371 5.371 0 0 0-.217 7.799l8.584 8.583a.837.837 0 0 0 1.177 0Z"
    />
  </svg>
);
export default SvgLikeFill;
