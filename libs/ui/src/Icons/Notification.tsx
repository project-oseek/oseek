import * as React from 'react';
import type { SVGProps } from 'react';
const SvgNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.382 16.83v.643a2.576 2.576 0 1 0 5.151 0v-.644M6.179 9.746a5.787 5.787 0 0 1 5.819-5.794c3.187.024 5.739 2.672 5.739 5.867v.571c0 2.882.603 4.556 1.135 5.473a.644.644 0 0 1-.556.966H5.6a.644.644 0 0 1-.555-.966c.531-.917 1.135-2.591 1.135-5.473v-.644Z"
    />
  </svg>
);
export default SvgNotification;
