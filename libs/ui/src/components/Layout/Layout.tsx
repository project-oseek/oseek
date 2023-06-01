import React, { HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

import * as S from './Layout.css';

type Props = HTMLAttributes<HTMLDivElement>;

export const Layout = ({ children, className, ...props }: PropsWithChildren<Props>) => (
  <main className={clsx([S.LayoutStyle, className])} {...props}>
    {children}
  </main>
);
