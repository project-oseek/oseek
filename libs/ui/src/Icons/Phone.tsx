import * as React from 'react';
import type { SVGProps } from 'react';
const SvgPhone = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.056 15.95v2.414a1.609 1.609 0 0 1-1.754 1.61 15.921 15.921 0 0 1-6.943-2.47 15.687 15.687 0 0 1-4.827-4.827 15.92 15.92 0 0 1-2.47-6.975 1.61 1.61 0 0 1 1.602-1.754h2.413a1.609 1.609 0 0 1 1.609 1.384c.102.772.29 1.53.563 2.26a1.609 1.609 0 0 1-.362 1.698l-1.022 1.022a12.871 12.871 0 0 0 4.827 4.826l1.022-1.021a1.61 1.61 0 0 1 1.697-.362c.73.272 1.489.461 2.261.563a1.61 1.61 0 0 1 1.384 1.633Z"
    />
  </svg>
);
export default SvgPhone;
