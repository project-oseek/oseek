import * as React from 'react';
import type { SVGProps } from 'react';
const SvgCrosshair = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM12 4v3.478M4 12h3.478M12 20v-3.478M20 12h-3.478"
    />
  </svg>
);
export default SvgCrosshair;
