import * as React from 'react';
import type { SVGProps } from 'react';

const SvgStatus = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 46 10" width={24} height={24} {...props}>
    <path fill="#000" fillRule="evenodd" d="M10 0H0v10h10V0Zm8 5a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm22 5 6-10H34l6 10Z" clipRule="evenodd" />
  </svg>
);
export default SvgStatus;
