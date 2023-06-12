import * as React from 'react';
import type { SVGProps } from 'react';

const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.556 4 20 8.444 8.444 20H4v-4.444L15.556 4Z" />
  </svg>
);
export default SvgEdit;
