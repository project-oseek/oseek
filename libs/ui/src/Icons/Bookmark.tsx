import * as React from 'react';
import type { SVGProps } from 'react';

const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path fill={props.color} d="M19.5 22.643 12 17.286l-7.5 5.357V5.5a2.143 2.143 0 0 1 2.143-2.143h10.714A2.143 2.143 0 0 1 19.5 5.5v17.143Z" />
  </svg>
);
export default SvgBookmark;
