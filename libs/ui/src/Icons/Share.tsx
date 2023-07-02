import * as React from 'react';
import type { SVGProps } from 'react';
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 8l-4-4-4 4M12 4v11" />
  </svg>
);
export default SvgShare;
