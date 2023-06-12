import * as React from 'react';
import type { SVGProps } from 'react';

const SvgPhoto = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 17.59a1.636 1.636 0 0 1-1.636 1.637H4.636A1.636 1.636 0 0 1 3 17.591v-9a1.636 1.636 0 0 1 1.636-1.636H7.91L9.545 4.5h4.91l1.636 2.455h3.273A1.636 1.636 0 0 1 21 8.59v9Z"
    />
    <path stroke={props.color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15.955a3.273 3.273 0 1 0 0-6.546 3.273 3.273 0 0 0 0 6.546Z" />
  </svg>
);
export default SvgPhoto;
