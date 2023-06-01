import * as React from 'react';
import type { SVGProps } from 'react';

const SvgLike = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.466 18.266 6.25-6.25c1.537-1.544 1.76-4.067.31-5.68a4.012 4.012 0 0 0-5.826-.162l-1.173 1.18-1.011-1.018c-1.544-1.535-4.067-1.76-5.68-.308a4.013 4.013 0 0 0-.162 5.826l6.413 6.412a.625.625 0 0 0 .88 0v0Z"
    />
  </svg>
);
export default SvgLike;
