import * as React from 'react';
import type { SVGProps } from 'react';

const SvgMyPage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path
      fill={props.color}
      d="M21 22v-3c0-1.06-.474-2.078-1.318-2.828C18.838 15.422 17.694 15 16.5 15h-9c-1.193 0-2.338.421-3.182 1.172C3.474 16.922 3 17.939 3 19v3M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </svg>
);
export default SvgMyPage;
