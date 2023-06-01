import * as React from 'react';
import type { SVGProps } from 'react';

const SvgFavorite = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={24} height={24} {...props}>
    <path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.338 16.827 3.877 2.461c.5.316 1.115-.154.97-.73l-1.124-4.415a.67.67 0 0 1 .223-.677l3.477-2.9c.454-.377.223-1.139-.37-1.177l-4.537-.292a.638.638 0 0 1-.562-.416L12.6 4.421a.638.638 0 0 0-1.2 0L9.708 8.68a.638.638 0 0 1-.562.416l-4.538.292c-.592.039-.823.8-.369 1.177l3.477 2.9a.67.67 0 0 1 .223.677L6.9 18.233c-.177.693.562 1.254 1.154.877l3.608-2.284a.63.63 0 0 1 .676 0v0Z"
    />
  </svg>
);
export default SvgFavorite;
