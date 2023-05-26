import * as React from 'react';
import type { SVGProps } from 'react';
const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path fill="#D6D8DB" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
    <path stroke="#858B93" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m14.4 9.6-4.8 4.8M9.6 9.6l4.8 4.8" />
  </svg>
);
export default SvgDelete;
